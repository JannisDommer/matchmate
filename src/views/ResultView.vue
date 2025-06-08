<template>
  <div class="centered-container">
    <div v-for="group in groups" style="margin:auto">
      <h2 class="group-header">{{ group.name }}</h2>
      <ResultTable :groupRankings="calculateGroupRankings(matches, group.name)"/>
    </div>
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

.group-header {
  font-weight: bold;
  color: #1976d2;
  margin-top: 1rem;
}
</style>
