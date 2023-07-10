export const questions = [
    {
        'question': 'What will counter be equal to?',
        'answer': '10',
        'options': [
            '10',
            '4',
            '5',
            'Type into chatGPT and call it good'
        ],
        'module': {
            'value': "\nlet counter = 0;\n" +
                    "let i = 0;\n" +
                "for (let i = 0; i < 5; i++) {\n" +
                "  counter += i;\n" +
            "}\n",
            'isCode': true
        }
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
        'module': {
            'value': 'You have ran into unforeseen blockers when building out a webpage, and now the estimate is way off.',
            'isCode': false
        }
    },
    {
        'question': 'What does WYSIWYG stand for',
        'answer': 'What You See Is What You Get',
        'options': [
            'Whimsical Yachts Sailing in Waves, Yearning for Glory',
            'What You See Is What You Get',
            'Wondrously Yellow Sunsets Illuminate Whimsical Yearnings of Grace',
            'Whimsical Yetis Seek Ice-Cream With Yearning Gazes'
        ],
        'module': {
            'value': 'W... Y... S... I... W... Y... G...',
            'isCode': false
        }
    },
    {
        'question': 'Who loves Tailwind the most?',
        'answer': 'Josh',
        'options': [
            'Elie',
            'Michael',
            'Matthew',
            'Josh'
        ],
        'module': {
            'value': 'Tailwindcss',
            'isCode': false
        }
    },
]
