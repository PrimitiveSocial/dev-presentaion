<template>
    <div class="my-4 px-6 flex gap-8 justify-between">
        <div class="w-1/2 pr-5">
            <h3 class="capitalize mb-6 bg-gradient-to-r from-purple-600 to-gray-800 bg-opacity-50 px-4 py-3 rounded-lg">
                Front-end
            </h3>
            <div class="space-y-2 leading-6">
                <p> It's the visual side of development. Whatever the designer creates, we convert into a visible, functioning website. </p>
                <strong class="py-2 block relative w-full">
                    <span class="font-bold text-purple-500">W</span>hat
                    <span class="font-bold text-purple-500">Y</span>ou
                    <span class="font-bold text-purple-500">S</span>ee
                    <span class="font-bold text-purple-500">I</span>s
                    <span class="font-bold text-purple-500">W</span>hat
                    <span class="font-bold text-purple-500">Y</span>ou
                    <span class="font-bold text-purple-500">G</span>et
                </strong>
              <strong class="block relative pb-3 font-bold text-purple-500"> WYSIWYG </strong>
              <p> The code we write can be viewed and inspected in the web browser, phone or tablet device. It's almost like design, but with computer code. We control the size / width of elements, where they are positioned on the page, colors, font sizes, etc. </p>
            </div>

            <ul class="leading-6 text-sm mt-8 bg-slate-700 p-4 bg-opacity-60 rounded-lg space-y-2 list-disc pl-8">
                <li>Front-end developers primarily use HTML, CSS, PHP & Javascript development languages</li>
                <li>  We also use frameworks or libraries that are built off of the above languages. VUE, React, Tailwind (uhum Josh, Jerred's favorite - thank you Jerred!) Frameworks make building things faster, easier.
                  <br>
                  <em class="py-2 block">Example: Slick Slider for sliders. </em>
                </li>

                <li> The browser's console / inspector is his best friend. This tool allows us to monitor front end code in real time. We can also make adjustments and they are visible to us as soon as we make them.</li>

                <li>Build using responsive support / multi-device support. It’s 2023 and you can expect a website visitor to be using various devices. </li>

            </ul>

          <ul class="leading-6 text-sm mt-8 bg-slate-700 p-4 bg-opacity-60 rounded-lg space-y-2  pl-6">
            <strong>From Start To Finish</strong>
            <li> 1. Get assigned project via Clickup and take a look at the assets provided to us. This is a time to do time estimates, ask for assets or ask questions.</li>
            <li> 2. Gather all assets. Images, fonts, content, design.</li>
            <li> 3. Start building the project in our code editor. We also keep in mind where the final site will be viewed. Bind, WordPress, HubSpot. </li>
            <li> 4. Finalize the build, add a userback snippet and submit to internal review. </li>
            <li> 5. Take care of edits that come through. </li>
            <li> 6. Once all of the above is completed, we can deploy the site live.</li>
          </ul>

        </div>
        <div class="w-1/2 pl-5">
            <h3 class="capitalize mb-6 bg-gradient-to-r from-purple-600 to-gray-800 bg-opacity-20 px-4 py-3 rounded-lg">
                Back-end
            </h3>
            <div class="space-y-2">
                <p>Handles all the user requests</p>
                <p>Feeds the browser with data</p>
            </div>
          <ul class="leading-6 text-sm mt-8 bg-slate-700 p-4 bg-opacity-60 rounded-lg space-y-2 list-disc pl-8">
                <li>Uses a server side programing language (PHP)</li>
                <li>Uses a framework to organize and make his coding experience more enjoyable (Laravel)</li>
                <li>Architects a database (that's where the data is stored)</li>
                <li>Develop apis and works with third party apis</li>
                <li>Handles security and authentication (writes tests, validates user input etc...)</li>
                <li>Sometimes commands the server to work while everyone is sleeping</li>
            </ul>
        </div>
    </div>
</template>
<script setup>
</script>
