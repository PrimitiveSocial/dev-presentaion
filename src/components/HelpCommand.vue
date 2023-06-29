<template>
    <p>Available commands:</p>
    <div class="space-y-3 my-4 px-6">
        <div class="flex items-center gap-2">
            <information-circle-icon class="w-5 h-5"></information-circle-icon>
            <span class="text-green-300">help</span>
            <span class="text-gray-400">list down all available commands</span>
        </div>
        <div class="flex items-center gap-2">
            <user-icon class="w-5 h-5"></user-icon>
            <span class="text-green-300">matthew</span>
            <span class="text-gray-400">Learn more about Matthew</span>
        </div>
        <div class="flex items-center gap-2">
            <user-icon class="w-5 h-5"></user-icon>
            <span class="text-green-300">michael</span>
            <span class="text-gray-400">Learn more about Michael</span>
        </div>
        <div class="flex items-center gap-2">
            <user-icon class="w-5 h-5"></user-icon>
            <span class="text-green-300">elie</span>
            <span class="text-gray-400">Learn more about Elie</span>
        </div>
        <div class="flex items-center gap-2">
            <circle-stack-icon class="w-5 h-5"></circle-stack-icon>
            <span class="text-green-300">workflow</span>
            <span class="text-gray-400">Show information about the development workflow</span>
        </div>
        <div class="flex items-center gap-2">
            <shopping-cart-icon class="w-5 h-5"></shopping-cart-icon>
            <span class="text-green-300">toolkit</span>
            <span class="text-gray-400">A day in a developer's life</span>
        </div>
        <div class="flex items-center gap-2">
            <eye-slash-icon class="w-5 h-5"></eye-slash-icon>
            <span class="text-green-300">clear</span>
            <span class="text-gray-400">Clear terminal screen</span>
        </div>
    </div>
</template>

<script setup>
import { InformationCircleIcon, UserIcon, CircleStackIcon, SignalSlashIcon, EyeSlashIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script>
