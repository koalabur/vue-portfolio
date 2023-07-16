export { Project };

declare global {
  interface Project {
    title: string;
    image: {
      url: string;
      title: string;
      width: number;
      height: number;
    };
    imagePosition: string;
    projectColorTheme: string;
    projectDescription: any;
    tech: string[];
    websiteLink: string;
    githubLink?: string;
  }
}
