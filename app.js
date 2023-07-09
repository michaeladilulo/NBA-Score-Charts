const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games) => {

    const ulParent = document.createElement('ul');
    for(let game of games) {
        const {homeTeam, awayTeam} = game;
        const {team:hTeam, points:hPoints} = homeTeam;
        const {team:aTeam, points:aPoints} = awayTeam;
    
        const gameLi = document.createElement('li');
        const teamNames = `${aTeam} @ ${hTeam}`
    
        let basketballScores;
    
        if(aPoints > hPoints) {
            basketballScores = `<b>${aPoints}</b> - ${hPoints}`
        } else {
            basketballScores = `${aPoints} - <b>${hPoints}</b>`
        }
    
        const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
        gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')
    
        // combining the teams and points together
        gameLi.innerHTML = `${teamNames} ${basketballScores}`
    
        ulParent.appendChild(gameLi)
    }
    return ulParent;
}

const chart1 = makeChart(warriorsGames);
// Need to append the ulParent to the document
document.body.prepend(chart1);