import React from 'react';
import { NavLink } from 'react-router-dom';

const News = () => {
    return (
        <section className="volnav-section">
            <div className="main-vol-pic"></div>
            <p className="vol-quote">Jesteśmy jak ocean, składający się z maleńkich kropelek, które razem tworzą piękny, silny żywioł. Kiedy każdy z nas zaangażuje się trochę, tyle ile może, to razem możemy dać dzieciakom przyszłość, o jakiej marzą i na jaką zasługują</p>
            <div className="vol-links">
                <NavLink to='/info'>
                    <div className="vol-link info"></div>
                </NavLink>
                <NavLink to='/dzieci'>
                    <div className="vol-link kids"></div>
                </NavLink>
                <NavLink to='/mlodziez'>
                    <div className="vol-link junior"></div>
                </NavLink>
                <NavLink to='/seniorzy'>
                    <div className="vol-link senior"></div>
                </NavLink>
            </div>
        </section>
    )
}

export default News;
