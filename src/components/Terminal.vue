<template>
    <div class="w-2/3 h-3/4">
        <div class="p-4 shadow-lg bg-gray-800 rounded-lg leading-normal overflow-scroll h-full">
            <!-- terminal header bar -->
            <div class="flex items-center">
                <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
            </div>

            <div class="space-y-4 my-6">
                <!-- Commands history and preview -->
                <div v-for="(command,index) in commandsHistory" :key="index">
                    <div class="flex">
                        <span class="text-sky-300">devs</span>
                        <span class="text-yellow-100">@primitive:~$</span>
                        <span class="ml-2 text-green-300">{{ command }}</span>
                    </div>
                    <component :is="previewCommand(command)" class="my-1"/>
                </div>

                <!-- Command input -->
                <div class="flex">
                    <span class="text-sky-300">devs</span>
                    <span class="text-yellow-100">@primitive:~$</span>
                    <input
                        ref="cliInput"
                        v-model="command"
                        class="ml-2 text-green-500 placeholder-gray-500 bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                        placeholder="type help and hit enter to get started."
                        @keyup.enter="parseCommand"
                        @keyup.up="loadPreviousCommandFromLocalStorage"
                        @keyup.down="loadNextCommandFromLocalStorage"
                    />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import HelpCommand from './HelpCommand.vue'
import ClearCommand from './ClearCommand.vue'
import NotFoundCommand from './NotFoundCommand.vue'

const command = ref('')
const cliInput = ref()
const commandsHistory = ref([])
const localStorageCommandIndex = ref(-1)

const availableCommands = [
    { command: 'help', component: HelpCommand },
    { command: 'clear', component: ClearCommand },
]

const parseCommand = () => {
    storeCommandInLocalStorage(command.value)
    command.value === 'clear' ? commandsHistory.value = [] : commandsHistory.value.push(command.value)
    command.value = ''
}

const previewCommand = command => {
    const foundCommand = availableCommands.find(item => item.command === command)
    return foundCommand ? foundCommand.component : NotFoundCommand
}

const storeCommandInLocalStorage = command => {
    const storedCommands = JSON.parse(localStorage.getItem('commandHistory')) || []
    storedCommands.push(command)
    localStorage.setItem('commandHistory', JSON.stringify(storedCommands))
}

const getLocalStorageCommands = () => {
    return JSON.parse(localStorage.getItem('commandHistory')) || []
}

const loadPreviousCommandFromLocalStorage = () => {
    const storedCommands = getLocalStorageCommands()

    if (localStorageCommandIndex.value > 0) {
        localStorageCommandIndex.value--
        command.value = storedCommands[localStorageCommandIndex.value]
    }
}

const loadNextCommandFromLocalStorage = () => {
    const storedCommands = getLocalStorageCommands()

    if (localStorageCommandIndex.value < storedCommands.length - 1) {
        localStorageCommandIndex.value++
        command.value = storedCommands[localStorageCommandIndex.value]
    } else if (localStorageCommandIndex.value === storedCommands.length - 1) {
        localStorageCommandIndex.value++
        command.value = ''
    }
}

watchEffect(() => {
    const storedCommands = getLocalStorageCommands()
    localStorageCommandIndex.value = storedCommands.length
})

onMounted( () => {
    localStorage.removeItem('commandHistory')
    cliInput.value.focus()
})
</script>
