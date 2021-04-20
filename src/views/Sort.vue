<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-17 14:32:24
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-20 10:54:08
-->
<template>
  <el-table
    :data="tableData"
    ref="table"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'ascending' }"
    @sort-change="handleSortChange"
    :header-cell-class-name="tableRowClassName"
  >
    <el-table-column
      prop="date"
      label="日期"
      class="pl"
      sortable="custom"
      :sort-orders="['ascending', 'descending']"
      width="180"
    >
    </el-table-column>
    <el-table-column prop="date2" label="日期2" sortable="custom" width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          date2: "2016-05-02",
        },
        {
          date: "2016-05-04",
          date2: "2016-05-02",
        },
        {
          date: "2016-05-01",
          date2: "2016-05-02",
        },
        {
          date: "2016-05-03",
          date2: "2016-05-02",
        },
        {
          date: "2016-05-03",
          date2: "2016-05-05",
        },
      ],
      sortArr: [{ prop: "date", order: "ascending" }],
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    tableRowClassName({ row, column, rowIndex, columnIndex }) {
      this.sortArr.forEach((item) => {
        if (item.prop === column.property) {
          column.order = item.order;
        }
      });
    },
    handleSortChange({ column, prop, order }) {
      if (prop === "date") {
        this.sortArr[0].order = order;
      } else if (prop === "date2") {
        if (order) {
          this.sortArr[1] = {};
          this.sortArr[1].prop = prop;
          this.sortArr[1].order = order;
        } else {
          this.sortArr.length = 1;
        }
      }
      console.log(this.sortArr);
    },
  },
};
</script>
<style scoped>
.ascending .sort-caret.descending {
  border-bottom-color: #409eff !important;
}
.ascending .sort-caret.descending {
  border-bottom-color: #409eff !important;
}
</style>