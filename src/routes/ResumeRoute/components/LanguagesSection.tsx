import type { FC } from 'react';
import Title from '../../../components/Title';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { Language } from '../../../types/language';
import styles from './LanguagesSection.module.scss';

export type LanguagesSectionProps = {
  languages: Language[];
};

const LanguagesSection: FC<LanguagesSectionProps> = ({ languages }) => {
  return (
    <div className={styles.Wrapper}>
      <Title icon={faEarth} title="Languages" />
      {languages.map((language) => (
        <div key={language.name} className={styles.Language}>
          <div className={styles.Flag}>{language.flag}</div>
          <div className={styles.Name}>{language.name}</div>
          <div className={styles.Description}>{language.description}</div>
        </div>
      ))}
    </div>
  );
};

export default LanguagesSection;