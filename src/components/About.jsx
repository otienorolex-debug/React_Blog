// Shows the blog image and description received from App; the image fallback
// keeps the logo visible when no image prop is provided.
function About({ image = "https://via.placeholder.com/215", about = "" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
