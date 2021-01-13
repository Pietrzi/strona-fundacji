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
            <div className="statut-container">
                <h2>Statut Fundacji „WIDZIALNE DZIECI”</h2>
                <div className="statut-text-holder">
                    <h3 className="statut-bold-title">Rozdział I</h3>
                    <h3 className="statut-bold-title">Postanowienia</h3>
                    <h3 className="statut-number-title">1.</h3>
                    <p className="statut-text narrow">1.  Fundacja „Widzialne dzieci” zwana dalej Fundacją jest ustanowiona przez   fundatora
                                                Martę Osadkowską, zwaną dalej Fundatorem, w formie aktu notarialnego sporządzonego 
                                                przez notariusza Macieja Marszała w Kancelarii Notarialnej we Wrocławiu, 
                                                ul. Purkyniego 1/4, w dniu 19 listopada 2020r.</p>
                    <p className="statut-text narrow">2.  Fundacja działa na zasadach określonych w ustawie z dnia 6 kwietnia 1984r. o
                                                fundacjach oraz w niniejszym statucie.</p>
                    <h3 className="statut-number-title">2.</h3>
                    <p className="statut-text">Ministrem właściwym ze względu na cel Fundacji jest Minister Rodziny, Pracy i Polityki Społecznej.</p>
                    <h3 className="statut-number-title">3.</h3>
                    <p className="statut-text narrow">1. 	Siedzibą Fundacji jest Wrocław.</p>
                    <p className="statut-text narrow">2. 	Fundacja działa na obszarze Rzeczpospolitej Polskiej, a w razie potrzeby także poza granicami rzeczpospolitej Polskiej.</p>
                    <p className="statut-text narrow">3.	Fundacja może tworzyć oddziały, zakłady, filie, a także przystępować do spółek.</p>
                    <p className="statut-text narrow">4. 	Realizacja zadań statutowych Fundacji może być prowadzona we współpracy z innymi podmiotami.</p>
                    <h3 className="statut-number-title">4.</h3>
                    <p className="statut-text narrow">1. 	Główną działalnością Fundacji jest działalność pożytku publicznego.</p>
                    <p className="statut-text narrow"> 2.	 Fundacja realizuje swoje cele i prowadzi działalność głównie w sposób nieodpłatny.</p>
                    <p className="statut-text narrow">3. 	Fundacja może prowadzić działalność gospodarczą jako działalność dodatkową. Działalność gospodarcza może być prowadzona 
                                                    tylko w rozmiarach służących celom Fundacji.</p>
                    <h3 className="statut-bold-title">Rozdział II</h3>
                    <h3 className="statut-bold-title">Cele i środki działania Fundacji</h3>
                    <h3 className="statut-number-title">5.</h3>
                    <p className="statut-text">Celem Fundacji jest opieka nad dziećmi w trudnej sytuacji materialnej i rodzinnej, wspieranie 
                                                dzieci z dysfunkcyjnych rodzin biologicznych, które mają trudności w wypełnianiu funkcji 
                                                opiekuńczo – wychowawczych oraz wyrównywanie szans dzieci z trudniejszym startem zarówno 
                                                w edukacji jak i rozwoju ich pasji i zainteresowań. Dążymy do zapewnienia optymalnych warunków 
                                                rozwoju i wyrównania szans edukacyjnych dla dzieci. Chcemy stwarzać im jak najlepsze warunki do 
                                                budowania poczucia własnej wartości, rozbudzania ciekawości, rozwijania samodzielności i kreatywności. 
                                                Szczególnie dbamy o dobro tych dzieci, które mają mniejsze szanse na udany start w dorosłe życie, ze 
                                                środowisk zaniedbanych ekonomicznie i kulturowo.</p>
                    <h3 className="statut-number-title">6.</h3>
                    <p className="statut-text">Fundacja realizuje swój cel w szczególności poprzez:</p>
                    <p className="statut-text narrow">1. niesienie pomocy dzieciom i młodzieży pochodzącej z rodzin w trudnej sytuacji życiowej lub materialnej 
                                                oraz wyrównywanie szans tych rodzin i osób;</p>
                    <p className="statut-text narrow">2. działanie na rzecz pomocy osobom zagrożonym dyskryminacją społeczną poprzez umożliwienie im dostępu 
                                                do dóbr kultury i edukacji;</p>
                    <p className="statut-text narrow">3. rozwijanie i umacnianie postaw nastawionych na aktywne współdziałanie w rozwoju społeczeństwa obywatelskiego;</p>
                    <p className="statut-text narrow">4. wspieranie rodziny i systemu pieczy zastępczej;</p>
                    <p className="statut-text narrow">5. przeciwdziałanie uzależnieniom i patologiom społecznym;</p>
                    <p className="statut-text narrow">6. promocja i organizacja wolontariatu;</p>
                    <p className="statut-text narrow">7. wspomaganie działań na rzecz zapobiegania krzywdzeniu dzieci i ochrony ich praw oraz przeciwdziałaniu wykluczeniu 
                                                społecznemu (m.in. edukacja, nauka, ochrona zdrowia, pomoc społeczna, charytatywna i humanitarna);</p>
                    <p className="statut-text narrow">8. działalność charytatywną;</p>
                    <p className="statut-text narrow">9. tworzenie programów mających na celu wyrównanie szans dzieci w edukacji 
                                                (m.in. zapewnienie korepetycji, dodatkowych lekcji);</p>
                    <p className="statut-text narrow">10. organizowanie spotkań mających na celu motywowanie dzieci do nauki i realizowania swoich pasji;</p>
                    <p className="statut-text narrow">11. wykorzystanie social mediów jako platform pomiędzy potrzebującymi a chcącymi pomóc (m.in. w celu przekazywania 
                                                pomocy naukowych, wyposażenia niezbędnego do nauki itp.);</p>
                    <p className="statut-text narrow">12. działanie na rzecz mniejszości narodowych;</p>
                    <p className="statut-text narrow">13. pobudzenie zachowań proekologicznych i sama ekologia;</p>
                    <p className="statut-text narrow">14. działalność na rzecz dzieci i młodzieży;</p>
                    <p className="statut-text narrow">15. uwrażliwienie dzieci i młodzieży na zjawiska ze strefy 
                                                kultury i sztuki oraz tworzenie nowych wartości w tych dziedzinach;</p>
                    <p className="statut-text narrow">16. psychoedukacja dzieci, młodzieży i dorosłych (różnych grup społecznych);</p>
                    <p className="statut-text narrow">17. aktywizacja seniorów poprzez włączanie ich w pomoc organizowaną dla dzieci;</p>
                    <p className="statut-text narrow">18. organizowanie zbiórek na rzecz podopiecznych Fundacji;</p>
                    <p className="statut-text narrow">19. organizowanie akcji mających na celu pomoc potrzebujących dzieci;</p>
                    <p className="statut-text narrow">20. uwrażliwianie dzieci na nierówności społeczne i zachęcanie do pomocy i wsparcia 
                                                dla rówieśników w trudniejszej sytuacji życiowej;</p>
                    <p className="statut-text narrow">21. współpraca z Placówkami Opiekuńczo-Wychowawczymi w celu wyrównywania szans w dostępie 
                                                do edukacji, sportu i dóbr kultury dla jej ich podopiecznych;</p>
                    <p className="statut-text narrow">rozwijanie świadomości zdrowego stylu i trybu życia poprzez wiedzę o odżywianiu, zdrowiu i kondycji 
                                                psychicznej u dzieci i młodzieży.</p>
                    <h3 className="statut-bold-title">Rozdział III</h3>
                    <h3 className="statut-bold-title">Majątek Fundacji</h3>
                    <h3 className="statut-number-title">7.</h3>
                    <p className="statut-text narrow">1. Majątek Fundacji stanowi kapitał założycielski w kwocie 2000 (dwa tysiące) złotych przyznanej przez 
                                                Fundatora oraz środki finansowe, prawa majątkowe, nieruchomości i ruchomości nabyte przez Fundację w trakcie 
                                                jej działania;</p>
                    <p className="statut-text narrow">2. Fundacja odpowiada za zobowiązania całym swoim majątkiem.</p>
                    <p className="statut-text narrow">3. Całość uzyskiwanych przez Fundację dochodów przeznaczone jest wyłącznie na realizację jej celów statutowych.</p>
                    <p className="statut-text narrow">4. W ramach majątku Fundacji na prowadzenie działalności gospodarczej Rada Fundacji przeznacza kwotę 1000 (jeden tysiąc) zł.</p>
                    <h3 className="statut-number-title">8.</h3>
                    <p className="statut-text narrow"> - Dochody Fundacji pochodzą z:</p>
                    <p className="statut-text narrow"> - dotacji, spadków, zapisów, ofiarności publicznej, darowizn oraz innego rodzaju aktywów majątkowych poczynionych na dobro 
                                                Fundacji przez osoby fizyczne i prawne z kraju i zagranicy;</p>
                    <p className="statut-text narrow"> - dochodów ze zbiórek i imprez publicznych;</p>
                    <p className="statut-text narrow"> - - dochodów z działalności odpłatnej;</p>
                    <p className="statut-text narrow"> - dochodów z majątku Fundacji;</p>
                    <p className="statut-text narrow"> - dochodów z działalności gospodarczej;</p>
                    <p className="statut-text narrow"> - innych źródeł określonych każdorazowo uchwałą Rady Fundacji</p>
                    <h3 className="statut-number-title">9.</h3>
                </div>
            </div>
        </section>
    )
}

export default About
