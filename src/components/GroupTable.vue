<template>
  <MatchMateTable :columns="[group.name]" :rows="group.teams">
    <template #header="{ column }">
      <span class="font-bold">{{ column }}</span>
    </template>

    <template #cell="{ row, column }">
      <template v-if="column === 'Actions'">
        <button @click="edit(row)" class="text-blue-600 hover:underline">Edit</button>
      </template>
      <template v-else>
        {{row?.name}}
      </template>
    </template>
  </MatchMateTable>
</template>

<script setup lang="ts">
import MatchMateTable from './MatchMateTable.vue'
import { Group } from '@/types/tournamentTypes.ts'

defineProps<{
  group: Group
}>();


function edit(row) {
  alert('Editing: ' + JSON.stringify(row))
}
</script>
