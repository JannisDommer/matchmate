<template>
  <MatchMateTable :columns="['Time','Group', 'Game', 'Result']" :rows="defineGames">
    <template #header="{ column }">
      <span class="font-bold">{{ column }}</span>
    </template>

    <template #cell="{ row, column }">
      <template v-if="column === 'Time'">
        <span class="table-cell">{{ row?.time }}</span>
      </template>
      <template v-else-if="column === 'Group'">
        <span class="table-cell">{{ row?.group }}</span>
      </template>
      <template v-else-if="column === 'Game'">
        <span class="table-cell">{{ row?.homeTeam.name }} vs {{ row?.awayTeam.name }}</span>
      </template>
      <template v-else>
        <span class="table-cell">{{ row?.scoreHome }} : {{ row?.scoreAway }}</span>
      </template>
    </template>
  </MatchMateTable>
</template>

<script setup lang="ts">
import MatchMateTable from "./MatchMateTable.vue";
import {computed} from "vue";
import type {Group, Match} from "@/types/tournamentTypes.ts";
import {scheduleMatches} from "@/util/dataTransformations.ts";

const props = defineProps<{
  groups: Group[]
  matches: Match[]
}>()

const startDate = new Date(2025, 6,3, 12, 0, 0);
const matchTimeInMinutes = 15;

const defineGames = computed(() => {
  if (!props.groups) {
    return [];
  }
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
