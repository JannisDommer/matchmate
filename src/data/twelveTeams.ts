import type {Match, TournamentDefinition} from "@/types/tournamentTypes.ts";

export const twelveTeams: TournamentDefinition = {
  name: '12 Teams', groups: [{
    name: 'Group A', teams: [{
      name: 'WKT TV', participants: [{name: 'Lukser'}, {name: 'Alex Seyfried'}, {name: 'Werle'}],
    }, {
      name: 'Oggelshausen 1', participants: [{name: ''}, {name: ''}, {name: ''}],
    }, {
      name: 'GO Ultras', participants: [{name: 'Player A5'}, {name: 'Player A6'}, {name: ''}],
    }, {
      name: 'Atom', participants: [{name: 'Player A7'}, {name: 'Player A8'}],
    }, {
      name: 'Tamelle', participants: [{name: 'Player A7'}, {name: 'Player A8'}],
    },],
  }, {
    name: 'Group B', teams: [{
      name: 'WKT 1', participants: [{name: 'Player B1'}, {name: 'Player B2'}],
    }, {
      name: 'WKT 3', participants: [{name: 'Player B3'}, {name: 'Player B4'}],
    }, {
      name: 'Vaut, RS', participants: [{name: 'Player B5'}, {name: 'Player B6'}],
    }, {
      name: 'Hass Haas', participants: [{name: 'Player B7'}, {name: 'Player B8'}],
    }, {
      name: 'WKT 4', participants: [{name: 'Player B7'}, {name: 'Player B8'}],
    }
    ],
  }, {
    name: 'Group C', teams: [{
      name: 'WKT 2', participants: [{name: 'Player C1'}, {name: 'Player C2'}],
    }, {
      name: 'Oggelshausen 2', participants: [{name: 'Player C3'}, {name: 'Player C4'}],
    }, {
      name: 'WKT Damen', participants: [{name: 'Player C5'}, {name: 'Player C6'}],
    }, {
      name: 'Schöneburg', participants: [{name: 'Player C7'}, {name: 'Player C8'}],
    }, {
      name: 'HSV', participants: [{name: 'Player C7'}, {name: 'Player C8'}],
    }],
  },], bracketsAfterGroupPhase: 3,
}

export const twelveTeamsMatches: Match[] = [
  {
    "group": "Group A",
    "homeTeam": {
      "name": "WKT TV",
      "participants": [
        {
          "name": "Lukser"
        },
        {
          "name": "Alex Seyfried"
        },
        {
          "name": "Werle"
        }
      ]
    },
    "awayTeam": {
      "name": "Oggelshausen 1",
      "participants": [
        {
          "name": ""
        },
        {
          "name": ""
        },
        {
          "name": ""
        }
      ]
    },
    "scoreHome": 2,
    "scoreAway": 0
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "WKT 1",
      "participants": [
        {
          "name": "Player B1"
        },
        {
          "name": "Player B2"
        }
      ]
    },
    "awayTeam": {
      "name": "WKT 3",
      "participants": [
        {
          "name": "Player B3"
        },
        {
          "name": "Player B4"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 0
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "WKT 2",
      "participants": [
        {
          "name": "Player C1"
        },
        {
          "name": "Player C2"
        }
      ]
    },
    "awayTeam": {
      "name": "Oggelshausen 2",
      "participants": [
        {
          "name": "Player C3"
        },
        {
          "name": "Player C4"
        }
      ]
    },
    "scoreHome": 3,
    "scoreAway": 3
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "WKT TV",
      "participants": [
        {
          "name": "Lukser"
        },
        {
          "name": "Alex Seyfried"
        },
        {
          "name": "Werle"
        }
      ]
    },
    "awayTeam": {
      "name": "GO Ultras",
      "participants": [
        {
          "name": "Player A5"
        },
        {
          "name": "Player A6"
        },
        {
          "name": ""
        }
      ]
    },
    "scoreHome": 3,
    "scoreAway": 1
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "WKT 1",
      "participants": [
        {
          "name": "Player B1"
        },
        {
          "name": "Player B2"
        }
      ]
    },
    "awayTeam": {
      "name": "Vaut, RS",
      "participants": [
        {
          "name": "Player B5"
        },
        {
          "name": "Player B6"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 4
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "WKT 2",
      "participants": [
        {
          "name": "Player C1"
        },
        {
          "name": "Player C2"
        }
      ]
    },
    "awayTeam": {
      "name": "WKT Damen",
      "participants": [
        {
          "name": "Player C5"
        },
        {
          "name": "Player C6"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 3
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "WKT TV",
      "participants": [
        {
          "name": "Lukser"
        },
        {
          "name": "Alex Seyfried"
        },
        {
          "name": "Werle"
        }
      ]
    },
    "awayTeam": {
      "name": "Atom",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 4
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "WKT 1",
      "participants": [
        {
          "name": "Player B1"
        },
        {
          "name": "Player B2"
        }
      ]
    },
    "awayTeam": {
      "name": "Hass Haas",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "scoreHome": 0,
    "scoreAway": 0
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "WKT 2",
      "participants": [
        {
          "name": "Player C1"
        },
        {
          "name": "Player C2"
        }
      ]
    },
    "awayTeam": {
      "name": "Schöneburg",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 0
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "WKT TV",
      "participants": [
        {
          "name": "Lukser"
        },
        {
          "name": "Alex Seyfried"
        },
        {
          "name": "Werle"
        }
      ]
    },
    "awayTeam": {
      "name": "Tamelle",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 1
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "WKT 1",
      "participants": [
        {
          "name": "Player B1"
        },
        {
          "name": "Player B2"
        }
      ]
    },
    "awayTeam": {
      "name": "WKT 4",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "scoreHome": 2,
    "scoreAway": 3
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "WKT 2",
      "participants": [
        {
          "name": "Player C1"
        },
        {
          "name": "Player C2"
        }
      ]
    },
    "awayTeam": {
      "name": "HSV",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "scoreHome": 0,
    "scoreAway": 4
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "Oggelshausen 1",
      "participants": [
        {
          "name": ""
        },
        {
          "name": ""
        },
        {
          "name": ""
        }
      ]
    },
    "awayTeam": {
      "name": "GO Ultras",
      "participants": [
        {
          "name": "Player A5"
        },
        {
          "name": "Player A6"
        },
        {
          "name": ""
        }
      ]
    },
    "scoreHome": 0,
    "scoreAway": 0
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "WKT 3",
      "participants": [
        {
          "name": "Player B3"
        },
        {
          "name": "Player B4"
        }
      ]
    },
    "awayTeam": {
      "name": "Vaut, RS",
      "participants": [
        {
          "name": "Player B5"
        },
        {
          "name": "Player B6"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 3
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "Oggelshausen 2",
      "participants": [
        {
          "name": "Player C3"
        },
        {
          "name": "Player C4"
        }
      ]
    },
    "awayTeam": {
      "name": "WKT Damen",
      "participants": [
        {
          "name": "Player C5"
        },
        {
          "name": "Player C6"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 4
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "Oggelshausen 1",
      "participants": [
        {
          "name": ""
        },
        {
          "name": ""
        },
        {
          "name": ""
        }
      ]
    },
    "awayTeam": {
      "name": "Atom",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 3
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "WKT 3",
      "participants": [
        {
          "name": "Player B3"
        },
        {
          "name": "Player B4"
        }
      ]
    },
    "awayTeam": {
      "name": "WKT 4",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 0
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "Oggelshausen 2",
      "participants": [
        {
          "name": "Player C3"
        },
        {
          "name": "Player C4"
        }
      ]
    },
    "awayTeam": {
      "name": "Schöneburg",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 4
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "Oggelshausen 1",
      "participants": [
        {
          "name": ""
        },
        {
          "name": ""
        },
        {
          "name": ""
        }
      ]
    },
    "awayTeam": {
      "name": "Tamelle",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 3
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "Vaut, RS",
      "participants": [
        {
          "name": "Player B5"
        },
        {
          "name": "Player B6"
        }
      ]
    },
    "awayTeam": {
      "name": "Hass Haas",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 1
  },

  {
    "group": "Group C",
    "homeTeam": {
      "name": "Schöneburg",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "awayTeam": {
      "name": "HSV",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 4
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "GO Ultras",
      "participants": [
        {
          "name": "Player A5"
        },
        {
          "name": "Player A6"
        },
        {
          "name": ""
        }
      ]
    },
    "awayTeam": {
      "name": "Atom",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "scoreHome": 0,
    "scoreAway": 1
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "Vaut, RS",
      "participants": [
        {
          "name": "Player B5"
        },
        {
          "name": "Player B6"
        }
      ]
    },
    "awayTeam": {
      "name": "WKT 4",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "scoreHome": 3,
    "scoreAway": 0
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "Oggelshausen 2",
      "participants": [
        {
          "name": "Player C3"
        },
        {
          "name": "Player C4"
        }
      ]
    },
    "awayTeam": {
      "name": "HSV",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "scoreHome": 3,
    "scoreAway": 0
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "GO Ultras",
      "participants": [
        {
          "name": "Player A5"
        },
        {
          "name": "Player A6"
        },
        {
          "name": ""
        }
      ]
    },
    "awayTeam": {
      "name": "Tamelle",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 4
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "Hass Haas",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "awayTeam": {
      "name": "WKT 4",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 1
  },
  {
    "group": "Group C",
    "homeTeam": {
      "name": "WKT Damen",
      "participants": [
        {
          "name": "Player C5"
        },
        {
          "name": "Player C6"
        }
      ]
    },
    "awayTeam": {
      "name": "Schöneburg",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "scoreHome": 1,
    "scoreAway": 2
  },
  {
    "group": "Group A",
    "homeTeam": {
      "name": "Atom",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "awayTeam": {
      "name": "Tamelle",
      "participants": [
        {
          "name": "Player A7"
        },
        {
          "name": "Player A8"
        }
      ]
    },
    "scoreHome": 2,
    "scoreAway": 0
  },
  {
    "group": "Group B",
    "homeTeam": {
      "name": "WKT 3",
      "participants": [
        {
          "name": "Player B3"
        },
        {
          "name": "Player B4"
        }
      ]
    },
    "awayTeam": {
      "name": "Hass Haas",
      "participants": [
        {
          "name": "Player B7"
        },
        {
          "name": "Player B8"
        }
      ]
    },
    "scoreHome": 4,
    "scoreAway": 2
  },

  {
    "group": "Group C",
    "homeTeam": {
      "name": "WKT Damen",
      "participants": [
        {
          "name": "Player C5"
        },
        {
          "name": "Player C6"
        }
      ]
    },
    "awayTeam": {
      "name": "HSV",
      "participants": [
        {
          "name": "Player C7"
        },
        {
          "name": "Player C8"
        }
      ]
    },
    "scoreHome": 3,
    "scoreAway": 3
  },
]


export const twelveTeamsKoTree = [{
  "team1": "Team A1", "team2": "Team B1", "score1": 0, "score2": 0, "winner": null
}, {
  "team1": "Team C1", "team2": "Team A2", "score1": 0, "score2": 0, "winner": null
}, {
  "team1": "Team B2", "team2": "Team C4", "score1": 0, "score2": 0, "winner": null
}, {
  "team1": "Team A3", "team2": "Team B4", "score1": 0, "score2": 0, "winner": null
}]


export const twelveTeamsKoTreeFinals = [[{
  "team1": "Team A1",
  "team2": "Team B1",
  "score1": 0,
  "score2": 0,
  "winner": null,
  "round": 1,
  "matchIndex": 0
}, {
  "team1": "Team C1",
  "team2": "Team A2",
  "score1": 0,
  "score2": 0,
  "winner": null,
  "round": 1,
  "matchIndex": 1
}, {
  "team1": "Team B2",
  "team2": "Team C4",
  "score1": 0,
  "score2": 0,
  "winner": null,
  "round": 1,
  "matchIndex": 2
}, {
  "team1": "Team A3",
  "team2": "Team B4",
  "score1": 0,
  "score2": 0,
  "winner": null,
  "round": 1,
  "matchIndex": 3
}], [{
  "team1": "",
  "team2": "",
  "score1": 0,
  "score2": 0,
  "winner": null,
  "round": 2,
  "matchIndex": 0,
  "sourceMatch1": {
    "team1": "Team A1",
    "team2": "Team B1",
    "score1": 0,
    "score2": 0,
    "winner": null,
    "round": 1,
    "matchIndex": 0
  },
  "sourceMatch2": {
    "team1": "Team C1",
    "team2": "Team A2",
    "score1": 0,
    "score2": 0,
    "winner": null,
    "round": 1,
    "matchIndex": 1
  }
}, {
  "team1": "",
  "team2": "",
  "score1": 0,
  "score2": 0,
  "winner": null,
  "round": 2,
  "matchIndex": 1,
  "sourceMatch1": {
    "team1": "Team B2",
    "team2": "Team C4",
    "score1": 0,
    "score2": 0,
    "winner": null,
    "round": 1,
    "matchIndex": 2
  },
  "sourceMatch2": {
    "team1": "Team A3",
    "team2": "Team B4",
    "score1": 0,
    "score2": 0,
    "winner": null,
    "round": 1,
    "matchIndex": 3
  }
}], [{
  "team1": "",
  "team2": "",
  "score1": 0,
  "score2": 0,
  "winner": null,
  "round": 3,
  "matchIndex": 0,
  "sourceMatch1": {
    "team1": "",
    "team2": "",
    "score1": 0,
    "score2": 0,
    "winner": null,
    "round": 2,
    "matchIndex": 0,
    "sourceMatch1": {
      "team1": "Team A1",
      "team2": "Team B1",
      "score1": 0,
      "score2": 0,
      "winner": null,
      "round": 1,
      "matchIndex": 0
    },
    "sourceMatch2": {
      "team1": "Team C1",
      "team2": "Team A2",
      "score1": 0,
      "score2": 0,
      "winner": null,
      "round": 1,
      "matchIndex": 1
    }
  },
  "sourceMatch2": {
    "team1": "",
    "team2": "",
    "score1": 0,
    "score2": 0,
    "winner": null,
    "round": 2,
    "matchIndex": 1,
    "sourceMatch1": {
      "team1": "Team B2",
      "team2": "Team C4",
      "score1": 0,
      "score2": 0,
      "winner": null,
      "round": 1,
      "matchIndex": 2
    },
    "sourceMatch2": {
      "team1": "Team A3",
      "team2": "Team B4",
      "score1": 0,
      "score2": 0,
      "winner": null,
      "round": 1,
      "matchIndex": 3
    }
  }
}]]
