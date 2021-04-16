import React from 'react';
import First from '../assets/hand.svg';
import Second from '../assets/heart.svg';
import Third from '../assets/star.svg';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <header>
            <div className="header-player-container">
                <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='https://vimeo.com/516124669/7ccc529533'
                        width='100%'
                        height='100%'
                        controls={true}
                        />
                </div>
            </div>
            <div className="home-text-container">
                <p className="home-text">Dajemy dzieciom narzędzia do budowania wymarzonej przyszłośći</p>
                <NavLink className="helper" to='/wsparcie'>pomagaj z nami</NavLink>
            </div>
            <p className="big-why">Dlaczego to robimy?</p>
            <div className="facts-holder">
                <div className="fact">
                    <h3>13%</h3>
                    <p>polskich rodzin nie może sobie pozwolić na zakup korepetycji dla dziecka, pomimo deklarowanych chęci</p>
                </div>
                <div className="fact">
                    <h3>+ 14%</h3>
                    <p>dzieci w Polsce nie ma zapewnionego odpowiedniego miejsca do nauki i odrabiania lekcji</p>
                </div>
                <div className="fact">
                    <h3>15%</h3>
                    <p>Polaków w wieku 16-64 lata ma wykształcenie gimnazjalne, podstawowe lub niepełne podstawowe</p>
                </div>
            </div>
            <div className="header-text">
                <h2>Dziecko chce być dobre. Jeśli nie umie – naucz. Jeśli nie wie – wytłumacz. Jeśli nie może – pomóż.</h2>
                <hr/>
                <h2 className="author">Janusz Korczak</h2>
            </div>
        </header>
    )
}

export default Home
