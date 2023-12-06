const flags=[
    {
        flagLink: 'Flags/ad.png',
        capital: 'Andorra la Vella',
        continent: 'Europe',
        correctAnswer: 'Andorra',
        wrongAnswers: ['Albania', 'Romania']
    },
    {
        flagLink: 'Flags/ae.png',
        capital: 'Abu Dhabi',
        continent: 'Asia',
        correctAnswer: 'United Arab Emirates',
        wrongAnswers: ['Oman', 'Saudi Arabia']
    },
    {
        flagLink: 'Flags/ba.png',
        capital: 'Sarajevo',
        continent: 'Europe',
        correctAnswer: 'Bosnia and Herzegovina',
        wrongAnswers: ['Montenegro', 'Croatia']
    },
    {
        flagLink: 'Flags/uz.png',
        capital: 'Tashkent',
        continent: 'Asia',
        correctAnswer: 'Uzbekistan',
        wrongAnswers: ['Kyrgyzstan', 'Kazakhstan']
    },
    {
        flagLink: 'Flags/vc.png',
        capital: 'Kingstown',
        continent: 'North America',
        correctAnswer: 'Saint Vincent',
        wrongAnswers: ['Saint Lucia', 'Barbados']
    },
    {
        flagLink: 'Flags/cl.png',
        capital: 'Santiago',
        continent: 'South America',
        correctAnswer: 'Chile',
        wrongAnswers: ['Bolivia', 'Paraguay']
    },
    {
        flagLink: 'Flags/uy.png',
        capital: 'Montevideo',
        continent: 'South America',
        correctAnswer: 'Uruguay',
        wrongAnswers: ['Peru', 'Ecuador']
    },
    {
        flagLink: 'Flags/mg.png',
        capital: 'Antananarivo',
        continent: 'Africa',
        correctAnswer: 'Madagascar',
        wrongAnswers: ['Angola', 'Botswana']
    },
    {
        flagLink: 'Flags/rs.png',
        capital: 'Belgrade',
        continent: 'Europe',
        correctAnswer: 'Serbia',
        wrongAnswers: ['Hungary', 'Slovenia']
    },
    {
        flagLink: 'Flags/gb-sct.png',
        capital: 'Edinburgh',
        continent: 'Europe',
        correctAnswer: 'Scotland',
        wrongAnswers: ['Norway', 'Sweden']
    },
    {
        flagLink: 'Flags/bh.png',
        capital: 'Manama',
        continent: 'Asia',
        correctAnswer: 'Bahrain',
        wrongAnswers: ['Yemen', 'Jordan']
    },
    {
        flagLink: 'Flags/tt.png',
        capital: 'Port of Spain',
        continent: 'South America',
        correctAnswer: 'Trinidad and Tobago',
        wrongAnswers: ['French Guiana', 'Suriname']
    },
    {
        flagLink: 'Flags/pt.png',
        capital: 'Lisbon',
        continent: 'Europe',
        correctAnswer: 'Portugal',
        wrongAnswers: ['Malta', 'Italy']
    },
    {
        flagLink: 'Flags/cg.png',
        capital: 'Brazzaville',
        continent: 'Africa',
        correctAnswer: 'Republic of the Congo',
        wrongAnswers: ['Gabon', 'Cameroon']
    },
    {
        flagLink: 'Flags/et.png',
        capital: 'Addis Ababa',
        continent: 'Africa',
        correctAnswer: 'Ethiopia',
        wrongAnswers: ['Mali', 'Sudan']
    },
    {
        flagLink: 'Flags/sv.png',
        capital: 'San Salvador',
        continent: 'North America',
        correctAnswer: 'El Salvador',
        wrongAnswers: ['Guatemala', 'Honduras']
    },
    {
        flagLink: 'Flags/cv.png',
        capital: 'Praia',
        continent: 'Africa',
        correctAnswer: 'Cape Verde',
        wrongAnswers: ['Ivory Coast', 'Kenya']
    },
    {
        flagLink: 'Flags/af.png',
        capital: 'Kabul',
        continent: 'Asia',
        correctAnswer: 'Afghanistan',
        wrongAnswers: ['Turkmenistan', 'Pakistan']
    },
    {
        flagLink: 'Flags/ag.png',
        capital: 'St. Johns',
        continent: 'North America',
        correctAnswer: 'Antigua & Barbuda',
        wrongAnswers: ['Guyana', 'Barbados']
    },
    {
        flagLink: 'Flags/ai.png',
        capital: 'The Valley',
        continent: 'North America',
        correctAnswer: 'Anguilla',
        wrongAnswers: ['Cayman Islands', 'British Virgin Islands']
    },
];

let FlagIndex= 0;
let score= 0;
let mixedFlags = [...flags];

// Fisher Yates Shuffle
function mixArray(array){
    for(let i=array.length -1; i>0;i--){
    const x= Math.floor(Math.random() * (i+1));
    [array[i], array[x]]= [array[x], array[i]];
    }
    return array;
}

function mixFlags(){
    mixedFlags= [...flags];
    mixArray(mixedFlags);
}

function updateTotalFlags(){
    const totalFlags= flags.length;
    document.getElementById('total-flags').textContent= `Flag: ${FlagIndex + 1} / ${totalFlags}`;
}

function loadFlag(){
    if (FlagIndex< mixedFlags.length){
        const flag = mixedFlags[FlagIndex];
        document.getElementById('flag').src= flag.flagLink;
        document.getElementById('hint').innerHTML= `<strong>Capital:</strong> ${flag.capital}, <strong>Continent:</strong> ${flag.continent} `;
        const options= mixArray([flag.correctAnswer, ...flag.wrongAnswers]); options.forEach((option, index) => {
            document.getElementsByClassName('option')[index].textContent= option;

            
        });

    updateTotalFlags();
    } else{
        endGame();
    }
}

function checkAnswer(button){
    const selectedAnswer= button.textContent;
    const flag = mixedFlags[FlagIndex];
    const hintElement= document.getElementById('hint');

    if( selectedAnswer === flag.correctAnswer){
        score++;
        hintElement.textContent='Correct!';
        hintElement.style.color='green';
    } else{
        hintElement.textContent=`Answer: ${flag.correctAnswer}`;
        hintElement.style.color= 'red';
    }
    FlagIndex++
    const totalFlags= flags.length;
    document.getElementById('score').textContent=`Score: ${score} / ${totalFlags}`;

    setTimeout(()=>{
        hintElement.textContent='';
        hintElement.style.color='';
        loadFlag();
    }, 1600);
}

function startGame(){
    FlagIndex= 0;
    score=0;
    document.getElementById('score').textContent='Score: 0';
    document.getElementById('hint').textContent='';
    document.getElementById('flag').style.display='block';
    document.querySelector('.button_container').style.display='block';
    document.getElementById('play-again').style.display='none';

    mixFlags();
    loadFlag();
}

function endGame(){
    const totalFlags= flags.length
    const scoreText= `Score: ${score} / ${totalFlags}`;
    document.getElementById('hint').textContent='Game Over!';
    document.getElementById('score').textContent= scoreText;
    document.getElementById('flag').style.display='none';
    document.querySelector('.button_container').style.display='none';
    document.getElementById('play-again').style.display='block';
}

function playAgain(){
    FlagIndex= 0;
    score= 0;
    document.getElementById('score').textContent= 'Score: 0';
    document.getElementById('hint').textContent='';
    document.getElementById('flag').style.display='block';
    document.querySelector('.button_container').style.display='block';
    document.getElementById('play-again').style.display='none';

    mixFlags();
    loadFlag();
}

window.onload= function(){
    updateTotalFlags();
    startGame();
}

document.getElementById('play-again').style.display='none';
loadFlag();