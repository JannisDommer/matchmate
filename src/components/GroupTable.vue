<template>
  <MatchMateTable :columns="[group.name]" :rows="group.teams">
    <template #header="{ column }">
      <span class="font-bold pt-4 pb-3">{{ column }}</span>
    </template>

    <template #cell="{ row }">
      {{row.name}}
    </template>
  </MatchMateTable>
</template>

<script setup lang="ts">
import MatchMateTable from './MatchMateTable.vue'
import {type Group } from '@/types/tournamentTypes.ts'

defineProps<{
  group: Group
}>();

</script>

<style scoped>
.font-bold {
  font-weight: bold;
  font-size: 20pt;
  color: #1976d2;
}
</style>
