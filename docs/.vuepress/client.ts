import { defineClientConfig } from '@vuepress/client'
import { provide } from 'vue'
import ContactMe from './ContactMe.vue'

export default defineClientConfig({
  setup() {
    provide('count', 'count')
    provide('supabaseUrl', '这里填写真实的supabaseUrl')
    provide('supabaseKey', '这里填写真实的supabaseKey')
  },
  enhance({ app }) {
    app.component('ContactMe', ContactMe)
  }
})
