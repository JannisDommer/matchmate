<template>
  <MatchMateTable :columns="['Time','Group', 'Game', 'Result']" :rows="defineGames">
    <template #header="{ column }">
      <div class="table-cell font-bold">{{ column }}</div>
    </template>

    <template #cell="{ row, column }">
      <template v-if="column === 'Time'">
        <div class="table-cell">{{ row?.time }}</div>
      </template>
      <template v-else-if="column === 'Group'">
        <div class="table-cell">{{ row?.group }}</div>
      </template>
      <template v-else-if="column === 'Game'">
        <div class="table-cell">{{ row?.homeTeam.name }} vs {{ row?.awayTeam.name }}</div>
      </template>
      <template v-else>
        <div class="table-cell">{{ row?.scoreHome }} : {{ row?.scoreAway }}</div>
      </template>
    </template>
  </MatchMateTable>
</template>

<script setup lang="ts">
import MatchMateTable from "./MatchMateTable.vue";
import {computed} from "vue";
import type {Group, Match} from "@/types/tournamentTypes.ts";
import {getGroupPhaseMatches, scheduleMatches} from "@/util/dataTransformations.ts";

const props = defineProps<{
  groups: Group[]
  matches: Match[]
}>()

const startDate = new Date(2025, 6,3, 12, 0, 0);
const matchTimeInMinutes = 15;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
  return array;
}


const defineGames = computed(() => {
  if (!props.groups) {
    return [];
  }
  const shuffled = shuffleArray([...getGroupPhaseMatches(props.groups)]); // use spread to avoid modifying original
  console.log(shuffled);
  return scheduleMatches(props.matches, startDate, matchTimeInMinutes);
})

</script>

<style scoped>
.font-bold {
  font-weight: bold;
  font-size: 20pt;
  color: #1976d2;
}

.table-cell {
  padding: 0 2rem 0;
}
</style>
