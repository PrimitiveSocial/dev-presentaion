<template>
    <UseFullscreen v-slot="{ toggle, isFullscreen }" class="w-2/3 h-3/4">
        <terminal></terminal>

        <div class="fixed bottom-4 flex justify-between gap-8 w-2/3 text-sm" :class="{ hidden: isFullscreen }">
            <button @click="toggle" class="flex items-center gap-2">
                <arrows-pointing-out-icon class="w-6 h-6"></arrows-pointing-out-icon>Enter full screen
            </button>

            <div class="flex items-center gap-2">
                <div class="flex">
                    <arrow-up-icon class="h-4"></arrow-up-icon>
                    <arrow-down-icon class="h-4"></arrow-down-icon>
                </div>
                <span>Navigate through commands history</span>
            </div>
        </div>
    </UseFullscreen>
</template>

<script setup>
import Terminal from './components/Terminal.vue'
import { UseFullscreen } from '@vueuse/components'
import { ArrowsPointingOutIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid'
</script>
