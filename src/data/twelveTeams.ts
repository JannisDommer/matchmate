import type {Match, TournamentDefinition} from "@/types/tournamentTypes.ts";

export const twelveTeams: TournamentDefinition = {
  name: '12 Teams',
  groups: [
    {
      name: 'Group A',
      teams: [
        {
          name: 'Team A1',
          participants: [{ name: 'Player A1' }, { name: 'Player A2' }],
        },
        {
          name: 'Team A2',
          participants: [{ name: 'Player A3' }, { name: 'Player A4' }],
        },
        {
          name: 'Team A3',
          participants: [{ name: 'Player A5' }, { name: 'Player A6' }],
        },
        {
          name: 'Team A4',
          participants: [{ name: 'Player A7' }, { name: 'Player A8' }],
        },
      ],
    },
    {
      name: 'Group B',
      teams: [
        {
          name: 'Team B1',
          participants: [{ name: 'Player B1' }, { name: 'Player B2' }],
        },
        {
          name: 'Team B2',
          participants: [{ name: 'Player B3' }, { name: 'Player B4' }],
        },
        {
          name: 'Team B3',
          participants: [{ name: 'Player B5' }, { name: 'Player B6' }],
        },
        {
          name: 'Team B4',
          participants: [{ name: 'Player B7' }, { name: 'Player B8' }],
        },
      ],
    },
    {
      name: 'Group C',
      teams: [
        {
          name: 'Team C1',
          participants: [{ name: 'Player C1' }, { name: 'Player C2' }],
        },
        {
          name: 'Team C2',
          participants: [{ name: 'Player C3' }, { name: 'Player C4' }],
        },
        {
          name: 'Team C3',
          participants: [{ name: 'Player C5' }, { name: 'Player C6' }],
        },
        {
          name: 'Team C4',
          participants: [{ name: 'Player C7' }, { name: 'Player C8' }],
        },
      ],
    },
  ],
  bracketsAfterGroupPhase: 3,
}

export const twelveTeamsMatches: Match[] = [
  {
    group: "Group A",
    homeTeam: {
      name: "Team A1",
      participants: [
        {
          name: "Player A1"
        },
        {
          name: "Player A2"
        }
      ]
    },
    awayTeam: {
      name: "Team A2",
      participants: [
        {
          name: "Player A3"
        },
        {
          name: "Player A4"
        }
      ]
    },
    scoreHome: 3,
    scoreAway: 2
  },
  {
    group: "Group A",
    homeTeam: {
      name: "Team A1",
      participants: [
        {
          name: "Player A1"
        },
        {
          name: "Player A2"
        }
      ]
    },
    awayTeam: {
      name: "Team A3",
      participants: [
        {
          name: "Player A5"
        },
        {
          name: "Player A6"
        }
      ]
    },
    scoreHome: 0,
    scoreAway: 0
  },
  {
    group: "Group A",
    homeTeam: {
      name: "Team A1",
      participants: [
        {
          name: "Player A1"
        },
        {
          name: "Player A2"
        }
      ]
    },
    awayTeam: {
      name: "Team A4",
      participants: [
        {
          name: "Player A7"
        },
        {
          name: "Player A8"
        }
      ]
    },
    scoreHome: 4,
    scoreAway: 2
  },
  {
    group: "Group A",
    homeTeam: {
      name: "Team A2",
      participants: [
        {
          name: "Player A3"
        },
        {
          name: "Player A4"
        }
      ]
    },
    awayTeam: {
      name: "Team A3",
      participants: [
        {
          name: "Player A5"
        },
        {
          name: "Player A6"
        }
      ]
    },
    scoreHome: 1,
    scoreAway: 0
  },
  {
    group: "Group A",
    homeTeam: {
      name: "Team A2",
      participants: [
        {
          name: "Player A3"
        },
        {
          name: "Player A4"
        }
      ]
    },
    awayTeam: {
      name: "Team A4",
      participants: [
        {
          name: "Player A7"
        },
        {
          name: "Player A8"
        }
      ]
    },
    scoreHome: 2,
    scoreAway: 1
  },
  {
    group: "Group A",
    homeTeam: {
      name: "Team A3",
      participants: [
        {
          name: "Player A5"
        },
        {
          name: "Player A6"
        }
      ]
    },
    awayTeam: {
      name: "Team A4",
      participants: [
        {
          name: "Player A7"
        },
        {
          name: "Player A8"
        }
      ]
    },
    scoreHome: 1,
    scoreAway: 1
  },
  {
    group: "Group B",
    homeTeam: {
      name: "Team B1",
      participants: [
        {
          name: "Player B1"
        },
        {
          name: "Player B2"
        }
      ]
    },
    awayTeam: {
      name: "Team B2",
      participants: [
        {
          name: "Player B3"
        },
        {
          name: "Player B4"
        }
      ]
    },
    scoreHome: 4,
    scoreAway: 2
  },
  {
    group: "Group B",
    homeTeam: {
      name: "Team B1",
      participants: [
        {
          name: "Player B1"
        },
        {
          name: "Player B2"
        }
      ]
    },
    awayTeam: {
      name: "Team B3",
      participants: [
        {
          name: "Player B5"
        },
        {
          name: "Player B6"
        }
      ]
    },
    scoreHome: 4,
    scoreAway: 4
  },
  {
    group: "Group B",
    homeTeam: {
      name: "Team B1",
      participants: [
        {
          name: "Player B1"
        },
        {
          name: "Player B2"
        }
      ]
    },
    awayTeam: {
      name: "Team B4",
      participants: [
        {
          name: "Player B7"
        },
        {
          name: "Player B8"
        }
      ]
    },
    scoreHome: 3,
    scoreAway: 1
  },
  {
    group: "Group B",
    homeTeam: {
      name: "Team B2",
      participants: [
        {
          name: "Player B3"
        },
        {
          name: "Player B4"
        }
      ]
    },
    awayTeam: {
      name: "Team B3",
      participants: [
        {
          name: "Player B5"
        },
        {
          name: "Player B6"
        }
      ]
    },
    scoreHome: 2,
    scoreAway: 0
  },
  {
    group: "Group B",
    homeTeam: {
      name: "Team B2",
      participants: [
        {
          name: "Player B3"
        },
        {
          name: "Player B4"
        }
      ]
    },
    awayTeam: {
      name: "Team B4",
      participants: [
        {
          name: "Player B7"
        },
        {
          name: "Player B8"
        }
      ]
    },
    scoreHome: 4,
    scoreAway: 0
  },
  {
    group: "Group B",
    homeTeam: {
      name: "Team B3",
      participants: [
        {
          name: "Player B5"
        },
        {
          name: "Player B6"
        }
      ]
    },
    awayTeam: {
      name: "Team B4",
      participants: [
        {
          name: "Player B7"
        },
        {
          name: "Player B8"
        }
      ]
    },
    scoreHome: 0,
    scoreAway: 4
  },
  {
    group: "Group C",
    homeTeam: {
      name: "Team C1",
      participants: [
        {
          name: "Player C1"
        },
        {
          name: "Player C2"
        }
      ]
    },
    awayTeam: {
      name: "Team C2",
      participants: [
        {
          name: "Player C3"
        },
        {
          name: "Player C4"
        }
      ]
    },
    scoreHome: 3,
    scoreAway: 1
  },
  {
    group: "Group C",
    homeTeam: {
      name: "Team C1",
      participants: [
        {
          name: "Player C1"
        },
        {
          name: "Player C2"
        }
      ]
    },
    awayTeam: {
      name: "Team C3",
      participants: [
        {
          name: "Player C5"
        },
        {
          name: "Player C6"
        }
      ]
    },
    scoreHome: 4,
    scoreAway: 1
  },
  {
    group: "Group C",
    homeTeam: {
      name: "Team C1",
      participants: [
        {
          name: "Player C1"
        },
        {
          name: "Player C2"
        }
      ]
    },
    awayTeam: {
      name: "Team C4",
      participants: [
        {
          name: "Player C7"
        },
        {
          name: "Player C8"
        }
      ]
    },
    scoreHome: 3,
    scoreAway: 1
  },
  {
    group: "Group C",
    homeTeam: {
      name: "Team C2",
      participants: [
        {
          name: "Player C3"
        },
        {
          name: "Player C4"
        }
      ]
    },
    awayTeam: {
      name: "Team C3",
      participants: [
        {
          name: "Player C5"
        },
        {
          name: "Player C6"
        }
      ]
    },
    scoreHome: 2,
    scoreAway: 4
  },
  {
    group: "Group C",
    homeTeam: {
      name: "Team C2",
      participants: [
        {
          name: "Player C3"
        },
        {
          name: "Player C4"
        }
      ]
    },
    awayTeam: {
      name: "Team C4",
      participants: [
        {
          name: "Player C7"
        },
        {
          name: "Player C8"
        }
      ]
    },
    scoreHome: 3,
    scoreAway: 4
  },
  {
    group: "Group C",
    homeTeam: {
      name: "Team C3",
      participants: [
        {
          name: "Player C5"
        },
        {
          name: "Player C6"
        }
      ]
    },
    awayTeam: {
      name: "Team C4",
      participants: [
        {
          name: "Player C7"
        },
        {
          name: "Player C8"
        }
      ]
    },
    scoreHome: 1,
    scoreAway: 3
  }
]


export const twelveTeamsKoTree = [
  {
    "team1": "Team A1",
    "team2": "Team B1",
    "score1": 0,
    "score2": 0,
    "winner": null
  },
  {
    "team1": "Team C1",
    "team2": "Team A2",
    "score1": 0,
    "score2": 0,
    "winner": null
  },
  {
    "team1": "Team B2",
    "team2": "Team C4",
    "score1": 0,
    "score2": 0,
    "winner": null
  },
  {
    "team1": "Team A3",
    "team2": "Team B4",
    "score1": 0,
    "score2": 0,
    "winner": null
  }
]
