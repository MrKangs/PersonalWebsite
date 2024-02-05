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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
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
        }
    ]
}