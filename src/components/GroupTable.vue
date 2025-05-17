<template>
  <Table :columns="['Name']" :rows="data">
    <template #header="{ column }">
      <span class="font-bold">{{ column }}</span>
    </template>

    <template #cell="{ row, column }">
      <template v-if="column === 'Actions'">
        <button @click="edit(row)" class="text-blue-600 hover:underline">Edit</button>
      </template>
      <template v-else>
        {{ row[column] }}
      </template>
    </template>
  </Table>
</template>

<script setup>
import Table from './Table.vue'

const data = [
  { Name: 'Alice' },
  { Name: 'Bob'},
]

function edit(row) {
  alert('Editing: ' + JSON.stringify(row))
}
</script>
