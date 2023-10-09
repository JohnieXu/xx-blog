<template>
  <div class="contact-me">
    <input type="text" v-model.trim="keyWord" @change="searchByKeyWord">
    <div class="result">
      <p>length: {{ articleList.length }}</p>
      <div>
        {{ articleList }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, inject, ref } from 'vue'
  import Supabase from './supabase/supabase'

  const supabaseUrl = inject('supabaseUrl')
  const supabaseKey = inject('supabaseKey')

  const keyWord = ref('')
  const articleList = ref([])

  const searchByKeyWord = () => {
    if (!keyWord.value || !keyWord.value.trim()) { return }
    Supabase.getArticleList(keyWord.value).then((data) => {
      console.log(data)
      articleList.value = data
    })
  }

  onMounted(() => {
    console.log('ContactMe mounted')
    Supabase.init({ supabaseUrl, supabaseKey })
  })
</script>

<style>
</style>
