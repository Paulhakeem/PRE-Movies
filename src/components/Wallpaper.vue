<script setup></script>
<template>
    <div class="bg-[url('../assets/galaxy.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full">
        <div class="pt-16 ml-8">
            <h1 class="text-6xl font-bold text-gray-200">Welcome.</h1>
            <p class="my-3 text-4xl font-semibold text-gray-200">Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
            <form class="flex flex-row mx-6 pt-14 gap-4">
                <input
                    class="bg-gray-100 border text-md w-full p-3 outline-none text-lg text-gray-600 rounded-full"
                    type="text" placeholder="Search for movies, tv shows and person...">
        
                    <button
                        class="bg-gradient-to-r from-[#a0e5d0] to-[#07bad8] hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded-full">Search</button>
            </form>
        <!-- <div class="mx-6 pt-3">
            <input type="search" placeholder="Search for movie, tv show, person...."
            class="w-full p-3 outline-none rounded-full text-lg text-gray-500">
        </div> -->
    </div>
</template>