// Getting some stuff 

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;



//Linking our text 
playerLivesCount.textContent = playerLives;


//Generating the data
const getData = () => [
    { imgSrc: "https://images.radiox.co.uk/images/67203?crop=16_9&width=660&relax=1&signature=55LkrqcNZrAY4toJIVC2ULMZ_AU=", name: "The Beatles"},
    { imgSrc: "https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/master_cover.jpg?itok=L1JgJGah&timestamp=1508341064", name: "Metallica"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg", name: "Marvin Gaye"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0b/OutKast_-_Stankonia.JPG", name: "OutKast"},
    { imgSrc: "https://townsquare.media/site/812/files/2017/11/Kanye-West-MBDTF.jpg?w=1080&q=75", name: "Kanye West"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png", name: "Daft Punk"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg", name: "Nirvana"},
    { imgSrc: "https://images.radiox.co.uk/images/67203?crop=16_9&width=660&relax=1&signature=55LkrqcNZrAY4toJIVC2ULMZ_AU=", name: "The Beatles"},
    { imgSrc: "https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/master_cover.jpg?itok=L1JgJGah&timestamp=1508341064", name: "Metallica"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg", name: "Marvin Gaye"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0b/OutKast_-_Stankonia.JPG", name: "OutKast"},
    { imgSrc: "https://townsquare.media/site/812/files/2017/11/Kanye-West-MBDTF.jpg?w=1080&q=75", name: "Kanye West"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png", name: "Daft Punk"},
    { imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg", name: "Nirvana"},

];


//randomize 
const randomize = () => {
 const cardData = getData();
 cardData.sort(() => Math.random() - 0.5)
 console.log(cardData);
 return cardData;
};

// Card Generator 
const cardGenerator = () => {
   const cardData = randomize();
   console.log(cardData);
// Generating The HTML
cardData.forEach((item) => {
const card = document.createElement('div');
const face = document.createElement('img');
const back = document.createElement('div');
card.classList = 'card';
card.classList = 'face';
card.classList = 'back';
//Attach the info to the cards 
face.src = item.imgSrc;
//Attaching the cards to the section
section.appendChild(card);
card.appendChild(face);
card.appendChild(back);
});
};

cardGenerator();