import React from 'react';
import { NavLink } from 'react-router-dom';

const Support = () => {
    return (
        <section className="support-section">
            <div className="support-wrapper">
                <div className="support-graphic"></div>
                <div className="support-container">
                    <h2>Wesprzyj naszą fundację</h2>
                    <h3>Nr konta: 54 1600 1462 1862 7655 0000 0001</h3>
                </div>
            </div>
            <div className="support-buttons">
                <a href="https://www.facebook.com/Fundacja-Widzialne-Dzieci-107014821423632" target="_blank" rel="noreferrer">
                    <button>Polub nas na facebook-u</button>
                </a>
                <a href="https://instagram.com/widzialnedzieci?igshid=7t72o1u2326z" target="_blank" rel="noreferrer">
                    <button>Polub nas na instagramie</button>
                </a>
                <NavLink to='/wolontariat'>
                    <button>Zostan wolontariuszem</button>
                </NavLink>
                <NavLink to='/wolontariat'>
                    <button>Zostań mentorem</button>
                </NavLink>
            </div>
            <p className="support-text">Masz inny pomysł? Czekamy na niego!</p>
            <div className="button-keeper">
                <NavLink to='/kontakt' className="additional-button">
                    <button>skontaktuj się z nami</button>
                </NavLink>
            </div>
        </section>
    )
}

export default Support;
