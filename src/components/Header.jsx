import React from "react"

function Header() {
    return (
        <header className="header">
            <div className="header--logo">
                <img className="header--logo-img" src="images/troll-face.png" alt="" />
                <h2 className="header--logo-txt">Meme Generator</h2>
            </div>
            <h3 className="header--heading">React Course - Project 3</h3>
        </header>
    )
}

export default Header