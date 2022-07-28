import "./Header.scss";

const Header = () => {
    return(
        <div className="header">
            <h1 className="header__title">My ToDos</h1>
            <button className="header__reset">Reset</button>
        </div>
    )
}

export default Header;