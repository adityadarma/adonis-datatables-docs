import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Adonis Datatables",
  description: "Package for easy managegement datatables",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Installation', link: '/docs/installation' },
          { text: 'Configuration', link: '/docs/configuration' }
        ]
      },
      {
        text: 'Datatables Class',
        collapsed: true,
        items: [
          { text: 'Lucid', link: '/docs/lucid' },
          { text: 'Database', link: '/docs/database' },
          { text: 'Object', link: '/docs/object' },
        ]
      },
      {
        text: 'Response',
        collapsed: true,
        items: [
          { text: 'Lucid', link: '/docs/lucid' },
          { text: 'Database', link: '/docs/database' },
          { text: 'Object', link: '/docs/object' },
        ]
      },
      {
        text: 'Column Editing',
        collapsed: true,
        items: [
          { text: 'Lucid', link: '/docs/lucid' },
          { text: 'Database', link: '/docs/database' },
          { text: 'Object', link: '/docs/object' },
        ]
      },
      {
        text: 'Row Editing',
        collapsed: true,
        items: [
          { text: 'Lucid', link: '/docs/lucid' },
          { text: 'Database', link: '/docs/database' },
          { text: 'Object', link: '/docs/object' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/adityadarma/adonis-datatables' }
    ]
  }
})
