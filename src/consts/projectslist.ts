import ReactIcon from '@/assets/react.vue'
import C from '@/assets/c.vue'
import TailwindIcon from '@/assets/tailwind.vue'
import Typescript from "@/assets/typescript.vue"
import AwsIcon from '@/assets/aws.vue'

const projects = [
  {
    title: 'torrente cabinets',
    description:
      'An E-Commerce clone made for a cabinet business in Miami with an authentication system, roles system (admin, visitor and dealer). Requests for dealer and admin approve, email sending system and other.',
    thumbnail: '/torrentemockup.png',
    // github: 'https://github.com/stiratto',
    server_code: 'https://github.com/stiratto/Torrente-Cabinets-Server-',
    client_code: 'https://github.com/stiratto/Torrente-Cabinets-Client',
    page: 'https://torrente-cabinets-client.vercel.app/',
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
    page: 'https://nyctara.vercel.app/',
    server_code: 'https://github.com/stiratto/nyctara-server',
    client_code: 'https://github.com/stiratto/nyctara-client',
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
    // github: 'https://github.com/stiratto',
    page: 'https://outletzone.netlify.app/',
    server_code: 'https://github.com/stiratto/outletzone-server',
    client_code: 'https://github.com/stiratto/Outlet-Zone-Client',
    tags: [
      { label: 'React', icon: ReactIcon },
      { label: 'Tailwind', icon: TailwindIcon },
      { label: 'AWS', icon: AwsIcon },
    ],
  },
  {
    title: 'c directory reader',
    description: 'A simple directory reader made in C using recursivity, just for fun',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
    github: 'https://github.com/stiratto/directory-reader-c',
  },
  {
    title: 'spotify to youtube',
    description: 'A simple Python script using Selenium for transferring albums from Spotify to Youtube Music',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/logo-spotify.svg',
    github: 'https://github.com/stiratto/spotify_to_yt',
  },

  {
    title: 'uber eats manager platform automation',
    description: 'A Puppeteer bot which purpose was for automating Uber Eats Manager reviews system but Uber didn\'t exposed client\'s number but still has useful things like logging of orders',
    thumbnail: 'https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/pages/NV3Dn6tZccTNDYiUu02GtNnJDor2/umzgS76rXF5JejXEuEWr/97696a95-a318-416d-b5a3-5d3898445414.png?_a=DATAdtfiZAA0',
    github: 'https://github.com/stiratto/uber-automatize',

  },
  {
    title: 'haxball room',
    description: 'A room for the football web minigame called Haxball, WebSockets API using FastAPI and SQLModel',
    thumbnail: 'https://www.haxball.com/Km7Kx9XL/s/haxball-big-min.png',
    github: 'https://github.com/stiratto/hax-room/tree/main',

  }
]

export default projects
