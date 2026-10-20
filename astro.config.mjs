import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://linux-wiki.pages.dev',
  integrations: [
    starlight({
      title: 'دانشنامه لینوکس',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'فارسی',
          lang: 'fa',
          dir: 'rtl',
        },
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'شروع کار',
          items: [
            { label: 'درباره پروژه', slug: 'guides/about' },
            { label: 'راهنمای نصب لینوکس', slug: 'guides/installation' },
          ],
        },
        {
          label: 'ترفندها و بهینه‌سازی',
          items: [
            { autogenerate: { directory: 'tips' } },
          ],
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com' },
      ],
    }),
  ],
});
