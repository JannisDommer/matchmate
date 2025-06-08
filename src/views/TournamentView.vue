<template>
  <div class="centered-container">
    <TournamentTable :groups="groups" :matches="matches">
    </TournamentTable>
  </div>
</template>

<script setup lang="ts">
import TournamentTable from "../components/TournamentTable.vue"
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
  margin-left: 10rem;
}
</style>
