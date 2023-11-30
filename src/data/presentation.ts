type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "rinaldopasa97@gmail.com",
  title: "Hi, I’m Rinaldo 👋",
  // profile: "/profile.webp",
  description:
    "I am a *coffee-fueled web developer* with a knack for crafting eye-catching, sleek, and downright stunning websites. Oh, and did I mention that coffee can work wonders for your website too? ☕️",
  socials: [
    {
      label: "Github",
      link: "https://github.com/rinaldopasa",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/rinaldo_pasa/",
    },
  ],
};

export default presentation;
