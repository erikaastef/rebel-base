let builders = [
    {
        id: 1,
        slug: 'ideation-1',
        name: 'Ideation',
        items: [
            {
                id:'1-1',
                name: 'Problem',
                date: null,
                time: null
            },
            {
                id:'1-2',
                name: 'Solution',
                date: null,
                time: null
            },
            {
                id:'1-3',
                name: 'Team',
                date: null,
                time: null
            }
        ]
    },
    {
        id: 2,
        slug: 'validation-2',
        name: 'Validation',
        items: [
            {
                id:'2-1',
                name: 'Team',
                date: null,
                time: null
            },
            {
                id:'2-2',
                name: 'Ecosystem',
                date: null,
                time: null
            },
            {
                id:'2-3',
                name: 'Results',
                date: null,
                time: null
            }
        ]
    },
    {
        id: 3,
        slug: 'mock-3',
        name: 'Mock',
        items: [
            {
                id:'3-1',
                name: 'Mock 1',
                date: null,
                time: null
            },
            {
                id:'3-2',
                name: 'Mock 2',
                date: null,
                time: null
            },
            {
                id:'3-3',
                name: 'Mock 3',
                date: null,
                time: null
            }
        ]
    },
    {
        id: 4,
        slug: 'social-innovation-4',
        name: 'Social Innovation',
        items: [
            {
                id:'4-1',
                name: 'Problem',
                date: null,
                time: null
            },
            {
                id:'4-2',
                name: 'Solution',
                date: null,
                time: null
            },
            {
                id:'4-3',
                name: 'Team',
                date: null,
                time: null
            },
            {
                id:'4-4',
                name: 'Ecosystem',
                date: null,
                time: null
            },
            {
                id:'4-5',
                name: 'Results',
                date: null,
                time: null
            },
            {
                id:'4-6',
                name: 'Mock 1',
                date: null,
                time: null
            },
            {
                id:'4-7',
                name: 'Mock 2',
                date: null,
                time: null
            },
            {
                id:'4-8',
                name: 'Mock 3',
                date: null,
                time: null
            }
        ]
    }
]

export default function buildersTemplates(req, res) {

    if (req.method === "GET") {
        res.status(200).send({
            result: builders
        });
    }

    if (req.method === "POST") {

        builders = req.body
        res.status(200).send({
            result: builders
        });

    }
}
