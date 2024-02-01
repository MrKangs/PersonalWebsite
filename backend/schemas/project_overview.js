export default {
    name: 'project_overview',
    title: 'Project Overview',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            description: 'Title of the project'
        },
        {
            name: 'description',
            title: 'Description',
            description: 'Description of the project',
            type: 'text'
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                layout: 'tags'
            }
        }
    ]
}