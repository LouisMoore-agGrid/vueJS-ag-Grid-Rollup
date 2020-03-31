<template>
  <ag-grid-vue
    style="width: 500px; height: 500px;"
    class="ag-theme-balham"
    :column-defs="columnDefs"
    :row-data="rowData"
  />
</template>
<script>

import { AgGridVue } from 'ag-grid-vue/lib/AgGridVue';

export default {
  name: 'App',
  components: {
    AgGridVue
  },
  data() {
    return {
      columnDefs: null,
      rowData: null
    };
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }
};
</script>


