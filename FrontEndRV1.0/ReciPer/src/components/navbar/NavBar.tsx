import React from "react"
import './NavBar.css'

const navbar = () => {
    return (
        <>
            <nav className="navbar">
                {/** logo y nombre reciper */}
                <div id="navbar-logo">
                    <h2>Reciper</h2>
                </div>

                { /** filtros */}
                <ul className="filters"></ul>

                {/** perfil */}
                <div id="perfil"></div>
            </nav>
        </>
    )
}

export default navbar;