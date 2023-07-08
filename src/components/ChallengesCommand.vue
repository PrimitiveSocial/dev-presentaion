<template>
    <div class="my-4 px-6 flex gap-8 justify-between">
        <div class="w-1/2 pr-5">
            <h3 class="capitalize mb-6 bg-gradient-to-r from-cyan-600 to-gray-800 bg-opacity-50 px-4 py-3 rounded-lg">
                Challenges
            </h3>
            <div class="space-y-4">
                <p class="flex gap-4">
                    <clock-icon class="w-6 h-6"></clock-icon>
                    <span>Time estimates</span>
                </p>
                <p class="flex gap-4">
                    <no-symbol-icon class="w-6 h-6"></no-symbol-icon>
                    <span>Knowing what will be a blocker</span>
                </p>
                <p class="flex gap-4">
                    <arrow-path-icon class="w-6 h-6"></arrow-path-icon>
                    <span>Knowing when to sacrifice quality for time</span>
                </p>
                <p class="flex gap-4">
                    <megaphone-icon class="w-6 h-6"></megaphone-icon>
                    <span>Translating developer talk to non developers</span>
                </p>
                <p class="flex gap-4">
                    <language-icon class="w-6 h-6"></language-icon>
                    <span class="text-orange-500">Working on old spaghetti codebase (uhum vofspace)</span>
                </p>
                <p class="flex gap-4">
                    <code-bracket-icon class="w-6 h-6"></code-bracket-icon>
                    <span>Keep up with the ever evolving tech stacks</span>
                </p>
                <p class="flex gap-4">
                    <computer-desktop-icon class="w-6 h-6 block"></computer-desktop-icon>
                    <span>Watching QA go to work</span>
                </p>
                <p class="flex gap-4">
                <users-icon class="w-6 h-6 min-w-max"></users-icon>
                <span>Handle edits and requests from clients that may require us to rebuild the structure or go in an entirely different direction.</span>
              </p>
                <p class="flex gap-4">
                <puzzle-piece-icon class="w-6 h-6 block min-w-max"></puzzle-piece-icon>
                <span>Working and building something in an unfamiliar codebase or project. It can be a challenge when working in unfamiliar territory or something that we've never done before. This part requires us to learn about the functionality, how to best implement it, and make adjustments to fit the needs of the build.</span>
              </p>

            </div>

        </div>
        <div class="w-1/2 pl-5">
            <h3 class="capitalize mb-6 bg-gradient-to-r from-cyan-600 to-gray-800 bg-opacity-20 px-4 py-3 rounded-lg">
                Favorites
            </h3>
            <ul class="leading-6 mt-8 bg-slate-700 p-4 bg-opacity-60 rounded-lg space-y-2 list-disc pl-8">
                <li>Implementing Designs (nailing a cool animation, building something that has complex functionality)</li>
                <li>Collaborating with our designers, copywriters, and AM’s</li>
                <li>Dev meetings (when we have them)</li>
                <li>Learning new stuff. There are always new codebases, frameworks, languages and resources to learn and utilize.</li>
                <li class="text-orange-500">Watching the dev team kick nukes into the stratosphere in kickball</li>
                <li> Development can be very tedious, stressful and challenging. But when when we are able to overcome these challenges and reach a final result, it's extremely rewarding. </li>
            </ul>

        </div>

    </div>
</template>

<script setup>
import { ClockIcon, NoSymbolIcon, ArrowPathIcon, MegaphoneIcon, CodeBracketIcon, ComputerDesktopIcon, LanguageIcon, UsersIcon, PuzzlePieceIcon  } from '@heroicons/vue/24/solid'
</script>
