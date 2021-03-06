const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "My Wiki",
  //titleDelimiter: "🦖", // Defaults to `|`
  tagline: 'Peace of Mind',
  url: 'https://worst0.github.io',
  baseUrl: '/',
  // error warn throw
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'worst0', // Usually your GitHub org/user name.
  projectName: 'worst0.github.io', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true, //默认折叠
    image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
    //algolia: {
    //  //apiKey: "5c07d8bf9c9928c4453857f6cad0420e",
    //  apiKey: "2798aff80e23307b33f6b98d019e5795",
    //  //indexName: "wiki-power",
    //  indexName: "wikiNoteSearch",

    //  // Optional: see doc section bellow
    //  contextualSearch: true,

    //  // Optional: Algolia search parameters
    //  searchParameters: {},

    //  //... other Algolia params
    //},


    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',
        lightIcon: '🌞',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        //lightIcon: '\u{1F602}',


        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },

    navbar: {
      title: "My Wiki",
      hideOnScroll: false,
      logo: {
        alt: 'Wiki logo',
        src: 'img/logo.svg',
      },
      items: [

       // {
       //   to: 'docs/',
       //   activeBasePath: 'wiki_note',
       //   label: 'Doodles🎨',
       //   position: 'left',
       // },
          //
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Document💻',
        },
        {
          to: "blog",
          label: 'Blog🤓',
          position: "left",
        },
        {
          to: '/ReadingNotes/A1.Sentence',
          //activeBasePath: 'docs',
          label: 'Reading-Book📚',
          position: 'left',
        },

        {
          to: '/Xmind_IMG/1.解题思维', 
          //activeBasePath: 'docs',
          label : "Xmind🎮",
          position: 'left',
        },

        {
          href: 'https://github.com/worst0/',
          label: 'GitHub',
          position: 'right',
        },
        //{
        //  href: "https://nav.wiki-power.com/",
        //  label: "友链 & 导航站",
        //  position: "right",
        //},
        {
          href: 'https://github.com/worst0/wiki_note',  // 如果要跳转链接则使用 herf
          label: '本站源码',
          position: 'right',
        },

      ],
    },
    footer: {
      
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },


  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl: "https://github.com/worst0/wiki_note/edit/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          //blogTitle: 'My Blog!',
          //blogDescription: 'A docusaurus powered blog!',
          blogSidebarCount: 8,
          postsPerPage: 8,
          showReadingTime: false,
          path: 'blog',
          blogSidebarTitle: 'Recent',
          editUrl: 'https://github.com/worst0/wiki_note/edit/main/',
          /*
          feedOptions: {
            type: 'all', // required. 'rss' | 'feed' | 'all'
            title: 'Power\'s Blog', // default to siteConfig.title
            description: '个人博客', // default to  `${siteConfig.title} Blog`
            copyright: 'Copyright © ${new Date().getFullYear()} Power Lin',
            language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
          */
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
