module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/realwayson/",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/wayson/",
        permanent: true,
      },
      {
        source: "/anilist",
        destination: "https://anilist.co/user/wayson/",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/jaasonw",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/MwqSCKbUG3",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/realwayson",
        permanent: true,
      },
      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/fi14v4phgvmdiqk3g5t7cwsvz",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/@realwayson",
        permanent: true,
      },
      {
        source: "/donate",
        destination: "https://ko-fi.com/wayson",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCpHV53n_jlKR4gH3spN8alw",
        permanent: true,
      },
      {
        source: "/youtubealt",
        destination: "https://www.youtube.com/channel/UC5zqtuav_Mcu5Jqc5BpRhXA",
        permanent: true,
      },
      {
        source: "/venmo",
        destination:
          "https://venmo.com/code?user_id=2440537361612800300&created=1657495186",
        permanent: true,
      },
      {
        source: "/zelle",
        destination: "./zelle.png",
        permanent: true,
      },
      {
        source: "/meeting",
        destination: "https://calendly.com/wayson",
        permanent: true,
      },
      {
        source: "/threads",
        destination: "https://www.threads.com/@realwayson",
        permanent: true,
      },
      {
        source: "/bluesky",
        destination: "https://bsky.app/profile/jasonw.me",
        permanent: true,
      },
    ];
  },
};
