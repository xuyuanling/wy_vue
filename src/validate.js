import Vue from 'vue'
//引入
import  VeeValidate, { Validator } from 'vee-validate'
// 引用中文信息提示
import zh_CN from 'vee-validate/dist/locale/zh_CN.js'


Vue.use(VeeValidate)


// 提示信息本地化
VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
      name: '用户名',
      phone: '手机号',
      code: '验证码'
    }
  })
  
  // 自定义验证规则
  VeeValidate.Validator.extend('mobile', {
    validate: value => {
      return /^1\d{10}$/.test(value)
    },
    getMessage: field => field + '必须是11位手机号码'
  })