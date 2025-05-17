import type {TournamentDefinition} from "@/types/tournamentTypes.ts";

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
