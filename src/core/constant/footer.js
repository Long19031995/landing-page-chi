export const footerContent = {
    question: 'Commonly Asked Questions',
    contentQuestions: [
        {
            q: 'How do we calculate Storage?',
            ans: 'Peak data stored of all video assets (including live DVR) within the billing period.'
        },
        {
            q: 'How do we calculate Delivery?',
            ans: 'Total data delivered within billing period. Reset to 0 at the begining of the new billing period.'
        },
        {
            q: 'How do we calculate Encoding Minutes?',
            ans: 'Profile determine encoding minutes. Three attribute affect encoding minutes: Video Resolution, Codec, and Video Framerate. ' +
                'Each profile adds encoding minutes with the multiplier of the tree attributes. For non-encoding live stream, the duration ' +
                'of the event will be counted as encoding minutes.' +
                'Click here for an example.'
        },
        {
            q: 'What happen if I have higher usage than my plan?',
            ans: 'Usage beyond those included in the plan will be changed at the rates listed above.' + '/br' + 'For your protection' +
                'each package also has a monthly maximum. If you exceed this value in a given month, the account will be suspended util you upgrade to a higher plan or contact support.'
        }
    ]
}