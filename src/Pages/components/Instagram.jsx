import { useEffect } from "react";

function InstagramEmbed({
  permalink = "https://www.instagram.com/reel/DYjNN2KsWkx/?igsh=d3AzY2l3MWR6NHp2",
  className = "",
}) {
  useEffect(() => {
    // If embed.js is already loaded, just (re)process the embeds.
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    // Otherwise load the script once; it processes embeds automatically on load.
    const existing = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [permalink]);

  return (
    <div className={`h-full w-full ${className}`}>
      {/* On desktop (md+) force the embed + injected iframe to fill the column height.
          On smaller screens let Instagram render at its natural (portrait) height. */}
      <style>{`
        .ig-fill .instagram-media { margin: 0 auto !important; }
        @media (min-width: 768px) {
          .ig-fill,
          .ig-fill .instagram-media,
          .ig-fill .instagram-media iframe {
            height: 100% !important;
            min-height: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
      <div className="ig-fill h-full w-full">
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
