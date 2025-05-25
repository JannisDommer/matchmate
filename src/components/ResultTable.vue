<template>
  <MatchMateTable :columns="columns" :rows="rows">
    <template #header="{ column }">
      {{ column }}
    </template>
    <template #cell="{ row, column }">
      {{ row[columnKey(column)] }}
    </template>
  </MatchMateTable>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MatchMateTable from "@/components/MatchMateTable.vue";

interface TeamRanking {
  rank: number;
  name: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

const props = defineProps<{
  groupRankings: TeamRanking[]
}>();

const columns = [
  "Rank",
  "Team",
  "Played",
  "Won",
  "Drawn",
  "Lost",
  "Goals For",
  "Goals Against",
  "Goal Difference",
  "Points"
];

const columnMap: Record<string, keyof TeamRanking> = {
  "Rank": "rank",
  "Team": "name",
  "Played": "played",
  "Won": "won",
  "Drawn": "drawn",
  "Lost": "lost",
  "Goals For": "goalsFor",
  "Goals Against": "goalsAgainst",
  "Goals Difference": "goalDifference",
  "Points": "points"
};

function columnKey(col: string) {
  return columnMap[col];
}

const rows = computed(() => props.groupRankings);
</script>

<style scoped>

</style>
