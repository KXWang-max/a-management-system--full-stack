<template>
    <div>
        <!-- 当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，
        可以在 <el-form> 标签上添加 @submit.native.prevent 
        可替代el-button中的@click,但是需要在el-button中指明native-type为submit,即为提交按钮-->
        <el-form  @submit.native.prevent="submitArticle" :model="newArticle" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="newArticle.title"></el-input>
            </el-form-item>
            <el-form-item label="正文">
                <el-input type="textarea" v-model="newArticle.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">立即提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'createArticle',
    data() {
      return {
        newArticle: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      submitArticle() {
        console.log('submit!');
        console.log(this.newArticle);
      }
    }
}
</script>>