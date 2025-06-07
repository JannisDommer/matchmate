<template>
  <h2>This will show the brackets</h2>
</template>

<script setup lang="ts">
import {twelveTeams, twelveTeamsMatches} from "@/data/twelveTeams.ts";
import {calculateGroupRankings} from "@/util/gameEvaluations.ts";

const tournamentData = twelveTeams;
const groups = tournamentData.groups;
const matches = twelveTeamsMatches;
const groupResults = groups.map(group => ({
  name: group.name,
  rankings: calculateGroupRankings(matches, group.name)
}));

function getTeamsPlayingInBracket() {
  const numberOfBrackets = tournamentData.bracketsAfterGroupPhase;
  const teamsRequiredToFillBrackets = Math.pow(2, numberOfBrackets);
  const numberBracketsFirstRound = teamsRequiredToFillBrackets / 2;
  let teamsRequiredDivisableByNumberOfGroups = teamsRequiredToFillBrackets % tournamentData.groups.length === 0;
  let firstRoundMatches = [];
  if (teamsRequiredDivisableByNumberOfGroups) {
    for (let i = 0; i < teamsRequiredToFillBrackets; i+=2) {
      let groupToTakeFrom = i % tournamentData.groups.length;
      let positionInGroup = Math.floor(i / tournamentData.groups.length);
      const team1 = groupResults[groupToTakeFrom].rankings[positionInGroup].name;
      groupToTakeFrom = (i + 1) % tournamentData.groups.length;
      positionInGroup = Math.floor((i + 1) / tournamentData.groups.length);
      const team2 = groupResults[groupToTakeFrom].rankings[positionInGroup].name;
      firstRoundMatches[Math.floor(i/2)] = {
        team1: team1,
        team2: team2
      };
    }
  }
}
</script>

<style scoped>

</style>
