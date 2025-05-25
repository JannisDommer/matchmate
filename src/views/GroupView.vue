<template>
  <GroupTable v-for="group in groups" :group="group"/>
</template>

<script setup lang="ts">
import GroupTable from "../components/GroupTable.vue"
import {twelveTeams} from "@/data/twelveTeams.ts";

const groups = twelveTeams.groups;
</script>

<style scoped>

</style>
