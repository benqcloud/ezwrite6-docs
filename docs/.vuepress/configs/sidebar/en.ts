import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/features/': [
    {
      text: 'Features',
      children: [
        '/features/README.md',
      ],
    },
  ],
  '/faqs/': [
    {
      text: 'FAQs',
      children: [
        '/faqs/README.md',
      ],
    },
  ],
}