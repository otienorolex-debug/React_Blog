// Displays the blog name received from App.
function Header({ name = "My Blog" }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
