const birthYear = prompt('Enter your birth year');

const city = prompt(' Enter your city');

const sport = prompt(' Enter your favourite kind of sport');

let birthYearAnswer;

let cityAnswer;

let sportAnswer;

if (birthYear) {
    birthYearAnswer = `You was born in ${birthYear}.\n`;
} else {
    birthYearAnswer = "You didn't enter your year of birth.\n";
}

if (city === 'Washington') {
    cityAnswer = 'You live in the capital of the USA.\n';
} else if (city === 'Kyiv') {
    cityAnswer = 'You live in the capital of Ukraine. Stay strong! Glory to Ukraine!\n';
} else if (city === 'London') {
    cityAnswer = 'You live in the capital of Great Britain.\n';
} else if (city === null) {
    cityAnswer = "You didn't enter your city.\n";
} else {
    cityAnswer = `You live in ${city}.\n`;
}

if (sport === 'Football') {
    sportAnswer = 'Nice! Do you want to be like Christiano Ronaldo?';
} else if (sport === 'Cybersport') {
    sportAnswer = 'Nice! Do you want to be like s1mple?';
} else if (sport === 'Basketball') {
    sportAnswer = 'Nice! Do you want to be like Michael Jordan?';
} else if (sport === null) {
    sportAnswer = "You didn't enter your favourite kind of sport.";
} else {
    sportAnswer = `Your favourite kind of sport is ${sport}.`;
}

alert(birthYearAnswer + cityAnswer + sportAnswer);


