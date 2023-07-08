<template>
    <p class="my-4">Available commands:</p>
    <div class="space-y-3 my-4 px-6">
        <div class="flex items-center gap-2">
            <information-circle-icon class="w-5 h-5"></information-circle-icon>
            <span class="text-yellow-400">help</span>
            <span class="text-gray-400">list down all available commands</span>
        </div>
        <div class="flex items-center gap-2">
            <user-icon class="w-5 h-5"></user-icon>
            <span class="text-yellow-400">matthew</span>
            <span class="text-gray-400">Learn more about Matthew</span>
        </div>
        <div class="flex items-center gap-2">
            <user-icon class="w-5 h-5"></user-icon>
            <span class="text-yellow-400">michael</span>
            <span class="text-gray-400">Learn more about Michael</span>
        </div>
        <div class="flex items-center gap-2">
            <user-icon class="w-5 h-5"></user-icon>
            <span class="text-yellow-400">elie</span>
            <span class="text-gray-400">Learn more about Elie</span>
        </div>
        <div class="flex items-center gap-2">
            <circle-stack-icon class="w-5 h-5"></circle-stack-icon>
            <span class="text-yellow-400">workflow</span>
            <span class="text-gray-400">Show information about the development workflow</span>
        </div>
        <div class="flex items-center gap-2">
            <bell-slash-icon class="w-5 h-5"></bell-slash-icon>
            <span class="text-yellow-400">day</span>
            <span class="text-gray-400">A day in a developer's life</span>
        </div>
        <div class="flex items-center gap-2">
            <trophy-icon class="w-5 h-5"></trophy-icon>
            <span class="text-yellow-400">challenges</span>
            <span class="text-gray-400">Share developers wins and struggles</span>
        </div>

        <div class="flex items-center gap-2">
          <heart-icon class="w-5 h-5"></heart-icon>
          <span class="text-yellow-400">favorites</span>
          <span class="text-gray-400">Our favorite parts of development</span>
        </div>

        <div class="flex items-center gap-2">
            <users-icon class="w-5 h-5"></users-icon>
            <span class="text-yellow-400">teammates</span>
            <span class="text-gray-400">Discover how you can help a developer</span>
        </div>
        
        <div class="flex items-center gap-2">
          <question-mark-circle-icon class="w-5 h-5"></question-mark-circle-icon>
          <span class="text-yellow-400">trivia</span>
          <span class="text-gray-400">Test your knowledge</span>
        </div>
        
        <div class="flex items-center gap-2">
            <eye-slash-icon class="w-5 h-5"></eye-slash-icon>
            <span class="text-yellow-400">clear</span>
            <span class="text-gray-400">Clear terminal screen</span>
        </div>
    </div>
</template>

<script setup>
import { InformationCircleIcon, UserIcon, CircleStackIcon, EyeSlashIcon, BellSlashIcon, TrophyIcon, UsersIcon, HeartIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'\
</script>
