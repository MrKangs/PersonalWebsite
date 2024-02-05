export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            description: 'Title of the project'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
        },
        {
            name: 'description',
            title: 'Description',
            description: 'Description of the project',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of : [
                {
                    type: 'url'
                }
            ]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
    ]
}