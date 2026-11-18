export type ProjectBullet = {
  text: string;
  url?: string;
};

export type Project = {
  name: string;
  role: string;
  dates: string;
  summary?: string;
  bullets: ProjectBullet[];
  url?: string;
};
