export default {
  title: "Nick and Charlie Bots",
  description: "Heartstopper bots for Discord",
  themeConfig: {
    nav: nav(),
    logo: { src: "/assets/logo.png", alt: "Nick and Charlie bots" },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
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
