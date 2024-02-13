import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return(
    <nav>
        <h3>MiniMercado</h3>
        <div>
            <button>Frutas</button>
            <button>Verduras</button>
            <button>Carnes</button>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar;