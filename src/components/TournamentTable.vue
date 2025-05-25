<template>
  <Table :columns="['Time','Group', 'Game', 'Result']" :rows="defineGames">
    <template #header="{ column }">
      <span class="font-bold">{{ column }}</span>
    </template>

    <template #cell="{ row, column }">
      <template v-if="column === 'Time'">
        <span class="font-bold">{{ row?.time }}</span>
      </template>
      <template v-else-if="column === 'Group'">
        <span class="font-bold">{{ row?.group }}</span>
      </template>
      <template v-else-if="column === 'Game'">
        <span class="font-bold">{{ row?.homeTeam.name }} vs {{ row?.awayTeam.name }}</span>
      </template>
      <template v-else>
        <span class="font-bold">{{ row?.scoreHome }} : {{ row?.scoreAway }}</span>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import Table from "./Table.vue";
import {computed} from "vue";
import type {Group} from "@/types/tournamentTypes.ts";

const props = defineProps<{
  groups: Group[]
}>()

const startDate = new Date(2025, 6,3, 12, 0, 0);
const matchTimeInMinutes = 15;

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
    for (let opponentTeam = team+1; opponentTeam < teams.length; opponentTeam++) {
      accumulator.push({
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

const defineGames = computed(() => {
  if (!props.groups) {
    return [];
  }
  let matches = props.groups.flatMap(group =>
    matchesPerGroup(group)
  );
  matches = matches.map((match, index) => {
    let offsetSinceStart = index * matchTimeInMinutes;
    return {
      ...match,
      time: formatDate(addMinutes(startDate, offsetSinceStart)),
    }
  });
  return matches;
})

</script>

<style scoped>

</style>
