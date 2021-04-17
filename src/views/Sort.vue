<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-17 14:32:24
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 17:41:26
-->
<template>
  <el-table
    :data="tableData"
    ref="table"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'ascending'}"
    @sort-change='handleSortChange'
    >
    <el-table-column
      prop="date"
      label="日期"
      class="pl"
      sortable='custom'
      :sort-orders="['ascending','descending']"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date2"
      label="日期2"
      sortable='custom'
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        currentC: '',
        tableData: [{
          date: '2016-05-02',
          date2: '2016-05-02'
        }, {
          date: '2016-05-04',
          date2: '2016-05-02'

        }, {
          date: '2016-05-01',
          date2: '2016-05-02'

        }, {
          date: '2016-05-03',
          date2: '2016-05-02'

        },
        {
          date: '2016-05-03',
          date2: '2016-05-05'

        },
        ],
        sortArr: [{prop:'date',order:'ascending'}]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address
      },
      handleSortChange({ column, prop, order }){
        console.log(prop, order)
        this.currentC = prop
        if(prop === 'date') {
            this.sortArr[0].order = order
        }
        else if(prop === 'date2') {
            if(order) {
                this.sortArr[1] = {}
                this.sortArr[1].prop = prop
                this.sortArr[1].order = order
            }else {
                this.sortArr.length = 1
            }
        }
        const status1 = document.querySelectorAll('.sort-caret.ascending')
        const status2 = document.querySelectorAll('.sort-caret.descending')
        this.sortArr.forEach((item, index) =>{
            if(item.order === 'ascending') {
            status1[index].style.borderBottomColor = '#409EFF'
            status2[index].style.borderTopColor = '#C0C4CC'
            } else if(item.order === 'descending'){
            status1[index].style.borderBottomColor = '#C0C4CC'
            status2[index].style.borderTopColor = '#409EFF'
            }else {
            status1[index].style.borderBottomColor = '#C0C4CC'
            status2[index].style.borderTopColor = '#C0C4CC'
            }
        })
        if(this.sortArr.length === 1) {
            status1[1].style.borderBottomColor = '#C0C4CC'
            status2[1].style.borderTopColor = '#C0C4CC'
        }
        console.log(this.sortArr)

        }
        
    }
  }
</script>
<style scoped>
    .ascending .sort-caret.descending {
    border-bottom-color: #409EFF!important;
    }
    .ascending .sort-caret.descending {
    border-bottom-color: #409EFF!important;
}
</style>