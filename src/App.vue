<template>
  <Loading v-if="loading" class="absolute top-0 left-0 right-0 bottom-0 m-auto" size="200" />
  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loading from '@/components/Loading.vue'

export default defineComponent({
  name: 'App',
  components: { Loading },
  data () {
    return {
      loading: true
    }
  },
  beforeMount () {
    fetch('/iptv/index.m3u')
      .then(async (response: Response) => {
        const data = await response.text()
        console.log(data)
        this.loading = false
      })
      .catch(() => {
        // Load error message
      })
  }
})
</script>
