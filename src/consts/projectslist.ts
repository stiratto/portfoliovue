import ReactIcon from '@/assets/react.vue'
import TailwindIcon from '@/assets/tailwind.vue'
import AwsIcon from '@/assets/aws.vue'

const projects = [
  {
    title: 'torrente cabinets',
    description:
      'An E-Commerce clone made for a cabinet business in Miami with an authentication system, roles system (admin, visitor and dealer). Requests for dealer and admin approve, email sending system and other.',
    thumbnail: '/torrentemockup.png',
    github: 'https://github.com/stiratto',
    page: 'https://google.com',
    tags: [
      { label: 'React', icon: ReactIcon },
      { label: 'Tailwind', icon: TailwindIcon },
      { label: 'AWS', icon: AwsIcon },
    ],
  },
  {
    title: 'nyctara perfumes',
    description: 'An E-Commerce for a perfume business.',
    thumbnail: '/nyctaramockup.png',
    github: 'https://github.com/stiratto',
    page: 'https://nyctara-perfumes.vercel.app/',
    tags: [
      { label: 'React', icon: ReactIcon },
      { label: 'Tailwind', icon: TailwindIcon },
      { label: 'AWS', icon: AwsIcon },
    ],
  },
  {
    title: 'outlet zone',
    description: 'An E-Commerce made for a refrigerator, washing machine business.',
    thumbnail: '/outletmockuptransparent.png',
    github: 'https://github.com/stiratto',
    page: 'https://github.com/stiratto',
    tags: [
      { label: 'React', icon: ReactIcon },
      { label: 'Tailwind', icon: TailwindIcon },
      { label: 'AWS', icon: AwsIcon },
    ],
  },
]

export default projects
