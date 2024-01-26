export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'school',
            title: 'School',
            type: 'string',
            description: 'School name'
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
            description: 'Degree'
        },
        {
            name: 'major',
            title: 'Major',
            type: 'string',
            description: 'Major'
        },
        {
            name: 'minor',
            title: 'Minor',
            type: 'string',
            description: 'Minor'
        },
        {
            name: 'gpa',
            title: 'GPA',
            type: 'number',
            description: 'GPA'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            description: 'Date of graduation'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
}