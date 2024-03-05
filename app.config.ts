export default defineAppConfig({
  alpine: {
    title: 'Swaymaw.app',
    description: 'Personal blog page',
    image: {
      src: '/website_home.png',
      alt: 'Home page of swaymaw portfolio website.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg",
        pathDark: "/logoDark.svg",
        alt: "swaymaw portfolio/blog logo", 
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      youtube: 'channel/UCyce1SOhdeivXw8hOZtPmhA',
      instagram: 'swayam_singhal6936',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/swayam-singhal/'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!', 
    }
  }
})
