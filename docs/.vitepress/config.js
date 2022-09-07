export default {
  lang: 'en-US',
  title: "Nick and Charlie Bots",
  description: "Heartstopper bots for Discord",
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    logo: { src: "/images/logo.png", alt: "Nick and Charlie bots" },
    editLink: {
      pattern: "https://github.com/NickAndCharlieBots/nickandcharliebots.net/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
};

function nav() {
  return [
    {
      text: "Nick Nelson",
      // link: "/nick-nelson",
      activeMatch: "/nick-nelson",
      items: [
        { text: "Nick Nelson", link: "/nick-nelson" },
        { text: "Admin Commands", link: "/nick-nelson/nick-admin-commands" },
        { text: "Generic Commands", link: "/nick-nelson/nick-generic-commands" },
      ],
    },
  ];
}
