<template>
  <div style="height: 100%">
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
      <el-table-column prop="sex" label="性别" align="center"> </el-table-column>
      <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
      <el-table-column prop="number" label="电话" align="center"> </el-table-column>
      <el-table-column prop="class" label="班级" align="center"> </el-table-column>
      <el-table-column prop="state" label="状态" align="center"> </el-table-column>
      <el-table-column prop="address" label="地址" align="center"> </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template>
          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { students } from '@/api/api.js'

export default {
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData(params) {
      students(params).then(res => {
        console.log(res);
        if(res.data.status === 200) {
          this.tableData = res.data.data
        }
      })
    }
  }
};
</script>
<style scoped>

</style>