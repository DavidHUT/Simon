function loadScores() {
    let score = [];

    const scoreText = localStorage.getItem('score');

    if(scoreText) {
        score = JSON.parse(scoreText);
    }

    const table = document.querySelector('#score');

    if(score.length) {
        for (const [i, score2] of score.entries()) {
            const position = document.createElement('td');
            const name = document.createElement('td');
            const score1 = document.createElement('td');
            const date = document.createElement('td');

            position.textContent = i + 1;
            name.textContent = score2.name;
            score1.textContent = score2.score;
            date.textContent = score2.date;

            const row = document.createElement('tr');

            row.appendChild(position);
            row.appendChild(name);
            row.appendChild(score1);
            row.appendChild(date);

            table;appendChild(row);
        }
    } else {
        table.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
}

loadScores();