import React from 'react';
import First from '../assets/hand.svg';
import Second from '../assets/heart.svg';
import Third from '../assets/star.svg';
import ReactPlayer from 'react-player';

const Home = () => {
    return (
        <header>
            {/* <div className="logo-holder"></div> */}
            <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/516124669/7ccc529533'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
            <p className="home-text">Dajemy dzieciom narzędzia do budowania wymarzonej przyszłośći</p>
            <div className="facts-holder">
                <div className="fact">
                    <img src={First} />
                    <p>13 % polskich rodzin nie może sobie pozwolić na zakup korepetycji dla dziecka, pomimo deklarowanych chęci</p>
                </div>
                <div className="fact">
                    <img src={Second} />
                    <p>Ponad 4% dzieci w Polsce nie ma zapewnionego odpowiedniego miejsca do nauki i odrabiania lekcji</p>
                </div>
                <div className="fact">
                    <img src={Third} />
                    <p>15% Polaków w wieku 16-64 lata ma wykształcenie gimnazjalne, podstawowe lub niepełne podstawowe</p>
                </div>
            </div>
            <div className="header-text">
                <h2>Dziecko chce być dobre. Jeśli nie umie – naucz. Jeśli nie wie – wytłumacz. Jeśli nie może – pomóż.</h2>
                <h2 className="author">~ Janusz Korczak</h2>
            </div>
        </header>
    )
}

export default Home
