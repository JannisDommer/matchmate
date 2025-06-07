<template>
  <div class="centered-container">
    <GroupTable v-for="group in groups" :group="group"/>
  </div>
</template>

<script setup lang="ts">
import GroupTable from "../components/GroupTable.vue"
import {twelveTeams} from "@/data/twelveTeams.ts";

const groups = twelveTeams.groups;
</script>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
</style>
