export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
        name: "title",
        title: "Title",
        type: "string",
        description: "Title of the about section"
        },
        {
        name: "image",
        title: "Image",
        type: "image",
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
        name: "links",
        title: "Links",
        type: "array",
        of: [
            {
            name: "link",
            title: "Link",
            type: "url",
            },
        ],
        },
    ],
}