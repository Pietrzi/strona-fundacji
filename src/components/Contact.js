import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="phone-box">
                    <h2>Zadzwoń do nas</h2>
                    <h4>786 - 886 - 779</h4>
                    <h4>kontakt@widzialnedzieci.pl</h4>
                </div>
                <div className="contact-graphic"></div>
            </div>
            <div className="socials-holder">
                <a href="https://www.facebook.com/Fundacja-Widzialne-Dzieci-107014821423632" target="_blank" rel="noreferrer"><div className="face"></div></a>
                <a href="https://instagram.com/widzialnedzieci?igshid=7t72o1u2326z" target="_blank" rel="noreferrer"><div className="inst"></div></a>
            </div>
        </section>
    )
}

export default Contact
