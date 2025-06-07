<template>
  <div class="centered-container">
    <ResultTable v-for="group in groups" :groupRankings="calculateGroupRankings(matches, group.name)"/>
  </div>
</template>


<script setup lang="ts">
import ResultTable from "@/components/ResultTable.vue";
import {calculateGroupRankings} from "@/util/gameEvaluations.ts";
import {twelveTeams, twelveTeamsMatches} from "@/data/twelveTeams.ts";

const groups = twelveTeams.groups;
const matches = twelveTeamsMatches;
</script>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
</style>
