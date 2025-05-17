<template>
  <TournamentTable :groups="groups">

  </TournamentTable>
</template>

<script setup lang="ts">
import TournamentTable from "../components/TournamentTable.vue"
import {twelveTeams} from "@/data/twelveTeams.ts";

const groups = twelveTeams.groups;
</script>

<style scoped>

</style>
