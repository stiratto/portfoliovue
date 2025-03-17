import ReactIcon from '@/assets/react.vue'
import TailwindIcon from '@/assets/tailwind.vue'
import AwsIcon from '@/assets/aws.vue'

const projects = [
  {
    title: 'Torrente Cabinets',
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
    title: 'Nyctara Perfumes',
    description: 'An E-Commerce for a perfume business.',
    thumbnail: '/wallhaven-4xo2jo_1920x1080.png',
    github: 'https://github.com/stiratto',
    page: 'https://github.com/stiratto',
    tags: [
      { label: 'React', icon: ReactIcon },
      { label: 'Tailwind', icon: TailwindIcon },
      { label: 'AWS', icon: AwsIcon },
    ],
  },
  {
    title: 'Outlet Zone',
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
