<template>
    <div>
        <el-table :data="articles">
            <!-- <el-table-column prop="date" label="日期" width="140">
            </el-table-column> -->
            <el-table-column prop="title" label="标题" width="120">
            </el-table-column>
            <el-table-column prop="content" label="内容" width="220">
            </el-table-column>
            <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
                    <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
                  </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
   name:'manageArticle',
   methods:{
      fetch(){
          this.$http.get('articles').then(res=>{
          this.articles = res.data
        })
      },
      //the '/' is necessary
      edit(id){
        this.$router.push(`/articles/edit/${id}`)
      },
      remove(id){
        this.$http.delete(`articles/${id}`).then(res=>{
            console.log(res)
            this.$message({
              message:'delete successfully',
              type:'success'
            })
        },          
        this.fetch()
        )
      }
    },
    data() {
      return{
        articles:[]
      };
    },
    created(){
      this.fetch()
    },
   
}
</script>>