/*delay på data hentning i ms for at simulere data hentning online*/
const myLoadTime = 2000;
// reset variables
let myData = null;
let myApp = null;

/* kicks off app when the DOM is loaded */
window.addEventListener("load", initApp);
function initApp() {
    fetchData(); // starter hentning af data. fra en dummy funktion der simulerer data hentning.
    myApp = document.getElementById('app'); // vi finder det tag voress app skal leve i. kaldet app
    createLoadingScreen(); // bygger loading screen i DOM.
}




function createLoadingScreen() {
    // byg loading screen her med html dom elementer. og evt et animeret gif eller billede. i vores app tag.
        const loader = document.querySelector(".loader");
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
 });
 initGallery();
}




function initGallery(dataReceived) {
    myData = dataReceived;

    buildGallery(myData);
}




function buildGallery(myData) {
const animalCards = myData.map(animalData => buildCard(animalData));
animalCards.forEach(card => {
    myApp.appendChild(card);
});
buildCard(myAnimalData);
}



function buildCard(myAnimalData) {
    resetGallery();
    
    const card = document.createElement("article");
    card.classList.add("galleryCard");
    const nameElement = document.createElement("h2");
    nameElement.textContent = myAnimalData.name;
    console.log(myData[0]);
    const imageElement = document.createElement("img");
    imageElement.src = myAnimalData.picture;
    imageElement.alt = myAnimalData.name;
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = myAnimalData.shortDescription;
    card.appendChild(nameElement);
    card.appendChild(imageElement);
    card.appendChild(descriptionElement);
    
    imageElement.addEventListener('click', function() {
        buildBig(imageElement);
    });
    
    return card;
}



function buildBig(imageElement) {
    resetGallery();
    const cardBig = document.createElement("article");
    cardBig.classList.add("detailView");

    let bigImg = document.createElement("img");
    let longDescriptionElement = document.createElement("p");
    
    bigImg.src = imageElement.src;
    longDescriptionElement.textContent = imageElement.description;
    // bigImg.alt = imageElement.alt;
    cardBig.appendChild(bigImg);
    cardBig.appendChild(longDescriptionElement);

    myApp.appendChild(cardBig);


    bigImg.addEventListener('click', function() {
        buildGallery(myData);
    });
}

function resetGallery() {
    // skriv kode her der kan slette alt html i app tagget husk det er indeholdt i  myApp
    myApp.innerHTML = "";
}

/*  get data function  DO NOT TOUCH!!!!! ......................................................
denne funktion vil typisk være en funktion der henter data fra et API
*/
async function fetchData() {
    // data object
    console.log('fetching data');
    await new Promise(resolve => setTimeout(resolve, myLoadTime));
    const myData = [
        {
            name: 'Elefant',
            picture: 'assets/img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },
        {
            name: 'Tiger',
            picture: 'assets/img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },
        {
            name: 'Tarantel',
            picture: 'assets/img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },
        {
            name: 'Koala',
            picture: 'assets/img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },
        {
            name: 'Haj',
            picture: 'assets/img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    initGallery(myData);
}