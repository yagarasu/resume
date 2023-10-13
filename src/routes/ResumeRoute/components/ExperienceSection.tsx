import type { FC } from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ExperienceSectionItem from './ExperienceSectionItem';
import { Experience } from '../../../types/experience';
import Title from '../../../components/Title';

export type ExperienceSectionProps = {
  items: Experience[];
};

const ExperienceSection: FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <>
      <Title icon={faBriefcase} title="Experience" />
      {items.map((item) => (
        <ExperienceSectionItem
          key={item.place}
          item={item}
        />
      ))}
    </>
  );
};

export default ExperienceSection;