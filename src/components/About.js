import React from 'react';
import marta from '../assets/marta.jpg';
import edyta from '../assets/edyta.jpg';
import kasia from '../assets/kasia.jpg';
import basia from '../assets/basia.jpg';

const About = () => {
    return (
        <section className="about-section">            
            <div className="team-container">
                <div className="member-box">
                    <img src={marta} alt="marta" className="member-img"/>
                    <p className="member-name">Marta Osadkowska</p>
                    <p className="member-title">Prezes Fundacji</p>
                </div>
                <div className="member-box">
                    <img src={edyta} alt="edyta" className="member-img"/>
                    <p className="member-name">Edyta Ogrodowiak</p>
                    <p className="member-title">Zarząd Fundacji</p>
                </div>
                <div className="member-box">
                    <img src={kasia} alt="kasia" className="member-img"/>
                    <p className="member-name">Katarzyna Dołżycka</p>
                    <p className="member-title">Rada Fundacji</p>
                </div>
                <div className="member-box">
                    <img src={basia} alt="basia" className="member-img"/>
                    <p className="member-name">Barbara Gajos</p>
                    <p className="member-title">Rada Fundacji</p>
                </div>
            </div>
        </section>
    )
}

export default About
