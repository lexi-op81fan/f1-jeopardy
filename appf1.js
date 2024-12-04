const game = document.getElementById('game');
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
                answers: ['Lewis Hamilton', 'Fernando Alonso', 'Michael Schumacher', 'Damon Hill'],
                correct: 'Lewis Hamilton',
                level: 'medium'
            },
            {
                question: 'Max Verstappen and which other driver were the first ever to set identical qualifying lap times? (hint: it was this year)',
                answers: ['Lando Norris', 'Lewis Hamilton', 'George Russell', 'Charles Leclerc'],
                correct: 'George Russell',
                level: 'sort of difficult'
            },
            {
                question: 'Who holds the record for the most Formula 1 wins?',
                answers: ['Lewis Hamilton', 'Fernando Alonso', 'Michael Schumacher', 'Damon Hill'],
                correct: 'Lewis Hamilton',
                level: 'hard'
            }
        ]
    },
    {
        genre: 'WHERE',
        questions: []
    }
];