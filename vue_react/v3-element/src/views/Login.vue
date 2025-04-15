<template>
    <el-form
        style="position: absolute;left: 50%;"
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="auto"
    >
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name"  size="small" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"  type="password" size="small"/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
        </el-form-item>
    </el-form>
    
</template>

<script setup>
import { reactive, ref } from 'vue';

const formRef = ref(null)
// 表单数据
const form = reactive({
    name: '',
    password: ''
})
// 表单校验规则
const rules = {
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3-5 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '长度在 6-12 个字符', trigger: 'blur' }
    ]
}
const loading = ref(false);
const onSubmit = async () => {
    // console.log(formRef.value)
    loading.value = true;
    await formRef.value.validate(async (valid) => {
        if (valid) {
            // 校验通过，执行登录逻辑
            console.log('登录成功') 
        } 
        else {
            // 校验失败，显示错误信息
            console.log('登录失败')
            loading.value = false;
            return false
        }
    })
}
</script>

<style scoped>

</style>