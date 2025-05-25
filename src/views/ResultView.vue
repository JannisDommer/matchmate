<template>
  <ResultTable v-for="group in groups" :groupRankings="calculateGroupRankings(matches, group.name)"/>
</template>


<script setup lang="ts">
import ResultTable from "@/components/ResultTable.vue";
import {calculateGroupRankings} from "@/util/gameEvaluations.ts";
import {twelveTeams, twelveTeamsMatches} from "@/data/twelveTeams.ts";

const groups = twelveTeams.groups;
const matches = twelveTeamsMatches;
</script>

<style scoped>

</style>
