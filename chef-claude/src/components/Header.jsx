import chefClaudeIcon from "/src/images/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header-icon" src={chefClaudeIcon} alt="chef claude icon"/>
            <span className="header-text">Chef Claude</span>
        </header>
    )
}