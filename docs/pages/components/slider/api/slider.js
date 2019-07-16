export default [
    {
        props: [
            {
                name: '<code>v-model</code>',
                description: 'Binding value',
                type: 'Number, Array',
                values: '—',
                default: '—'
            },
            {
                name: '<code>min</code>',
                description: 'Minimum value',
                type: 'Number',
                values: '—',
                default: '<code>0</code>'
            },
            {
                name: '<code>max</code>',
                description: 'Maximum value',
                type: 'Number',
                values: '—',
                default: '<code>100</code>'
            },
            {
                name: '<code>step</code>',
                description: 'Step interval of ticks',
                type: 'Number',
                values: '—',
                default: '<code>1</code>'
            },
            {
                name: '<code>type</code>',
                description: 'Type (color) of the slider, optional',
                type: 'String',
                values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                <code>is-warning</code>, <code>is-danger</code>,
                and any other colors you've set in the <code>$colors</code> list on Sass`,
                default: '-'
            },
            {
                name: '<code>size</code>',
                description: 'Thickness of the slider, optional',
                type: 'String',
                values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
                default: '—'
            },
            {
                name: '<code>ticks</code>',
                description: 'Show tick marks',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>tooltip</code>',
                description: 'Show tooltip when thumb is being dragged',
                type: 'Boolean',
                values: '—',
                default: '<code>true</code>'
            },
            {
                name: '<code>tooltip-type</code>',
                description: 'The type (color) of the tootip. Defaults to <code>type</code>',
                type: 'String',
                values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                <code>is-warning</code>, <code>is-danger</code>,
                and any other colors you've set in the <code>$colors</code> list on Sass`,
                default: '<code>type</code>'
            },
            {
                name: '<code>rounded</code>',
                description: 'Rounded thumb',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>disabled</code>',
                description: 'Disable the slider',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            }
        ],
        events: [
            {
                name: '<code>input</code>',
                description: 'Triggers when value is changed',
                parameters: '<code>value: Number|Array</code>'
            },
            {
                name: '<code>change</code>',
                description: 'Triggers when value is changed after user interaction',
                parameters: '<code>value: Number|Array</code>'
            }
        ]
    }
]
