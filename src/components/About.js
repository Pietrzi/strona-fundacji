import React from 'react';
import marta from '../assets/marta.jpg';
import edyta from '../assets/edyta.jpg';
import kasia from '../assets/kasia.jpg';
import basia from '../assets/basia.jpg';

const About = () => {
    return (
        <section className="about-section">
            <div className="mission-holder">
                <p className="mission-text">
                Wykluczenie edukacyjne to sytuacja, w której dziecko nie realizuje swojego potencjału rozwojowego z przyczyn 
                pozostających częściowo lub całkowicie poza jego wpływem. Przyczyny ekonomiczne i środowiskowe odbierają 
                dzieciakom szanse na korzystanie z edukacji na równi z rówieśnikami. Trudności z nauką lub drobne zaległości 
                kwalifikują dziecko jako „leniwe” i skazują na traumę w szkole. Bezradne dzieci, które w domu nie mają do kogo 
                zwrócić się po pomoc, a w szkole wstydzą się o nią prosić, stają się niewidzialne i tracą szanse na wymarzoną 
                przyszłość.
                </p>
                <p className="mission-text">Naszą misją jest uczynić wszystkie te dzieci widzialnymi.</p>
                <p className="mission-text mission-text-second">
                    Dajemy młodym ludziom narzędzia w postaci korepetycji i dostępu do zajęć dodatkowych, aby mogły budować sobie 
                    taką przyszłość, o jakiej marzą. Wszystkie dzieci mogą latać, wystarczy tylko umożliwić im rozwinięcie skrzydeł.
                </p>
                <hr></hr>
            </div>
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
                    <p className="statut-text narrow">1. Dochody Fundacji pochodzą z:</p>
                    <p className="statut-text narrow"> - dotacji, spadków, zapisów, ofiarności publicznej, darowizn oraz innego rodzaju aktywów majątkowych poczynionych na dobro 
                                                Fundacji przez osoby fizyczne i prawne z kraju i zagranicy;</p>
                    <p className="statut-text narrow"> - dochodów ze zbiórek i imprez publicznych;</p>
                    <p className="statut-text narrow"> - dochodów z działalności odpłatnej;</p>
                    <p className="statut-text narrow"> - dochodów z majątku Fundacji;</p>
                    <p className="statut-text narrow"> - dochodów z działalności gospodarczej;</p>
                    <p className="statut-text narrow"> - innych źródeł określonych każdorazowo uchwałą Rady Fundacji</p>
                    <h3 className="statut-bold-title">Rozdział IV</h3>
                    <h3 className="statut-bold-title">Władze Fundacji</h3>
                    <h3 className="statut-number-title">9.</h3>
                    <p className="statut-text narrow">Władzami Fundacji są:</p>
                    <p className="statut-text narrow">Rada Fundacji,</p>
                    <p className="statut-text narrow">Zarząd</p>
                    <h3 className="statut-number-title">10.</h3>
                    <p className="statut-text narrow">1. Rada Fundacji składa się z 2 osób. Radę Fundacji na kolejne kadencje powołuje fundator.</p>
                    <p className="statut-text narrow">2. Ustalenia składu liczbowego pierwszej Rady Fundacji oraz powołania jej pierwszego składu dokona Fundator.</p>
                    <p className="statut-text narrow">3. Członkowie Rady Fundacji:</p>
                    <p className="statut-text letter">a. nie mogą być członkami Zarządu ani pozostawać z nimi w związku małżeńskim, we wspólnym pożyciu, w stosunku pokrewieństwa, powinowactwa lub podległości służbowej;</p>
                    <p className="statut-text letter">b. nie mogą być skazani wyrokiem prawomocnym za przestępstwo umyślne ścigane z oskarżenia publicznego lub przestępstwo skarbowe;</p>
                    <p className="statut-text letter">c. mogą otrzymywać z tytułu popełnienia funkcji w tym organie zwrot uzasadnionych kosztów lub wynagrodzenie w wysokości nie wyższej niż przeciętne miesięczne wynagrodzenie w sektorze przedsiębiorstw ogłoszone przez Wiceprezesa GUS za rok poprzedni.</p>
                    <h3 className="statut-number-title">11.</h3>
                    <p className="statut-text narrow">1. Rada jest organem o uprawnieniach inicjatywnych, opiniodawczych i nadzorczo – kontrolnych;</p>
                    <p className="statut-text narrow">2. Do zadań rady należy:</p>
                    <p className="statut-text letter">a. zatwierdzanie rocznych sprawozdań z działalności przygotowanych przez Zarząd i uchwalanie założeń do bieżących planów Fundacji, zatwierdzanie sprawozdania finansowego;</p>
                    <p className="statut-text letter">b. zatwierdzanie budżetu Fundacji przedstawionego przez Zarząd Fundacji;</p>
                    <p className="statut-text letter">c. powoływanie i odwoływanie członków zarządu Fundacji, w tym Prezesa;</p>
                    <p className="statut-text letter">d. nadzór nad działalnością Zarządu;</p>
                    <p className="statut-text letter">e. rozpatrywanie i podejmowanie decyzji w sprawach skierowanych do Rady przez Zarząd;</p>
                    <p className="statut-text letter">f. zmiany statutu Fundacji oraz zmiany celu Fundacji;</p>
                    <p className="statut-text letter">g. podejmowanie decyzji o podjęciu lub zaprzestaniu prowadzenia przez Fundację działalności gospodarczej;</p>
                    <p className="statut-text letter">h. inicjatywa uchwałodawcza.</p>
                    <h3 className="statut-number-title">12.</h3>
                    <p className="statut-text narrow">1. Uchwały Rady zapadają jednomyślnie w głosowaniu jawnym w obecności wszystkich członków Rady.</p>
                    <p className="statut-text narrow">2. Posiedzenie Rady Fundacji odbywa się nie rzadziej niż raz na rok.</p>
                    <h3 className="statut-number-title">13.</h3>
                    <p className="statut-text narrow">1. Zarząd Fundacji składa się z Prezesa oraz 1 członka Zarządu.</p>
                    <p className="statut-text narrow">2. Fundator Fundacji „Widzialne Dzieci” wchodzi w skład pierwszego zarządu i staje na jego czele jako prezes zarządu.</p>
                    <h3 className="statut-number-title">14.</h3>
                    <p className="statut-text narrow">1. Zarządu Fundacji odpowiada za realizację celów statutowych Fundacji oraz kieruje bieżącą działalnością Fundacji.</p>
                    <p className="statut-text narrow">2. Do kompetencji Zarządu należy w szczególności:</p>
                    <p className="statut-text letter">a. Reprezentowanie Fundacji na zewnątrz, w tym przyjmowanie subwencji, darowizn, spadków i zapisów;</p>
                    <p className="statut-text letter">b. Przygotowywanie rocznych sprawozdań finansowych, rocznych sprawozdań z działalności oraz rocznych sprawozdań merytorycznych z działalności Fundacji;</p>
                    <p className="statut-text letter">c. Zarządzanie majątkiem Fundacji</p>
                    <p className="statut-text letter">d. Powoływanie oddziałów Fundacji;</p>
                    <p className="statut-text letter">e. Podejmowanie decyzji o współpracy Fundacji z innymi organizacjami o podobnym profilu działania;</p>
                    <p className="statut-text letter">f. Występowanie z wnioskiem w sprawie zmian w statucie;</p>
                    <p className="statut-text letter">g. Podejmowanie uchwał w sprawie połączenia z inną Fundacją oraz likwidacji Fundacji.</p>
                    <p className="statut-text narrow">3. Uchwały Zarządu zapadają zwykłą większością głosów. W razie niemożności podjęcia uchwały głos Prezesa liczy się podwójnie. Zarząd Fundacji może ustalić, że Prezes i inni członkowie Zarządu w zależności od potrzeb mogą pełnić swoje funkcje za wynagrodzeniem na podstawie umowy o pracę. Warunki płacy i pracy pozostałych pracowników Fundacji określa Zarząd Fundacji w oparciu o regulamin wynagrodzeń.</p>
                    <p className="statut-text narrow">4. Oświadczenia woli w imieniu Fundacji we wszystkich sprawach z wyjątkiem majątkowych składać może każdy członek Zarządu samodzielnie.</p>
                    <p className="statut-text narrow">5. W sprawach majątkowych wymagany jest podpis dwóch członków Zarządu działających łącznie, w tym prezesa.</p>
                    <h3 className="statut-number-title">15.</h3>
                    <p className="statut-text narrow">1. Członkowie zarządu mogą pozostawać z Fundacją w stosunku pracy.</p>
                    <p className="statut-text narrow">2. Decyzje o wysokości wynagrodzenia Zarządu podejmuje Rada Fundacji.</p>
                    <p className="statut-text narrow">3. Wynagrodzenie Członków Zarządu będzie wypłacane wyłącznie z wypracowanych środków, bez naruszania zasobów finansowych przekazanych przez Fundatora.</p>
                    <h3 className="statut-bold-title">Rozdział V</h3>
                    <h3 className="statut-number-title">16.</h3>
                    <p className="statut-text narrow">1. Fundacja prowadzi działalność gospodarczą w rozmiarach służących realizacji celów statutowych.</p>
                    <p className="statut-text narrow">2. Całkowity dochód z działalności gospodarczej przeznaczany jest na realizację celów statutowych.</p>
                    <p className="statut-text narrow">3. Fundacja może prowadzić w kraju i za granicą, zgodnie z obowiązującymi w tym zakresie przepisami, działalność gospodarczą w szczególności w następujących zakresach:</p>
                    <p className="statut-text letter">a. Sprzedaż gadżetów;</p>
                    <p className="statut-text letter">b. Prowadzenie płatnych zajęć;</p>
                    <p className="statut-text letter">c. Organizacji imprez i wydarzeń kulturalnych.</p>
                    <h3 className="statut-bold-title">Rozdział VI</h3>
                    <h3 className="statut-number-title">17.</h3>
                    <p className="statut-text narrow">1. Fundacja ulega likwidacji w razie wyczerpania środków finansowych lub majątku Fundacji.</p>
                    <p className="statut-text narrow">2. Decyzję o likwidacji podejmie Rada Fundacji w drodze jednomyślnej uchwały.</p>
                    <p className="statut-text narrow">3. Likwidację Fundacji przeprowadza likwidator wyznaczony przez Radę;</p>
                    <p className="statut-text narrow">4. Majątek pozostały po likwidacji Fundacji przekazuje się innym fundacjom o podobnym celu działania.</p>
                    <h3 className="statut-bold-title">Rozdział VII</h3>
                    <h3 className="statut-bold-title">Postanowienia końcowe</h3>
                    <h3 className="statut-number-title">18.</h3>
                    <p className="statut-text">Zmiana statutu i celu Fundacji wymaga uchwały Rady Fundacji, przy czym zmiana celu Fundacji wymaga podjęcia uchwały jednogłośnie.</p>
                    <h3 className="statut-number-title">19.</h3>
                    <p className="statut-text">Dla efektywnego realizowania swoich celów Fundacja może się połączyć z inną fundacją. Połączenie nie może nastąpić, jeżeli w jego wyniku mógłby ulec istotnej zmianie cel Fundacji. Decyzję w przedmiocie połączenia Fundacji podejmuje Zarząd w drodze jednomyślnej uchwały podjętej po zapoznaniu się ze stanowiskiem właściwego Ministra.</p>
                    <h3 className="statut-number-title">20.</h3>
                    <p className="statut-text">Statut wchodzi w życie z dniem wpisania Fundacji do rejestru.</p>
                </div>
            </div>
        </section>
    )
}

export default About
