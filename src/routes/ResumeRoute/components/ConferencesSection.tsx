import type { FC } from 'react';
import Title from '../../../components/Title';
import { faExternalLink, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Conference } from '../../../types/conference';
import styles from './ConferencesSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ConferencesSectionProps = {
  conferences: Conference[];
};

const ConferencesSection: FC<ConferencesSectionProps> = ({ conferences }) => {
  return (
    <div className={styles.Wrapper}>
      <Title icon={faMicrophone} title="Attended Conferences" />
      <ul className={styles.List}>
        {conferences.map((conference) => (
          <li key={`${conference.name}-${conference.year}`}>{conference.name} ({conference.year}) <a href={conference.link} target="_blank">
            <FontAwesomeIcon icon={faExternalLink} />
          </a></li>
        ))}
      </ul>
    </div>
  );
};

export default ConferencesSection;