// #### Opdracht 3 - Array methoden en functies
// * **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
// pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
// dubbele namen in zitten, is niet erg.
const tvBrands = inventory.map((tv) => {
    return tv.brand;
});

let listTVBrand = "<ul>";
for (let i = 0; i < tvBrands.length ; i++){
    listTVBrand += "<li>" + tvBrands[i] + "</li>";
}
listTVBrand += "</ul>";

const blockOfTvBrands =document.getElementById("tvBrands");
blockOfTvBrands.innerHTML = listTVBrand;

// * **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
// onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
// -declaratie niet aan te roepen!
function tvBrandsPosting(tvBrandsArr){
    let listTVBrand = "<ul>";
    for (let i = 0; i < tvBrandsArr.length ; i++){
        listTVBrand += "<li>" + tvBrandsArr[i] + "</li>";
    }
    listTVBrand += "</ul>";

    const blockOfTvBrands =document.getElementById("tvBrands");
    blockOfTvBrands.innerHTML = listTVBrand;
}
//tvBrandsPosting(tvBrands);
// #### Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//
//   NIKKEI NH3216SMART - HD smart TV
//   €159,-
//   32 inch (81 cm)
//   ```
//
// * **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.
function tvBrandDisplayer(tvElement){

    return `
        <p>${tvElement.brand} ${tvElement.type} ${tvElement.name}
        </br>${priceFormatter(tvElement.price)}
        </br>${displayAllAvailableSices(tvElement)}
        </p>`;
}

// * **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.
function priceFormatter(price){
    return "€ " + price + ",-";
}

// * **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.
function displayAllAvailableSices(availableSizes){
    let availableSizesBlock = "";

    for (let i = 0; i < availableSizes.availableSizes.length; i++){
        if(i !== 0){
            availableSizesBlock += " | "
        }
        availableSizesBlock += availableSizes.availableSizes[i] +
            " inch (" + availableSizes.availableSizes[i] * 2.50 + " cm)";
    }
    return availableSizesBlock;
}

// * **Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

//tvBrandDisplayer(inventory[3])

// * **Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
// natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
// overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
// te roepen!
function tvGenerator(tvArr){
    let tvBlock = "";

    for (let i = 0; i < tvArr.length; i++){
        tvBlock += tvBrandDisplayer(tvArr[i]);
    }
    const blockForTVBrandDisplay = document.getElementById("tvBrandsDisplay");
    blockForTVBrandDisplay.innerHTML = tvBlock;
}

tvGenerator(inventory);


// #### Bonusopdracht
// 1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
// die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
// dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op
// de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!
// 2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
// jouw `generateTV`-functie zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

function sortOnPrice(tvArr){
    tvArr.sort((a,b) => {
        return b.price - a.price;
    });
    console.log(tvArr)
    return tvArr;
}

function filterOnAmbilight(tvArr){
    const ambiLight = tvArr.filter((tv) => {
        return tv.options.ambiLight;
    });
    console.log(ambiLight);
    return ambiLight;
}

function filterOnSoldTVs(tvArr){
    const soldTV = tvArr.filter((tv) => {
        return tv.sold === tv.originalStock;
    });
    console.log(soldTV);
    return soldTV;
}