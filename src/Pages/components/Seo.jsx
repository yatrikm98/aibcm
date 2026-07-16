// Sets the page <title> and <meta name="description"> per route.
// React 19 automatically hoists these tags into the document <head>.
const Seo = ({ title, description }) => (
    <>
        <title>{title}</title>
        <meta name="description" content={description} />
    </>
);

export default Seo;
