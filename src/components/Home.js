import React from 'react'

const Home = () => {
    return (
        <header>
            <div className="logo-holder"></div>
            <div className="header-text">
                <h2>Dziecko chce być dobre. Jeśli nie umie – naucz. Jeśli nie wie – wytłumacz. Jeśli nie może – pomóż.</h2>
                <h2 className="author">~ Janusz Korczak</h2>
            </div>
            <div className="socials-holder">
                <a href="https://www.facebook.com/Fundacja-Widzialne-Dzieci-107014821423632" target="_blank" rel="noreferrer"><div className="face"></div></a>
                <a href="https://instagram.com/widzialnedzieci?igshid=7t72o1u2326z" target="_blank" rel="noreferrer"><div className="inst"></div></a>
            </div>
        </header>
    )
}

export default Home
