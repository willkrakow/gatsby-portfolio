export interface IProjectFrontmatter {
    date: string;
    title: string;
    stack: string[];
    slug: string;
    source?: string;
    description: string;
    livesite?: string;
    thumbnail: string;
    layout?: "project";
    publicId: string;
}
export interface IProject {
    excerpt: string;
    frontmatter: IProjectFrontmatter;
    htmlAst: string;
    timeToRead: number;
}

export interface IJob {
    name: string;
    dates: string;
    url: string;
    role: string;
    description: string[];
}

export interface IArticle {
    frontmatter: IArticleFrontmatter;
}
export interface IArticleFrontmatter {
  slug: string;
  title: string;
  date: string;
  publicId: string;
  description: string;
}