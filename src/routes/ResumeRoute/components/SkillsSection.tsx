import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../../../components/Title';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SkillGroup } from '../../../types/skill';
import styles from './SkillsSection.module.scss';

export type SkillsSectionProps = {
  title: string;
  icon: IconProp;
  skillGroup: SkillGroup | SkillGroup[];
};

const SkillsSection: FC<SkillsSectionProps> = ({ title, icon, skillGroup }) => {
  const groups = Array.isArray(skillGroup) ? skillGroup : [skillGroup];
  return (
    <div className={styles.Wrapper}>
      <Title icon={icon} title={title} />
      {groups.map((group, i) => (
        <div key={i} className={styles.Subsection}>
          {group.name && <h3>{group.name}</h3>}
          <ul>
            {group.skills.map((skill) => (
              <li key={skill.name}>
                <FontAwesomeIcon icon={skill.icon} /> {skill.name}
                {skill.description && <span>{skill.description}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;