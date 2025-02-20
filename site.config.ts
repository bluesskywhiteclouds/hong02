import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1f58c7e1242e446694c2bec68348d91c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'hong',

  // basic site info (required)
  name: 'hong',
  domain: 'sunnyhong.top',
  author: 'hong',

  // open graph metadata (optional)
  description: 'hong个人网站',

  // social usernames (optional)
   // twitter: 'chusight1',
  github: 'bluesskywhiteclouds',
   // zhihu: 'chusight',
  // linkedin: '',
  // instagram: 'onet2lee',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
     navigationStyle: 'custom',
     navigationLinks: [
       {
         title: 'Resume',
         pageId: '487a902ca2044b47b2467917b1589296?pvs=4'
       },
       {
         title: 'Article',
         pageId: '2b0cd479d5e948dc9f9530ab0b3e5ffb?v=40c7c98609354a95bd6a020778e36507'
       }
     ]
})
