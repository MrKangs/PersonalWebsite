export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
        name: "title1",
        title: "Title 1",
        type: "string",
        description: "Title 1 of the about section"
        },
        {
          name: "title2",
          title: "Title 2",
          type: "string",
          description: "Title 2 of the about section"
          },
        {
        name: "image1",
        title: "Intro Image",
        type: "image",
        },
        {
            name: "image2",
            title: "Work Image",
            type: "image",
        },
        {
            name: "image3",
            title: "Skills Image",
            type: "image",
        },
        {
            name: "image4",
            title: "Hobbies Image",
            type: "image",
        },
        {
            name: "image5",
            title: "Goals Image",
            type: "image",
        },
        {
            name: 'intro',
            title: 'Intro',
            type: 'array',
            of: [
              {
                type: 'block',
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'}
                  ]  
              }
            ]
        },
        {
            name: 'work',
            title: 'Work',
            type: 'array',
            of: [
              {
                type: 'block',
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'}
                  ]   
              }
            ]
        },
        {
            name: 'hobbies',
            title: 'Hobbies',
            type: 'array',
            of: [
              {
                type: 'block',
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'}
                  ]   
              }
            ]
        },
        {
            name: 'goals',
            title: 'Goals',
            type: 'array',
            of: [
              {
                type: 'block',
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'}
                  ]   
              }
            ]
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
              {
                type: 'block',
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'}
                  ]   
              }
            ]
        }
    ],
}