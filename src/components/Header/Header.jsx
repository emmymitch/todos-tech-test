import "./Header.scss";

const Header = ({resetTasks}) => {
    return(
        <div className="header">
            <h1 className="header__title">My Todos</h1>
            <button onClick={resetTasks} className="header__reset">Reset</button>
        </div>
    )
}

export default Header;