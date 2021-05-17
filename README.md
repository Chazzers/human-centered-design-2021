# Human Centered Design @cmda-minor-web 2021

Welkom bij de repository van Human Centered Design. Het doel van de opdracht is om een exclusieve accessible website te maken voor een echt mens met een beperking. 


## Marijn

Marijn is een briljante developer die moeite heeft met fijne motoriek en in een rolstoel zit. Hij is 44 jaar oud en woont samen met zijn vrouw en twee kinderen. Als tech chief architect zorgt hij ervoor dat alle meta-data voor vrijwel elke muziek streaming dienst ter wereld klopt. Merijn houdt voor de rest erg van takkeherrie (Metal), en is groot fan van Dark-mode op de computer. 

### Werk

Voor werk gebruikt hij een macbook met 3 beeldschermen. Zijn macbook bedient hij door middel van zijn keyboard en trackpad. Aangezien hij moeite heeft met fijne motoriek is het beter voor hem om zo min mogelijk handelingen te doen om zijn doel op het web te bereiken. 

### Developer tools

Merijn gebruikt bijvoorbeeld niet een text editor op de gewone manier. Hij maakt gebruik van VIM om zich te navigeren tijdens het developen. Dit is een goede oplossing voor hem omdat er veel shortcuts zijn die het aantal handelingen verminderen. Ook maakt hij gebruik van Komodo editor. De browser die hij gebruikt is Chrome. 

### De opdracht

Hij heeft een verzoek gedaan om een meer toegankelijke reisplanner te maken die hij snel en gemakkelijk kan bedienen. Merijn ging voor covid, vaak met de trein van Eindhoven naar Amsterdam, waar zijn kantoor zit. Het boeken van rolstoelhulp en het plannen van zijn reis is al aardig en semantisch geregeld door de NS zelf, maar het kan een stuk makkelijker voor hem. Als hij thuis is dan regelt hij de avond van tevoren al rolstoel-assistentie bij de NS. Maar als developer is de tijd die hij op kantoor spendeerd iets meer variabel. Hij kan soms eerder klaar zijn of zal soms tot laat bezig zijn. Hierdoor zou het fijn zijn als hij op een makkelijke manier in weinig stappen zijn reis zou kunnen boeken over bijvoorbeeld een uur of twee. 

![Foto van Marijn, bron: https://www.youtube.com/watch?v=8V25yphVEIo](https://user-images.githubusercontent.com/33430669/118553320-7275d380-b760-11eb-9a26-70de07377ae8.png)

## Study situation

Ik heb mijn website ontworpen door de volgende situatie in mijn achterhoofd te houden

- Marijn
- Intelligente nerd (Tech lead bij een bedrijf)
- Geboren met motorische beperking
- Vind zelf dat hij goed overweg kan met technologie ook al, als je hem ziet werken lijkt alles erg moeizaam te gaan
- Worstelt met veel motorische taken die precisie of veel beweging vereisen
- Kan maar een hand gebruiken
- Bekend met vim shortcuts

## Ignore conventions

Kijk niet naar de standaarden aangezien die moeten werken voor vrijwel iedereen. Zorg ervoor dat je product voldoet aan de standaarden van de persoon voor wie je ontwerpt.

## Kleuren en styling

Voor het kleuren en stylen van de pagina heb ik de voorkeuren van Marijn in mijn achterhoofd gehouden, hij houdt namelijk van darkmode en takkeherrie. Ik heb hierom een logo van Metallica op de achtergrond geplaatst en gekeken naar hoe ik de huisstijl van de NS naar een soort darkmode versie kon omtoveren. 

## Aantal opties en handelingen

Het aantal opties per pagina zijn gelimiteerd naar zo min mogelijk opties per pagina. Zo blijft het overzichtelijk voor Marijn en hoeft hij maar 1 handeling te doen per pagina.

![image](https://user-images.githubusercontent.com/33430669/118552073-bd8ee700-b75e-11eb-81fa-5780812abb9b.png)

Marijn heeft op de eerste stap 3 opties:

1. Naar huis
2. Naar werk
3. Anders

De eerste twee opties zorgen ervoor dat een reis geboekt kan worden in een handeling. De derde optie zorgt ervoor dat Marijn een scherm te zien krijgt waarbij hij twee bestemmingen moet kiezen. Als hij dat heeft gedaan kan hij zijn hele toetsenbord gebruiken om zijn reis te plannen. De reistijd zal zo snel mogelijk zijn, oftewel over een uur. 

## Navigatie v1

Marijn kan goed overweg met zijn trackpad, maar er is ook naar voren gekomen dat werken met de pijltjestoetsen fijn werkt voor hem. Hierom is het mogelijk binnen mijn website om zowel de pijltjestoetsen als de muis te gebruiken en wordt de grootste knop op het toetsenbord (spatiebalk) gebruikt om handelingen te bevestigen.

## Navigatie v2

Na feedback van mijn docent dat de handelingen nog steeds te lastig zijn voor Marijn, heb ik besloten om de handelingen op het toetsenbord te versimpelen op zo een manier dat er geen fijne motoriek meer nodig is voor het navigeren op de website. Het toetsenbord wordt op het eerste scherm verdeeld onder 3 knoppen voor de 3 buttons.

![image](https://user-images.githubusercontent.com/33430669/118552073-bd8ee700-b75e-11eb-81fa-5780812abb9b.png)

Voor de laatste stap zal geklikt moeten worden op de select elementen. Er kan wel met de pijltoetsen genavigeerd worden maar het is volgens mij niet mogelijk om dit te manipuleren met JavaScript of ik heb het niet kunnen vinden. Ik heb hierom van het hele toetsenbord de trigger gemaakt voor het zoeken van een reis. 

![image](https://user-images.githubusercontent.com/33430669/118552151-d9928880-b75e-11eb-96d2-aadb2108a7d5.png)

## Prioritise identity

Marijn's persoonlijkheid komt terug in de website door de styling en de gave gitaargeluiden op de pijltjes en spatiebalk (wanneer gewenst natuurlijk).

## Add nonsense

Ik heb wat nonsense toegevoegd door gitaargeluiden met distortion te plaatsen op de pijltjestoetsen wanneer rechtsboven in het scherm het gitaar icoontje wordt aangevinkt. Als laatste toevoeging heb ik ervoor gezorgd dat het toetsenbord gebruikt kan worden als 3 grote knoppen waar op (met of zonder aggressie) geslagen kan worden om te navigeren rond de website. 

![image](https://user-images.githubusercontent.com/33430669/118547153-430f9880-b759-11eb-9588-693adb873b98.png)

Als Marijn een andere bestemming wilt dan een van zijn gebruikelijke bestemmingen, heeft hij bij de laatste stap om al zijn frustraties weg te slaan nog de mogelijkheid om zijn hele toetsenbord te gebruiken.

![image](https://user-images.githubusercontent.com/33430669/118549337-9be03080-b75b-11eb-9929-8447c740396e.png)
