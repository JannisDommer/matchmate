import type {Group, Match, ScheduledMatches} from "@/types/tournamentTypes.ts";

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}

function formatDate(date: Date): string {
  return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

function matchesPerGroup(group: Group) {
  const accumulator = [];
  let teams = group.teams;
  for (let team = 0; team < teams.length; team++) {
    for (let opponentTeam = team + 1; opponentTeam < teams.length; opponentTeam++) {
      accumulator.push(<Match>{
        group: group.name,
        homeTeam: teams[team],
        awayTeam: teams[opponentTeam],
        scoreHome: Math.floor(Math.random() * 5),
        scoreAway: Math.floor(Math.random() * 5)
      })
    }
  }
  return accumulator;
}

export function getMatches(groups: Group[]) {
  return groups.flatMap(group =>
    matchesPerGroup(group)
  );
}

export function scheduleMatches(matches: Match[], startDate: Date, matchTimeInMinutes: number): ScheduledMatches[] {
  return matches.map((match, index) => {
    let offsetSinceStart = index * matchTimeInMinutes;
    return {
      ...match,
      time: formatDate(addMinutes(startDate, offsetSinceStart)),
    }
  });
}
