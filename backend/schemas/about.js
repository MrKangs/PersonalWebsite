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
        name: "image1",
        title: "Image 1",
        type: "image",
        },
        {
            name: "image2",
            title: "Image 2",
            type: "image",
            },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [{type: 'block'}]
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