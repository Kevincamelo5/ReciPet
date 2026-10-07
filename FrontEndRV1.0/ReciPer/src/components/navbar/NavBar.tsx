import React from "react"
import './NavBar.css'
import profileimg from './User.svg'

const navbar = () => {
    return (
        <>
            <nav className="navbar">
                {/** simbol y name reciper */}
                <div id="navbar-logo">
                    <h2>Reciper</h2>
                </div>

                { /** filters of search */}
                <div className="pages">
                    <a id="search"> buscar </a>
                    <a id="share"> compartir </a>
                    <a id="saved"> guardadas </a>
                    <a> <input type="text" name="search" id="search" /> </a>
                </div>

                {/** user config */}
                <div id="perfil"><select>
                    <option><img src={profileimg} width={24} height={24} /></option></select>
                    <option></option>
                </div>
            </nav>
        </>
    )
}

const filters = () => {
    return (
        <>
            {/** filters of recipes based in five conditions */}
            <div className="filters">
                <ul>
                    {/** tipe of food or drink that the user wish prepare */}
                    <li><a>Tipo</a></li>
                    {/** kitchen utensils that the user would use or  would not use on the food preparation*/}
                    <li><a>utencilios</a></li>
                    {/** food and beverage preparation time */}
                    <li><a>tiempo de preparacion</a></li>
                    {/** ingredients required to provisions prepared */}
                    <li><a>ingredientes</a></li>
                    {/** not defined */}
                    <li><a></a></li>
                </ul>
            </div>
        </>
    )
}

export default navbar;