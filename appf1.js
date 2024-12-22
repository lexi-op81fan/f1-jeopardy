const gamef1 = document.getElementById('gamef1');
const scoreDisplay = document.getElementById('score');

const jeopardyCategories = [
    {
        genre: 'Driver Records',
        questions: [
            {
                question: 'Who holds the record for the most Formula 1 starts?',
                answers: ['Lewis Hamilton', 'Fernando Alonso', 'Michael Schumacher', 'Damon Hill'],
                correct: 'Fernando Alonso',
                level: 'easy'
            },
            {
                question: 'Who holds the record for the most Formula 1 wins?',
                answers: ['Michael Schumacher', 'Lewis Hamilton', 'Damon Hill', 'Fernando Alonso'],
                correct: 'Lewis Hamilton',
                level: 'medium'
            },
            {
                question: 'Max Verstappen and which other driver were the first ever to set identical qualifying lap times in q3? (hint: it was this year)',
                answers: ['Lando Norris', 'George Russell', 'Lewis Hamilton', 'Charles Leclerc'],
                correct: 'George Russell',
                level: 'sort of difficult'
            },
            {
                question: 'Who is the oldest driver to ever enter a race?',
                answers: ['Fernando Alonso', 'Louis Chiron', 'Juan Manuel Fangio', 'Giuseppe Farina'],
                correct: 'Louis Chiron',
                level: 'hard'
            }
        ]
    },
    {
        genre: 'Race Records',
        questions: [
            {
                question: 'Which driver holds the record for the most (driving) penalties in one race?',
                answers: ['Daniil Kvyat', 'Lance Stroll', 'Esteban Ocon', 'Marcus Ericsson'],
                correct: 'Esteban Ocon',
                level: 'easy'
            },
            {
                question: 'Which race held the coldest race ever recorded? (air temperature was 5 °C)',
                answers: ['2015 Canadian Grand Prix', '2020 Eifel Grand Prix', '1978 Canadian Grand Prix', '2023 Las Vegas Grand Prix'],
                correct: '1978 Canadian Grand Prix',
                level: 'medium'
            },
            {
                question: 'What is the record for the most pit stops by a winning driver in a single race?',
                answers: ['7', '5', '6', '4'],
                correct: '6',
                level: 'sort of difficult'
            },
            {
                question: 'Which historical Formula 1 race holds the record for the least finishers (actual, not classified)?',
                answers: ['1966 Monaco Grand Prix', '1998 Belgian Grand Prix', '1996 Monaco Grand Prix', '1984 Detroit Grand Prix'],
                correct: '1996 Monaco Grand Prix',
                level: 'hard'
            },
            
        ]
    },
    {
        genre: 'Race History',
        questions: [
            {
                question: 'What is the shortest current Formula 1 track?',
                answers: ['Interlagos Circuit', 'Autódromo Hermanos Rodríguez', 'Red Bull Ring', 'Circuit de Monaco'],
                correct: 'Circuit de Monaco',
                level: 'easy'
            },
            {
                question: 'Which currently used Formula 1 track is the oldest track to be raced on?',
                answers: ['Circuit du Monaco', 'Silverstone', 'Circuit de Spa-Francorchamps', 'Autodromo Nazionale di Monza'],
                correct: 'Autodromo Nazionale di Monza',
                level: 'medium'
            },
            {
                question: 'What was the shortest Formula 1 race?',
                answers: ['1991 Australian Grand Prix', '1975 Spanish Grand Prix', '2009 Malaysia Grand Prix', '2021 Belgian Grand Prix'],
                correct: '2021 Belgian Grand Prix', 
                level: 'sort of difficult'
            },
            {
                question: 'Who won the first ever Formula 1 race?',
                answers: ['George Grignard', 'Juan Manuel Fangio', 'Luigi Fagioli', 'Nino Farina'],
                correct: 'Nino Farina',
                level: 'hard'
            },
            
        ]
    },
    {
        genre: 'Miscellaneous',
        questions: [
            {
                question: 'which recent driver is the king of getting fastest laps outside of the top 10 (even outside of the top 13!), doing it a whopping 3 times in 7 years?',
                answers: ['Kevin Magnussen', 'Esteban Ocon', 'Romain Grosjean', 'Pastor Maldonaldo'],
                correct: 'Kevin Magnussen',
                level: 'easy'
            },
            {
                question: 'Which historic rivalry never shared the podium together?',
                answers: ['Villeneuve and Schumacher', 'Senna and Prost', 'Hunt and Laudo', 'Hakkinen and Schumacher'],
                correct: 'Villeneuve and Schumacher',
                level: 'medium'
            },
            {
                question: 'Which driver is the only ever driver to have received a DNS, DNF, and a DSQ in the same race?',
                answers: ['Hans Heyer', 'Frank Williams', 'Partick Néve', 'Emilio de Villota'],
                correct: 'Hans Heyer',
                level: 'sort of difficult'
            },
        
            {
                question: 'The drummer from which 70s pop group raced in Formula 1?',
                answers: ['Slim Borgudd; ABBA', 'Don Henley; Eagles', 'Mauricio White; Earth, Wind, & Fire', 'Mauricio Gibb; Bee Gees'],
                correct: 'Slim Borgudd; ABBA',
                level: 'hard'
            },
            
        ]
    }
];


function addCategory(category) {
    const column = document.createElement('div');
    column.classList.add('genrecolumn');

    const genreTitle = document.createElement('div');
    genreTitle.classList.add('genre-title');
    genreTitle.innerHTML = category.genre;

    column.append(genreTitle);
    gamef1.append(column);

    category.questions.forEach(q => {
        const card = document.createElement('div'); // Corrected this line
        card.classList.add('card');
        column.append(card); // Append the actual card element, not a string

        if (q.level === 'easy') {
            card.InnerHTML = 100;
        } else if (q.level === 'medium') {
            card.InnerHTML = 200;
        } else if (q.level === 'sort of difficult') {
            card.InnerHTML = 300;
        } else if (q.level === 'hard') {
            card.InnerHTML = 400;
        }
        
        card.setAttribute('data-question', q.question);
        card.setAttribute('data-answers-1', q.answers[0]);
        card.setAttribute('data-answers-1', q.answers[1]);
        card.setAttribute('data-correct', q.correct);
        card.setAttribute('data-value', card.getInnerHTML());
    });
};

jeopardyCategories.forEach(category => addCategory(category));