export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'shortbio',
            title: 'Short Bio',
            type: 'array',
            of: [{type: 'block'}],
            description: 'Short bio of the profile'
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    name: 'link',
                    title: 'Link',
                    type: 'url',
                    validation: Rule => Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel']
                    })
                }
            ]
        }
    ]
}