import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
let supabase = null

export default {
  /**
   * 初始化Supabase配置
   * @param {*} param0 
   */
  init ({ supabaseUrl, supabaseKey }) {
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('supabaseUrl supabaseKey are quired')
    }
    if (supabase) {
      return supabase
    }
    supabase = createClient(supabaseUrl, supabaseKey)
    return supabase
  },
  supabase,
  /**
   * 根据文章标题获取文章记录，若找不到则返回null
   * @param {string} title 文章标题
   */
  async getArticleList(title) {
    const res = await supabase
      .from('article')
      .select()
      .like('title', `%${title}%`)
    if (res.error) {
      throw res.error
    }
    return res.data || null
  },
  /**
   * 保存更新文章记录，若成功则返回更新后的文章记录对象
   * @param {*} article 文章记录
   */
  async saveArticle(article) {
    const res = await supabase
      .from('article')
      .upsert(article)
      .select()
      .eq('id', article.id)
    if (res.error) {
      throw res.error
    }
    if (!res.data || !res.data[0] || !res.data[0].id) {
      throw new Error('保存文章失败')
    }
    return res.data[0]
  }
}
