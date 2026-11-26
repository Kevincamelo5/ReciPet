import React from "react";
import icon from '../../assets/icon.svg';

const items = [
    {
        id: 'home',
        label: 'Reciper',
        path: '/',
        icon: (
            <img src={icon} alt="icono de app">
                <path d="M3 95L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
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