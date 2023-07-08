export const questions = [
    {
        'question': 'What will counter be equal to?',
        'answer': '5',
        'options': [
            '28',
            '4',
            '5',
            'Type into chatGPT and call it good'
        ],
        'module': "<pre><code>let counter = 0;\n" +
            "let i = 0;\n" +
            "for (let i = 0; i &lt; 5; i++) {\n" +
            "  counter += i;\n" +
            "}</code></pre>"
    },
    {
        'question': 'What should you do when you realize this?',
        'answer': 'Comment on the card that your estimate was off and ensure that the AM knows and give an updated time estimate',
        'options': [
            'Tell Jeter it’s his problem',
            'Comment on the card that your estimate was off and ensure that the AM knows and give an updated time estimate',
            'Continue to work on it and go over the time on the card and create a snowball effect for future sprints',
            'Close down the card and hope no one notices that the page isn’t done'
        ],
        'module': 'You have ran into unforeseen blockers when building out a webpage, and now the estimate is way off.'
    },
]