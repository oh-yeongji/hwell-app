/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s - 서비스 페이지',
  openGraph: {
    type: 'website',
    site_name: '건강증진센터 위치보기 서비스',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],

  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: '7e3451bb26764fe4c4554761fb008f1d4dd1e4c8',
    },
    {
      name: 'google-site-verification',
      content: 'Ih3aa6fbB1D5IwHdfOrDMJBRIUiouRh0TuUUd1v-26E',
    },
  ],
};
