import React from "react";
import icon from '../../assets/icon.svg';

const items = [
    {
        id: 'home',
        label: 'Reciper',
        path: '/',
        icon: (
            <img src={icon} alt="icono de app">
                <path d="M3 95" />
            </img>
        )
    }
]

function Navbar() {

    return (
        <>
            {/** navbar component focused to look the principal pages and filters from the app in the over are the pages, the icon
         * off the app, and a search bar. Under the pages are the filters to search recipes in groups based in a relation of 
         * elemnts.
         */}
        </>
    )

}

export default Navbar