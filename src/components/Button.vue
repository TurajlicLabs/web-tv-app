<template>
  <button class="text-white bg-blue-700 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md bg-rose-600">
    <Loading />
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'
import Loading from './Loading'
export default defineComponent({
  name: 'Button',
  components: { Loading }
})
</script>

<style scoped>

</style>
