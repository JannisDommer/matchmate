import type {TeamRanking} from "@/util/gameEvaluations.ts";

export interface TournamentDefinition {
  name: string,
  groups: Group[],
  bracketsAfterGroupPhase: number,
}

export interface Group {
  name: string,
  teams: Team[],
}

export interface Team {
  name: string,
  participants: Participant[],
}

export interface Participant {
  name: string,
}

export interface Match {
  group: string;
  homeTeam: Team;
  awayTeam: Team;
  scoreHome: number;
  scoreAway: number;
}

export interface ScheduledMatches extends Match {
  time: string;
}

export type koMatch = { team1: string, team2: string, score1: number, score2: number, winner: string | null };

export interface groupPhaseResults {
  name: string;
  rankings: TeamRanking[];
};
