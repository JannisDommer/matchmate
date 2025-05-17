<template>
  <Table :columns="['Game', 'Result']" :rows="defineGames">
    <template #header="{ column }">
      <span class="font-bold">{{ column }}</span>
    </template>

    <template #cell="{ row, column }">
      <template v-if="column === 'Game'">
        <span class="font-bold">{{ row?.homeTeam }} vs {{ row?.awayTeam }}</span>
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

const props = defineProps<{
  groups: Group[]
}>()

type Game = {
  homeTeam: string;
  awayTeam: string;
  scoreHome: number;
  scoreAway: number;
}

function matchesPerGroup(group: Group) {
  const accumulator = [];
  let teams = group.teams;
  for (let team = 0; team < teams.length; team++) {
    for (let opponentTeam = team+1; opponentTeam < teams.length; opponentTeam++) {
      accumulator.push({
        homeTeam: teams[team].name,
        awayTeam: teams[opponentTeam].name,
        scoreHome: Math.floor(Math.random() * 5),
        scoreAway: Math.floor(Math.random() * 5)
      })
    }
  }
  return accumulator;
  //return teams.flatMap(team =>
  //  teams.filter(opponent => opponent !== team).map(opponent => {
  //    console.log(opponent);
  //    return {
  //      homeTeam: team.name,
  //      awayTeam: opponent.name,
  //      scoreHome: Math.floor(Math.random() * 5),
  //      scoreAway: Math.floor(Math.random() * 5)
  //    }
  //  })
  //);
}

const defineGames = computed(() => {
  console.log(props.groups);
  if (!props.groups) {
    return [];
  }
  return props.groups.flatMap(group =>
    matchesPerGroup(group)
  );
})

</script>

<style scoped>

</style>
