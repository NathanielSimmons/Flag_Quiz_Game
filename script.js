const flags=[
    {
        flagPath: 'flags/ad.png',
        capital: 'Andorra la Vella',
        continent: 'Europe',
        correctAnswer: 'Andorra',
        wrongAnswer: ['Albania', 'Romania']
    },
    {
        flagPath: 'flags/ae.png',
        capital: 'Abu Dhabi',
        continent: 'Asia',
        correctAnswer: 'United Arab Emirates',
        wrongAnswer: ['Oman', 'Saudi Arabia']
    },
    {
        flagPath: 'flags/af.png',
        capital: 'Kabul',
        continent: 'Asia',
        correctAnswer: 'Afghanistan',
        wrongAnswer: ['Turkmenistan', 'Pakistan']
    },
    {
        flagPath: 'flags/ag.png',
        capital: 'St. Johns',
        continent: 'North America',
        correctAnswer: 'Antigua & Barbuda',
        wrongAnswer: ['Guyana', 'Barbados']
    },
    {
        flagPath: 'flags/ai.png',
        capital: 'The Valley',
        continent: 'North America',
        correctAnswer: 'Anguilla',
        wrongAnswer: ['Cayman Islands', 'British Virgin Islands']
    },
];

let currentFlagIndex= 0;
let score= 0;
let shuffledFlags= [...flags];

function shuffleArray(array){
    for(let i=array.length -1; i>0;i--){
    const j= Math.floor(Math.random()* (i+1));
    [array[i], array[j]]= [array[j], array[i]];
    }
    return array
}

function shuffledFlags(){
    shuffledFlags= [...flags];
    shuffleArray(shuffledFlags);
}

function updateTotalFlags(){
    const totalFlags= flags.length;
    document.getElementById('total-flags').textContent= `Flag: ${currentFlagIndex + 1} / ${totalFlags}`;
}

function loadFlag(){
    if (currentFlag< shuffledFlags.length){
        const flag = shuffleArray[currentFlagIndex];
        document.getElementById('flag').src= flag.flagPath;
        document.getElementById('hint').innerHTML= `<strong>Capital:</strong> ${flag.capital}, <strong>Continent:</strong> ${flag.continent} `;
        
    }
}