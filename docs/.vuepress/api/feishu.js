import axios from 'axios'

const FEISHU_APP_ID = process.env.FEISHU_APP_ID
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET
const FEISHU_WIKI_SPACE_ID = process.env.FEISHU_WIKI_SPACE_ID

class FeishuAPI {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://open.feishu.cn/open-apis',
      timeout: 5000,
    })
    this.token = null
    this.tokenExpireTime = 0
  }

  async getAccessToken() {
    const now = Date.now()
    if (this.token && now < this.tokenExpireTime) {
      return this.token
    }

    try {
      const response = await this.client.post('/auth/v3/tenant_access_token/internal', {
        app_id: FEISHU_APP_ID,
        app_secret: FEISHU_APP_SECRET,
      })

      if (response.data.code === 0) {
        this.token = response.data.tenant_access_token
        this.tokenExpireTime = now + (response.data.expire - 60) * 1000 // 提前60秒过期
        return this.token
      }
      throw new Error('Failed to get access token')
    } catch (error) {
      console.error('Error getting access token:', error)
      throw error
    }
  }

  async getWikiNodes() {
    try {
      const token = await this.getAccessToken()
      const response = await this.client.get(`/wiki/v2/spaces/${FEISHU_WIKI_SPACE_ID}/nodes`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: {
          page_size: 50,
        },
      })

      if (response.data.code === 0) {
        return response.data.data.items
      }
      throw new Error('Failed to get wiki nodes')
    } catch (error) {
      console.error('Error getting wiki nodes:', error)
      throw error
    }
  }

  async getWikiNodeContent(nodeToken) {
    try {
      const token = await this.getAccessToken()
      const response = await this.client.get(`/wiki/v2/spaces/${FEISHU_WIKI_SPACE_ID}/nodes/${nodeToken}/content`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.data.code === 0) {
        return response.data.data
      }
      throw new Error('Failed to get node content')
    } catch (error) {
      console.error('Error getting node content:', error)
      throw error
    }
  }
}

export const feishuAPI = new FeishuAPI()
