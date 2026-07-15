<script setup>
import { RouterLink } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
<template>
  <div
    class="bg-gradient-to-r from-[#0f1419] via-[#1a2a3a] to-[#0f1419] backdrop-blur-md border-b border-[#0db5df]/20 sticky top-0 z-50 shadow-lg"
  >
    <div class="flex justify-between items-center mx-4 py-3">
      <Menu as="div" class="relative inline-block text-right">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-[#0db5df]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0db5df] transition-all duration-300"
          >
            <font-awesome-icon
              :icon="['fas', 'bars']"
              class="fa-2x text-[#0db5df]"
            />
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
            class="absolute left-0 mt-2 w-48 origin-top-right divide-y divide-[#2a3f5f] rounded-lg glass-effect shadow-2xl focus:outline-none"
          >
            <div class="px-2 py-2">
              <MenuItem v-slot="{ active }">
                <RouterLink to="/movies" class="w-full">
                  <button
                    :class="[
                      active
                        ? 'bg-[#0db5df]/30 text-[#0db5df]'
                        : 'text-white hover:text-[#0db5df]',
                      'group flex w-full items-center rounded-lg px-3 py-2 text-sm transition-all duration-300',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'film']" class="mr-3" />
                    Movies
                  </button>
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink to="/tvshows" class="w-full">
                  <button
                    :class="[
                      active
                        ? 'bg-[#0db5df]/30 text-[#0db5df]'
                        : 'text-white hover:text-[#0db5df]',
                      'group flex w-full items-center rounded-lg px-3 py-2 text-sm transition-all duration-300',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'tv']" class="mr-3" />
                    TV Shows
                  </button>
                </RouterLink>
              </MenuItem>
            </div>
            <div class="px-2 py-2">
              <MenuItem v-slot="{ active }">
                <RouterLink to="/popular" class="w-full">
                  <button
                    :class="[
                      active
                        ? 'bg-[#0db5df]/30 text-[#0db5df]'
                        : 'text-white hover:text-[#0db5df]',
                      'group flex w-full items-center rounded-lg px-3 py-2 text-sm transition-all duration-300',
                    ]"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'fire']"
                      class="mr-3 text-orange-500"
                    />
                    Popular
                  </button>
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink to="/top-rated-movies" class="w-full">
                  <button
                    :class="[
                      active
                        ? 'bg-[#0db5df]/30 text-[#0db5df]'
                        : 'text-white hover:text-[#0db5df]',
                      'group flex w-full items-center rounded-lg px-3 py-2 text-sm transition-all duration-300',
                    ]"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'star']"
                      class="mr-3 text-yellow-400"
                    />
                    Top Rated
                  </button>
                </RouterLink>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <RouterLink
        to="/"
        class="cursor-pointer flex items-center hover:opacity-80 transition-opacity"
      >
        <img src="../assets/logo1.svg" class="w-32" alt="PRE Movies" />
      </RouterLink>
      <RouterLink
        to="/search"
        class="text-2xl text-[#0db5df] hover:text-[#0acbff] transition-all duration-300"
      >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </RouterLink>
    </div>
  </div>
</template>
