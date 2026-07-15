<template>
  <div
    class="bg-gradient-to-b from-[#1a1f2e] to-[#0f1419] border-t border-[#0db5df]/20 w-full pt-16 pb-8"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div class="flex flex-col items-center md:items-start">
          <img src="../assets/logo.svg" alt="PRE Movies" class="w-32 mb-4" />
          <button
            class="gradient-btn text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            <font-awesome-icon :icon="['fas', 'heart']" class="mr-2" />
            Like Us!
          </button>
        </div>

        <div>
          <h3
            class="text-lg font-bold text-[#0db5df] mb-4 uppercase tracking-wider"
          >
            The Basics
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >About TMDB</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Contact Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Support Forums</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >API</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >System Status</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="text-lg font-bold text-[#0db5df] mb-4 uppercase tracking-wider"
          >
            Get Involved
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Contribution Bible</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Add New Movie</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Add New TV Show</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="text-lg font-bold text-[#0db5df] mb-4 uppercase tracking-wider"
          >
            Community
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Guidelines</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Discussions</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-[#0db5df] transition-colors duration-300"
                >Leaderboard</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-[#2a3f5f] pt-8 text-center">
        <p class="text-gray-400 text-sm">
          Made with
          <span class="text-red-500 mx-1">
            <font-awesome-icon :icon="['fas', 'heart']" beat />
          </span>
          by <span class="text-[#0db5df] font-semibold">HakeemPaul</span>
        </p>
        <p class="text-gray-500 text-xs mt-4">
          © 2024 PRE Movies. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
