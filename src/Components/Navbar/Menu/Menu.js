import './Menu.css'

const Menu = (items) => {
    return (
        <div className={items.active ? 'menu active' : 'menu'}>
            <div className="menu__content">
                <ul className="ul-menu">
                    <li className="li-menu">{items.buttons}</li>
                </ul>
                <span className="passlocker_inc">© 2023 passlocker Inc.</span>
            </div>
        </div>
    );
};

export default Menu;