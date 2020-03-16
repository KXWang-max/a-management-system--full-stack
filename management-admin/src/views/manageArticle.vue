<template>
    <div>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="title" label="标题" width="120">
            </el-table-column>
            <el-table-column prop="author" label="作者">
            </el-table-column>
          </el-table>
    </div>
</template>

<script>
export default {
    name:'manageArticle',
    data() {
      const item = {
        date: '2016-05-02',
        title: '文章标题',
        author: '作者名'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
}
</script>>