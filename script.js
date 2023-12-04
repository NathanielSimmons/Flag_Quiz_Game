const flags=[
    {
        flagPath: 'Flags/ad.png',
        capital: 'Andorra la Vella',
        continent: 'Europe',
        correctAnswer: 'Andorra',
        wrongAnswers: ['Albania', 'Romania']
    },
    {
        flagPath: 'Flags/ae.png',
        capital: 'Abu Dhabi',
        continent: 'Asia',
        correctAnswer: 'United Arab Emirates',
        wrongAnswers: ['Oman', 'Saudi Arabia']
    },
    {
        flagPath: 'Flags/ba.png',
        capital: 'Sarajevo',
        continent: 'Europe',
        correctAnswer: 'Bosnia and Herzegovina',
        wrongAnswers: ['Montenegro', 'Croatia']
    },
    {
        flagPath: 'Flags/uz.png',
        capital: 'Tashkent',
        continent: 'Asia',
        correctAnswer: 'Uzbekistan',
        wrongAnswers: ['Kyrgyzstan', 'Kazakhstan']
    },
    {
        flagPath: 'Flags/vc.png',
        capital: 'Kingstown',
        continent: 'North America',
        correctAnswer: 'Saint Vincent',
        wrongAnswers: ['Saint Lucia', 'Barbados']
    },
    {
        flagPath: 'Flags/cl.png',
        capital: 'Santiago',
        continent: 'South America',
        correctAnswer: 'Chile',
        wrongAnswers: ['Bolivia', 'Paraguay']
    },
    {
        flagPath: 'Flags/uy.png',
        capital: 'Montevideo',
        continent: 'South America',
        correctAnswer: 'Uruguay',
        wrongAnswers: ['Peru', 'Ecuador']
    },
    {
        flagPath: 'Flags/mg.png',
        capital: 'Antananarivo',
        continent: 'Africa',
        correctAnswer: 'Madagascar',
        wrongAnswers: ['Angola', 'Botswana']
    },
    {
        flagPath: 'Flags/rs.png',
        capital: 'Belgrade',
        continent: 'Europe',
        correctAnswer: 'Serbia',
        wrongAnswers: ['Hungary', 'Slovenia']
    },
    {
        flagPath: 'Flags/gb-sct.png',
        capital: 'Edinburgh',
        continent: 'Europe',
        correctAnswer: 'Scotland',
        wrongAnswers: ['Norway', 'Sweden']
    },
    {
        flagPath: 'Flags/bh.png',
        capital: 'Manama',
        continent: 'Asia',
        correctAnswer: 'Bahrain',
        wrongAnswers: ['Yemen', 'Jordan']
    },
    {
        flagPath: 'Flags/tt.png',
        capital: 'Port of Spain',
        continent: 'South America',
        correctAnswer: 'Trinidad and Tobago',
        wrongAnswers: ['French Guiana', 'Suriname']
    },
    {
        flagPath: 'Flags/pt.png',
        capital: 'Lisbon',
        continent: 'Europe',
        correctAnswer: 'Portugal',
        wrongAnswers: ['Malta', 'Italy']
    },
    {
        flagPath: 'Flags/cg.png',
        capital: 'Brazzaville',
        continent: 'Africa',
        correctAnswer: 'Republic of the Congo',
        wrongAnswers: ['Gabon', 'Cameroon']
    },
    {
        flagPath: 'Flags/et.png',
        capital: 'Addis Ababa',
        continent: 'Africa',
        correctAnswer: 'Ethiopia',
        wrongAnswers: ['Mali', 'Sudan']
    },
    {
        flagPath: 'Flags/sv.png',
        capital: 'San Salvador',
        continent: 'North America',
        correctAnswer: 'El Salvador',
        wrongAnswers: ['Guatemala', 'Honduras']
    },
    {
        flagPath: 'Flags/cv.png',
        capital: 'Praia',
        continent: 'Africa',
        correctAnswer: 'Cape Verde',
        wrongAnswers: ['Ivory Coast', 'Kenya']
    },
    {
        flagPath: 'Flags/af.png',
        capital: 'Kabul',
        continent: 'Asia',
        correctAnswer: 'Afghanistan',
        wrongAnswers: ['Turkmenistan', 'Pakistan']
    },
    {
        flagPath: 'Flags/ag.png',
        capital: 'St. Johns',
        continent: 'North America',
        correctAnswer: 'Antigua & Barbuda',
        wrongAnswers: ['Guyana', 'Barbados']
    },
    {
        flagPath: 'Flags/ai.png',
        capital: 'The Valley',
        continent: 'North America',
        correctAnswer: 'Anguilla',
        wrongAnswers: ['Cayman Islands', 'British Virgin Islands']
    },
];

let currentFlagIndex= 0;
let score= 0;
let shuffledFlags= [...flags];

function shuffleArray(array){
    for(let i=array.length -1; i>0;i--){
    const j= Math.floor(Math.random() * (i+1));
    [array[i], array[j]]= [array[j], array[i]];
    }
    return array;
}

function shuffleFlags(){
    shuffledFlags= [...flags];
    shuffleArray(shuffledFlags);
}

function updateTotalFlags(){
    const totalFlags= flags.length;
    document.getElementById('total-flags').textContent= `Flag: ${currentFlagIndex + 1} / ${totalFlags}`;
}

function loadFlag(){
    if (currentFlagIndex< shuffledFlags.length){
        const flag = shuffledFlags[currentFlagIndex];
        document.getElementById('flag').src= flag.flagPath;
        document.getElementById('hint').innerHTML= `<strong>Capital:</strong> ${flag.capital}, <strong>Continent:</strong> ${flag.continent} `;
        const options= shuffleArray([flag.correctAnswer, ...flag.wrongAnswers]); options.forEach((option, index) => {
            document.getElementsByClassName('option')[index].textContent= option;

            
        });

    updateTotalFlags();
    } else{
        endGame();
    }
}

function checkAnswer(button){
    const selectedAnswer= button.textContent;
    const flag = shuffledFlags[currentFlagIndex];
    const hintElement= document.getElementById('hint');

    if( selectedAnswer === flag.correctAnswer){
        score++;
        hintElement.textContent='Correct!';
        hintElement.style.color='green';
    } else{
        hintElement.textContent=`Answer: ${flag.correctAnswer}`;
        hintElement.style.color= 'red';
    }
    currentFlagIndex++
    const totalFlags= flags.length;
    document.getElementById('score').textContent=`Score: ${score} / ${totalFlags}`;

    setTimeout(()=>{
        hintElement.textContent='';
        hintElement.style.color='';
        loadFlag();
    }, 1600);
}

function startGame(){
    currentFlagIndex=0;
    score=0;
    document.getElementById('score').textContent='Score: 0';
    document.getElementById('hint').textContent='';
    document.getElementById('flag').style.display='block';
    document.getElementById('options').style.display='block';
    document.getElementById('play-again').style.display='none';

    shuffleFlags();
    loadFlag();
}

function endGame(){
    const totalFlags= flags.length
    const scoreText= `Score: ${score} / ${totalFlags}`;
    document.getElementById('hint').textContent='Game Over!';
    document.getElementById('score').textContent= scoreText;
    document.getElementById('flag').style.display='none';
    document.getElementById('options').style.display='none';
    document.getElementById('play-again').style.display='block';
}

function playAgain(){
    currentFlagIndex= 0;
    score= 0;
    document.getElementById('score').textContent= 'Score: 0';
    document.getElementById('hint').textContent='';
    document.getElementById('flag').style.display='block';
    document.getElementById('options').style.display='block';
    document.getElementById('play-again').style.display='none';

    shuffleFlags();
    loadFlag();
}

window.onload= function(){
    updateTotalFlags();
    startGame();
}

document.getElementById('play-agian').style.display='none';
loadFlag();