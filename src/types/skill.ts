import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Skill = {
  name: string;
  icon: IconProp;
  description?: string;
};

export type SkillGroup = {
  name?: string;
  skills: Skill[];
}
