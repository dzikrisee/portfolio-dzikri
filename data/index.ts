import { Project, ProjectBase } from '@/types/project';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'All Projects', link: '/projects' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },

  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    // Pindah ke posisi atas kanan (menggantikan posisi tech stack yang lama)
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

// Data projects dengan tipe Project lengkap
export const projects: Project[] = [
  {
    // ProjectBase properties
    id: 1,
    title: 'Widemoore E-Commerce Platform',
    des: 'Full-stack e-commerce platform for Widemoore, a local Indonesian fashion brand, featuring comprehensive online shopping experience for clothing retail.',
    img: '/projects/widemoore.png',
    iconLists: ['/laravel.svg', '/tail.svg', '/livewire.svg', '/filament.svg', '/alpinejs.svg'],
    link: '',

    // Extended Project properties
    slug: 'widemoore-ecommerce',
    pinTitle: 'E-Commerce Platform',
    category: 'E-Commerce',
    status: 'Live',
    startDate: '2024',
    role: 'Full Stack Developer',
    teamSize: '1 Developer',
    gallery: ['/projects/widemoore.png', '/projects/widemoore.png', '/projects/widemoore.png'],
    features: ['Product catalog management', 'Shopping cart functionality', 'Payment integration', 'Admin dashboard', 'Responsive design'],
    challenges: ['Implementing secure payment gateway', 'Optimizing product search performance', 'Creating responsive admin interface'],
    technologies: [
      { name: 'Laravel', description: 'Backend framework' },
      { name: 'Tailwind CSS', description: 'Styling framework' },
      { name: 'MySQL', description: 'Database' },
      { name: 'Livewire', description: 'Frontend reactivity' },
    ],
    detailedDescription: 'A comprehensive e-commerce platform built for Widemoore, featuring modern design, secure payment processing, and efficient inventory management.',
    githubUrl: '',
    liveUrl: null,
  },
  {
    id: 2,
    title: 'HMTIF UNPAS Official Website',
    des: 'Official student organization website for HMTIF UNPAS 2024/2025, serving as the primary information hub for computer science students and academic activities.',
    img: '/projects/hmtif2.png',
    iconLists: ['/laravel.svg', '/tail.svg', '/livewire.svg', '/filament.svg', '/mysql.svg'],
    link: 'https://hmtif.unpas.ac.id',

    slug: 'hmtif-unpas-website',
    pinTitle: 'Organization Website',
    category: 'Organization Website',
    status: 'Live',
    startDate: '2024',
    role: 'Lead Developer',
    teamSize: '2 Developers',
    gallery: ['/projects/hmtif2.png', '/projects/hmtif2.png', '/projects/hmtif2.png'],
    features: ['Event management system', 'Member registration', 'News and announcements', 'Document repository', 'Admin panel'],
    challenges: ['Managing large member database', 'Implementing role-based access', 'Creating scalable content management'],
    technologies: [
      { name: 'Laravel', description: 'Backend framework' },
      { name: 'Filament', description: 'Admin panel' },
      { name: 'Livewire', description: 'Frontend framework' },
    ],
    detailedDescription: 'Official website for HMTIF UNPAS student organization, providing comprehensive information and services for computer science students.',
    githubUrl: '',
    liveUrl: 'https://hmtif.unpas.ac.id',
  },
  {
    id: 3,
    title: 'KostKita - Mobile App',
    des: 'Android application for boarding house property management, enabling owners to efficiently manage their rental properties, tenants, and operations.',
    img: '/projects/kostkita.png',
    iconLists: ['/androidstudio.svg', '/kotlin.svg', '/jetpackcompose.svg', '/expressjs.svg', '/sqlite.svg'],
    link: '/projects/kostkita-app',

    slug: 'kostkita-app',
    pinTitle: 'Mobile Application',
    category: 'Mobile Application',
    status: 'In Development',
    startDate: '2024',
    role: 'Mobile Developer',
    teamSize: '3 Developers',
    gallery: ['/projects/kostkita.png', '/projects/kostkita.png', '/projects/kostkita.png'],
    features: ['Property listing management', 'Tenant management', 'Payment tracking', 'Real-time notifications', 'Property analytics'],
    challenges: ['Implementing real-time sync', 'Optimizing mobile performance', 'Creating intuitive UX design'],
    technologies: [
      { name: 'Android (Java)', description: 'Native mobile development' },
      { name: 'Firebase', description: 'Backend services' },
      { name: 'MySQL', description: 'Database' },
    ],
    detailedDescription: 'A comprehensive mobile application for boarding house management, helping property owners streamline their rental operations.',
    githubUrl: '',
    liveUrl: null,
  },
  // Update untuk data Fitzone E-Commerce Platform di data/index.ts

  {
    id: 4,
    title: 'Fitzone E-Commerce Platform',
    des: 'Full-stack e-commerce platform for fitness equipment retail, providing comprehensive online shopping platform for fitness enthusiasts with modern web technologies and user-centered design.',
    img: '/projects/fitzone.png',
    iconLists: ['/laravel.svg', '/livewire.svg', '/tail.svg', '/mysql.svg', '/filament.svg'],
    link: 'https://fitzone-ecommerce.com',

    slug: 'fitzone-ecommerce',
    pinTitle: 'Fitzone E-Commerce',
    category: 'E-Commerce',
    status: 'Live',
    startDate: '2024',
    role: 'Full-Stack Web Developer',
    teamSize: '1 Developer',
    gallery: ['/projects/fitzone.png', '/projects/fitzone.png', '/projects/fitzone.png'],
    features: [
      'Comprehensive product catalog management system',
      'Categories for gym equipment, supplements, and fitness accessories',
      'Secure payment gateway integration',
      'Shopping cart functionality for seamless online transactions',
      'Admin dashboard with inventory management',
      'Responsive design for all devices',
    ],
    challenges: ['Implementing secure payment gateway integration', 'Building comprehensive product catalog system', 'Creating user-centered design for fitness enthusiasts', 'Optimizing performance for large product databases'],
    technologies: [
      { name: 'Laravel', description: 'Full-stack PHP framework for backend development' },
      { name: 'TailwindCSS', description: 'Utility-first CSS framework for modern styling' },
      { name: 'MySQL', description: 'Relational database for product and user data' },
      { name: 'Livewire', description: 'Full-stack framework for dynamic interfaces' },
      { name: 'Filament', description: 'Admin panel for content and inventory management' },
    ],
    detailedDescription:
      'FitZone E-Commerce Platform is a comprehensive online shopping solution developed for fitness and sports equipment retail in Bandung, Indonesia. The platform serves fitness enthusiasts by providing a complete online shopping experience with modern web technologies. Built using Laravel as the core framework, TailwindCSS for responsive design, MySQL for robust data management, and Livewire for dynamic user interactions. The project features a comprehensive product catalog management system with organized categories for gym equipment, supplements, and fitness accessories, secure payment gateway integration for safe transactions, and an intuitive shopping cart functionality that ensures seamless online shopping experience.',
    githubUrl: '',
    liveUrl: null,
  },
];

// Helper function untuk mendapatkan project berdasarkan slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

// Export projects sebagai ProjectBase[] untuk kompatibilitas (jika diperlukan)
export const projectsBase: ProjectBase[] = projects.map((project) => ({
  id: project.id,
  title: project.title,
  des: project.des,
  img: project.img,
  iconLists: project.iconLists,
  link: project.link,
}));

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Mobile App Dev - JSM Tech',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

// Update di data/index.ts
export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/dzikrisee', // Ganti dengan GitHub Anda
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/dzikri-setiawan-73030729b/', // Ganti dengan LinkedIn Anda
  },
  {
    id: 4,
    img: '/insta.svg', // Tambahkan Instagram jika ada
    link: 'https://instagram.com/dzikrisee',
  },
];
