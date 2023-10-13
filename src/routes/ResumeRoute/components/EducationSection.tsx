import type { FC } from 'react';
import Title from '../../../components/Title';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Education } from '../../../types/education';
import { format } from 'date-fns';
import styles from './EducationSection.module.scss';

export type EducationSectionProps = {
  education: Education[];
};

const EducationSection: FC<EducationSectionProps> = ({ education }) => {
  return (
    <div className={styles.Wrapper}>
      <Title icon={faGraduationCap} title="Education" />
      {education.map((item) => {
        const formatedStart = format(item.startDate, 'MMM yyyy');
        const formatedEnd = format(item.endDate, 'MMM yyyy');
        return (
          <div key={`${item.school}-${item.degree}`} className={styles.Item}>
            <img src={item.logo} />
            <div className={styles.Data}>
              <h3>{item.degree}</h3>
              <h4>{item.school}</h4>
              <h4>{formatedStart} - {formatedEnd}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationSection;