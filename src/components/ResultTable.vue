<template>
  <MatchMateTable :columns="columns" :rows="rows">
    <template #header="{ column }">
      <span class="table-cell">{{column}}</span>
    </template>
    <template #cell="{ row, column }">
      <span>{{ row[columnKey(column)] }}</span>
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
  "Rang",
  "Team",
  "Gespielt",
  "Gewo.",
  "Unent.",
  "Verl.",
  "Tore+",
  "Tore-",
  "Diff.",
  "Punkte"
];

const columnMap: Record<string, keyof TeamRanking> = {
  "Rang": "rank",
  "Team": "name",
  "Gespielt": "played",
  "Gewo.": "won",
  "Unent.": "drawn",
  "Verl.": "lost",
  "Tore+": "goalsFor",
  "Tore-": "goalsAgainst",
  "Diff.": "goalDifference",
  "Punkte": "points"
};

function columnKey(col: string) {
  return columnMap[col];
}

const rows = computed(() => {
  console.log(props.groupRankings);
  return props.groupRankings
});
</script>

<style scoped>
.table-cell {
  margin: 0 10px 0;
}
</style>
