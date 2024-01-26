export default {
    name: 'activity',
    title: 'Activity',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Activity Title',
            type: 'string',
            description: 'Title of the activity'
        },
        {
            name: 'activityType',
            title: 'Activity Type',
            type: 'string',
            description: 'Type of activity'
        },
        {
            name: 'description',
            title: 'Activity Description',
            type: 'text',
            description: 'Description of the activity'
        },
        {
            name: 'startdate',
            title: 'Start Date',
            type: 'date',
            description: 'Start Date of the activity'
        },
        {
            name: 'enddate',
            title: 'End Date',
            type: 'date',
            description: 'End Date of the activity'
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        }
    ]
}