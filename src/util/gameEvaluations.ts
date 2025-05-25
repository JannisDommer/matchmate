import type { Match } from "@/types/tournamentTypes";

export interface TeamRanking {
  rank: number;
  name: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

/**
 * Calculates the rankings for a group based on its matches.
 * @param matches Array of all matches
 * @param groupName The group to evaluate
 * @returns TeamRanking[] sorted by soccer rules
 */
export function calculateGroupRankings(matches: Match[], groupName: string): TeamRanking[] {
  // Filter matches for the group
  const groupMatches = matches.filter(m => m.group === groupName);
  const teamStats: Record<string, Omit<TeamRanking, 'rank' | 'name'> & { name: string }> = {};

  // Collect all teams in the group
  groupMatches.forEach(match => {
    [match.homeTeam, match.awayTeam].forEach(team => {
      if (!teamStats[team.name]) {
        teamStats[team.name] = {
          name: team.name,
          points: 0,
          played: 0,
          won: 0,
          drawn: 0,
          lost: 0,
          goalsFor: 0,
          goalsAgainst: 0,
          goalDifference: 0,
        };
      }
    });
  });

  // Calculate stats
  groupMatches.forEach(match => {
    const home = teamStats[match.homeTeam.name];
    const away = teamStats[match.awayTeam.name];
    home.played++;
    away.played++;
    home.goalsFor += match.scoreHome;
    home.goalsAgainst += match.scoreAway;
    away.goalsFor += match.scoreAway;
    away.goalsAgainst += match.scoreHome;
    if (match.scoreHome > match.scoreAway) {
      home.won++;
      home.points += 3;
      away.lost++;
    } else if (match.scoreHome < match.scoreAway) {
      away.won++;
      away.points += 3;
      home.lost++;
    } else {
      home.drawn++;
      away.drawn++;
      home.points++;
      away.points++;
    }
  });

  // Calculate goal difference
  Object.values(teamStats).forEach(stat => {
    stat.goalDifference = stat.goalsFor - stat.goalsAgainst;
  });

  // Sort by points, goal difference, goals for, then name
  const sorted = Object.values(teamStats).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    return a.name.localeCompare(b.name);
  });

  // Assign ranks
  return sorted.map((stat, idx) => ({
    rank: idx + 1,
    ...stat
  }));
}

