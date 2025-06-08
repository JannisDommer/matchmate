<template>
  <MatchMateTable :columns="[group.name]" :rows="group.teams">
    <template #header="{ column }">
      <span class="font-bold pt-4 pb-3">{{ column }}</span>
    </template>

    <template #cell="{ row }">
      <span class="group-name">{{row.name}}: </span>
      <span v-for="participant in row.participants" class="participant-name">{{participant.name}}, </span>
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

.group-name {
  font-weight: bold
}

.participant-name {
  //margin-left: 5px;
}
</style>
