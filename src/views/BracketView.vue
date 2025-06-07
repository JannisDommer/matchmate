<template>
  <div class="bracket-container">
    <div class="bracket-tree">
      <div
        v-for="(round, roundIdx) in wholeTournamentTree"
        :key="roundIdx"
        class="bracket-round"
      >
        <h3>Round {{ roundIdx + 1 }}</h3>
        <div
          v-for="(match, matchIdx) in round"
          :key="matchIdx"
          class="match-box"
        >
          <div class="team">
            {{ match.team1 || (match.sourceMatch1?.winner ?? 'TBD') }}
            <span class="score">{{ match.score1 }}</span>
          </div>
          <div class="vs">vs</div>
          <div class="team">
            {{ match.team2 || (match.sourceMatch2?.winner ?? 'TBD') }}
            <span class="score">{{ match.score2 }}</span>
          </div>
          <div v-if="match.winner" class="winner">Winner: {{ match.winner }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  twelveTeams,
  twelveTeamsKoTree,
  twelveTeamsKoTreeFinals,
  twelveTeamsMatches
} from "@/data/twelveTeams.ts";
import {calculateGroupRankings, type TeamRanking} from "@/util/gameEvaluations.ts";
import {ref} from "vue";
import {getTeamsPlayingInBracket} from "@/util/dataTransformations.ts";
import type {groupPhaseResults, koMatch} from "@/types/tournamentTypes.ts";

const tournamentData = twelveTeams;
const groups = tournamentData.groups;
const matches = twelveTeamsMatches;
const groupResults: groupPhaseResults[] = groups.map(group => ({
  name: group.name,
  rankings: calculateGroupRankings(matches, group.name)
}));

// const firstRoundMatches = ref(getTeamsPlayingInBracket(twelveTeams, groupResults));
const firstRoundMatches = twelveTeamsKoTree;
//const wholeTournamentTree = ref(buildBracketTree(firstRoundMatches));
const wholeTournamentTree = twelveTeamsKoTreeFinals;


interface BracketMatch extends koMatch {
  round: number;
  matchIndex: number;
  sourceMatch1?: BracketMatch;
  sourceMatch2?: BracketMatch;
}

function buildBracketTree(firstRound: koMatch[]): BracketMatch[][] {
  const rounds: BracketMatch[][] = [];
  // Initialize first round
  rounds.push(firstRound.map((m, idx) => ({
    ...m,
    round: 1,
    matchIndex: idx,
  })));

  let prevRound = rounds[0];
  let roundNum = 2;

  while (prevRound.length > 1) {
    const nextRound: BracketMatch[] = [];
    for (let i = 0; i < prevRound.length; i += 2) {
      nextRound.push({
        team1: "", // Will be determined by winner of prevRound[i]
        team2: "", // Will be determined by winner of prevRound[i+1]
        score1: 0,
        score2: 0,
        winner: null,
        round: roundNum,
        matchIndex: nextRound.length,
        sourceMatch1: prevRound[i],
        sourceMatch2: prevRound[i + 1],
      });
    }
    rounds.push(nextRound);
    prevRound = nextRound;
    roundNum++;
  }
  console.log(rounds)
  return rounds;
}
</script>

<style scoped>
.bracket-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  min-height: 100vh;
  height: 100%;
}
.bracket-tree {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: stretch; /* Stretch columns to same height */
  width: 100%;
}
.bracket-round {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  height: 100%;
}
.match-box {
  border: 2px solid #1976d2;
  border-radius: 8px;
  padding: 1rem 2rem;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.team {
  font-weight: bold;
  font-size: 1.1rem;
}
.score {
  margin-left: 0.5rem;
  color: #1976d2;
}
.vs {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #888;
}
.winner {
  margin-top: 0.5rem;
  color: #388e3c;
  font-weight: bold;
}
</style>
