<template>
  <div class="rounded border border-gray-300" style="margin: auto">
    <table class="min-w-full text-left text-sm">
      <thead class="bg-gray-100 text-gray-700">
      <tr>
        <th v-for="(col, colIndex) in columns" :key="'head-' + colIndex" class="px-4 py-2">
          <slot name="header" :column="col">{{ col }}</slot>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="'row-' + rowIndex" class="hover:bg-gray-50 border-t">
        <td
          v-for="(col, colIndex) in columns"
          :key="'cell-' + rowIndex + '-' + colIndex"
          class="px-4 py-2 text-center"
        >
          <slot name="cell" :row="row" :column="col">
            {{ row }}
          </slot>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  columns: string[]
  rows: any[]
}>();
</script>


<style scoped>
.text-center {
  text-align: center;
}
</style>
