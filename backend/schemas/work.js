export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string',
            description: 'Company name'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            description: 'Position'
        },
        {
            name: 'startdate',
            title: 'Start Date',
            type: 'datetime',
            description: 'Start Date of employment'
        },
        {
            name: 'enddate',
            title: 'End Date',
            type: 'datetime',
            description: 'End Date of employment'
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}