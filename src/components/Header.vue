<script setup>
import { RouterLink } from 'vue-router';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
<template>
  <div class="bg-[#032541] p-4">
    <div class="flex justify-between mx-4">
      <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
        <font-awesome-icon :icon="['fas', 'bars']" class="fa-2x text-[#fffefa]" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute left-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <RouterLink to="/movies">
                <button
                :class="[
                  active ? 'bg-[#08b4e2] text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
              <font-awesome-icon 
              :icon="['fas', 'film']" class="mr-3"/>
                Movies
              </button>
              </RouterLink>
             
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <RouterLink to="tvshows">
                <button
                :class="[
                  active ? 'bg-[#08b4e2] text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
              <font-awesome-icon :icon="['fas', 'tv']" class="mr-2"/>
               TV Shows
              </button>
              </RouterLink>
              
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <RouterLink to="/popular">
                <button
                :class="[
                  active ? 'bg-[#08b4e2] text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm first-letter:uppercase',
                ]"
              >
              <font-awesome-icon :icon="['fas', 'fire']" class="mr-2 text-lg"/>
                Popular Movies
              </button>
              </RouterLink>
              
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <RouterLink to="/top-rated-movies">
                <button
                :class="[
                  active ? 'bg-[#08b4e2] text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm first-letter:uppercase',
                ]"
              >
              <font-awesome-icon :icon="['fas', 'diamond']" class="mr-2 text-lg"/>
                Top Rated Movies
              </button>
              </RouterLink>
              
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
    <RouterLink to="/" class="cursor-pointer mt-4">
      <img src="../assets/logo.svg" class="w-32" alt="" />
    </RouterLink>
     
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="text-2xl text-[#fffefa] pt-2"
      />
    </div>
  </div>
</template>