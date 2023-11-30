export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Covid-19 Tracker",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://rinaldopasa.github.io/covid-19-tracker/",
  },
  {
    title: "Restaurant Provider",
    techs: ["HTML", "CSS", "JavaScript", "PWA"],
    link: "https://lapar-app.netlify.app//",
  },
  {
    title: "Work Journals",
    techs: ["Remix", "React", "TailwindCSS", "Prisma"],
    link: "https://github.com/rinaldopasa/work-journals",
    // isComingSoon: true,
  },
];

export default projects;
