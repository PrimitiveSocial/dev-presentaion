<template>
    <div class="my-4 px-6 flex gap-8 justify-between items-center">
        <div class="w-1/2 pr-5">
            <h3 class="capitalize mb-6 bg-gradient-to-r from-cyan-600 to-gray-800 bg-opacity-50 px-4 py-3 rounded-lg">
                Favorites
            </h3>
            <div class="space-y-4">
                <p class="flex items-center gap-4">
                    <home-modern-icon class="w-6 h-6"></home-modern-icon>
                    <span>Working at home in my own, comfortable, familiar environment</span>
                </p>
                <p class="flex gap-4 items-center">
                    <chevron-double-up-icon class="h-8"></chevron-double-up-icon>
                    <span><span class="text-amber-600">Leveling up</span> (Overcoming a challenge, refactoring code, seeing the end product, learning something new)</span>
                </p>
                <p class="flex gap-4 items-center">
                    <megaphone-icon class="w-6 h-6"></megaphone-icon>
                    <span><span class="text-blue-300">Dev meetings</span> (when we have them)</span>
                </p>
                <p class="flex gap-4 items-center">
                    <cloud-icon class="w-6 h-6"></cloud-icon>
                    <span class="text-yellow-500">Watching the dev team kick nukes into the stratosphere in kickball</span>
                </p>
            </div>
        </div>
        <div class="w-1/2 pl-5 space-y-12">
            <div class="w-full relative">
                <ul class="leading-6 p-8 bg-slate-700 bg-opacity-60 rounded-lg space-y-4 pl-8">
                    <li>Collaborating with our designers, copywriters, and AM’s</li>
                </ul>
                <span class="bg-pink-600 p-1 absolute bottom-2 right-2 text-sm">Matthew</span>
            </div>

            <div class="w-full relative">
                <ul class="leading-6 p-8 bg-slate-700 bg-opacity-60 rounded-lg space-y-4 pl-8">
                    <li>Creating tools that helps other teammates workflows and efficiency</li>
                    <li>Gitmojis!</li>
                </ul>
                <span class="bg-teal-600 p-1 absolute bottom-2 right-2 text-sm">Elie</span>
            </div>

          <div class="w-full relative">
            <ul class="leading-6 p-8 bg-slate-700 bg-opacity-60 rounded-lg space-y-4 pl-8">
              <li>Working with various team members to build something successfully.</li>
            </ul>
            <span class="bg-purple-500 p-1 absolute bottom-2 right-2 text-sm">Michael</span>
          </div>

        </div>

    </div>
</template>

<script setup>
import { HomeModernIcon, MegaphoneIcon, CloudIcon, ChevronDoubleUpIcon  } from '@heroicons/vue/24/outline'
</script>
