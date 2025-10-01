import chefClydeIcon from "/src/images/chef-clyde-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header-icon" src={chefClydeIcon} alt="chef Clyde icon" />
      <span className="header-text">Chef Clyde</span>
    </header>
  );
}
