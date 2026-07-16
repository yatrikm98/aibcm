import { useEffect, useRef, useState } from "react";

function InstagramEmbed({
  permalink = "https://www.instagram.com/reel/DYjNN2KsWkx/?igsh=d3AzY2l3MWR6NHp2",
  className = "",
}) {
  const containerRef = useRef(null);
  const processedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const process = () => {
      if (processedRef.current) return;
      if (window.instgrm && window.instgrm.Embeds) {
        processedRef.current = true;
        window.instgrm.Embeds.process();
      }
    };

    // Watch for the <iframe> Instagram injects, so we can hide the loader once it's in.
    let observer;
    if (containerRef.current) {
      observer = new MutationObserver(() => {
        if (containerRef.current && containerRef.current.querySelector("iframe")) {
          setLoaded(true);
          observer.disconnect();
        }
      });
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    if (window.instgrm) {
      process();
    } else {
      const existing = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      );
      if (existing) {
        existing.addEventListener("load", process);
      } else {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.addEventListener("load", process);
        document.body.appendChild(script);
      }
    }

    return () => observer && observer.disconnect();
  }, [permalink]);

  return (
    <div className={`ig-embed h-full w-full ${className}`}>
      <style>{`
        .ig-embed {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 1rem;
        }
        /* Keep the embed at its natural width at every screen size so it never
           widens/narrows during Instagram's layout pass. */
        .ig-embed .ig-fill {
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          min-height: 640px;
        }
        .ig-embed .instagram-media,
        .ig-embed .instagram-media iframe {
          margin: 0 auto !important;
          min-width: 0 !important;
          width: 100% !important;
          max-width: 720px !important;
        }
        /* On desktop, cap the embed to the column height (same as the two divs
           on the right) and scroll any overflow instead of growing taller. */
        @media (min-width: 768px) {
          .ig-embed .ig-fill {
            height: 100%;
            min-height: 0;
            overflow-y: auto;
          }
        }
        .ig-loader {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: #fff; z-index: 1;
        }
        .ig-spinner {
          width: 40px; height: 40px; border-radius: 50%;
          border: 3px solid #eee; border-top-color: #d1006c;
          animation: ig-spin 0.8s linear infinite;
        }
        @keyframes ig-spin { to { transform: rotate(360deg); } }
      `}</style>

      {!loaded && (
        <div className="ig-loader" aria-hidden="true">
          <div className="ig-spinner" />
        </div>
      )}

      <div className="ig-fill h-full w-full" ref={containerRef}>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
        ></blockquote>
      </div>
    </div>
  );
}

export default InstagramEmbed;
