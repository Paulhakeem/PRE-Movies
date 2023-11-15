<script setup>
import { ref } from 'vue'
import { RouterLink } from "vue-router"

const isActive = ref(false)
const isActiveTwo = ref(false)
const isActiveThree = ref(false)

const active = () => {
  isActive.value = !isActive.value
}
const activeTwo = () => {
  isActiveTwo.value = !isActiveTwo.value
}
const activeThree = () => {
  isActiveThree.value = !isActiveThree.value
}
</script>
<template>
     <div class="trending flex gap-6 pl-20 pt-10">
      <h1
        class="text-left text-xl font-semibold text-[#032541] first-letter:uppercase"
      >
        trending
      </h1>
      <RouterLink to="/">
        <button
        @click="active"
        :class="isActive ? 'bg-[#032541] text-[#88cca5]' : 'bg-white text-[#032541]'"
        class="border border-1 border-[#032541] p-1 w-20 rounded-full first-letter:uppercase"
      >
        all
      </button>
     </RouterLink>
     <RouterLink to="/trends">
        <button 
        @click="activeTwo"
        :class="isActiveTwo ? 'bg-[#032541] text-[#88cca5]' : 'bg-white text-[#032541]'"
        class="border border-1 border-[#032541] p-1 w-20 rounded-full first-letter:uppercase"
      >
        today
      </button>
     </RouterLink>

      <RouterLink to="/week">
        <button
        @click="activeThree"
        :class="isActiveThree ? 'bg-[#032541] text-[#88cca5]' : 'bg-white text-[#032541]'"
        class="border border-1 border-[#032541] p-1 w-20 rounded-full text-[#88cca5] first-letter:uppercase"
      >
        week
      </button>
      </RouterLink>
      
    </div>
</template>