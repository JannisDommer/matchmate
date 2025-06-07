import type {
  Group, groupPhaseResults, koMatch,
  Match,
  ScheduledMatches,
  TournamentDefinition
} from "@/types/tournamentTypes.ts";

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

export function getGroupPhaseMatches(groups: Group[]) {
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



export function getTeamsPlayingInBracket(tournamentData: TournamentDefinition, groupResults: groupPhaseResults[]) {
  const numberOfBrackets = tournamentData.bracketsAfterGroupPhase;
  console.log(numberOfBrackets)
  const teamsRequiredToFillBrackets = Math.pow(2, numberOfBrackets);
  let teamsRequiredDivisableByNumberOfGroups = teamsRequiredToFillBrackets % tournamentData.groups.length === 0;
  let firstRoundMatches: koMatch[] = [];
  for (let i = 0; i < teamsRequiredToFillBrackets; i += 2) {
    let groupToTakeFrom = i % tournamentData.groups.length;
    let positionInGroup = Math.floor(i / tournamentData.groups.length);
    const team1 = groupResults[groupToTakeFrom].rankings[positionInGroup].name;
    groupToTakeFrom = (i + 1) % tournamentData.groups.length;
    positionInGroup = Math.floor((i + 1) / tournamentData.groups.length);
    const team2 = groupResults[groupToTakeFrom].rankings[positionInGroup].name;
    firstRoundMatches[Math.floor(i / 2)] = {
      team1,
      team2,
      score1: 0,
      score2: 0,
      winner: null
    };
  }
  console.log(firstRoundMatches);
  return firstRoundMatches;
}
