import React from "react"

function Meme() {
    return (
        <section className="meme">
            <form className="meme--form">
                <label htmlFor="top-text">Top text</label>
                <label htmlFor="bottom-text">Bottom text</label>
                <input id="top-text" type="text" placeholder="Shut up"/>
                <input id="bottom-text" type="text" placeholder="And take my money"/>
                <button className="" type="submit">Get a new meme image 🖼</button>
            </form>
        </section>
    )
}

export default Meme