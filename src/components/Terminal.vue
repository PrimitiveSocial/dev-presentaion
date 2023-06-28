<template>
    <div class="w-2/3 h-3/4">
        <div class="p-4 shadow-lg text-sm bg-gray-800 rounded-lg leading-normal overflow-scroll h-full">

            <div class="flex items-center">
                <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
            </div>

            <div class="space-y-4 my-6">
                <div v-for="(command,index) in commandsHistory" :key="index">
                    <div class="flex">
                        <span class="text-sky-300">devs</span>
                        <span class="text-yellow-100">@primitive:~$</span>
                        <span class="ml-2 text-green-300">{{ command }}</span>
                    </div>
                    <component :is="previewCommand(command)" class="my-4"/>
                </div>

                <div class="flex">
                    <span class="text-sky-300">devs</span>
                    <span class="text-yellow-100">@primitive:~$</span>
                    <input
                        ref="cliInput"
                        v-model="command"
                        class="ml-2 text-green-500 placeholder-gray-500 bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                        placeholder="type help and hit enter to get started."
                        @keyup.enter="parseCommand"
                    />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HelpCommand from './HelpCommand.vue'

const command = ref('')
const cliInput = ref()
const commandsHistory = ref([])

const availableCommands = [
    { command: 'help', component: HelpCommand }
]

const parseCommand = () => {
    commandsHistory.value.push(command.value)
    command.value = ''
}

const previewCommand = command => {
    const foundCommand = availableCommands.find(item => item.command === command)
    return foundCommand ? foundCommand.component : null //@todo: return commmandNotFound component
}

onMounted( () => cliInput.value.focus() )
</script>
