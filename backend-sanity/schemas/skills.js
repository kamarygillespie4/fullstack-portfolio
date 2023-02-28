import {defineField, defineType} from 'sanity'

export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineType({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
}
