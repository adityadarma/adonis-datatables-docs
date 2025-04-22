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
          { text: 'Lucid', link: '/docs/class/lucid' },
          { text: 'Database', link: '/docs/class/database' },
          { text: 'Object', link: '/docs/class/object' },
        ]
      },
      {
        text: 'Response',
        collapsed: true,
        items: [
          { text: 'Result Response', link: '/docs/response/result' },
          { text: 'Additional Response', link: '/docs/response/additional' },
          { text: 'Only Column', link: '/docs/response/only-column' },
        ]
      },
      {
        text: 'Column Editing',
        collapsed: true,
        items: [
          { text: 'Add Column', link: '/docs/column/add-column' },
          { text: 'Edit Column', link: '/docs/column/edit-column' },
          { text: 'Remove Column', link: '/docs/column/remove-column' },
          { text: 'Index Column', link: '/docs/column/index-column' },
          { text: 'Raw Column', link: '/docs/column/raw-column' },
        ]
      },
      {
        text: 'Searching',
        collapsed: true,
        items: [
          { text: 'Manual Search', link: '/docs/searching/manual-search' },
          { text: 'Relationship', link: '/docs/searching/relationship' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/adityadarma' }
    ]
  },
  base: '/adonis-datatables-docs/'
})
