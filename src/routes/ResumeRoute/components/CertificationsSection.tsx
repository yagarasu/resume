import type { FC } from 'react';
import Title from '../../../components/Title';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { Certification } from '../../../types/certification';
import styles from './CertificationsSection.module.scss';

export type CertificationsSectionProps = {
  certifications: Certification[];
};

const CertificationsSection: FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <div className={styles.Wrapper}>
      <Title icon={faCertificate} title="Certifications" />
      <ul className={styles.List}>
        {certifications.map((certification) => (
          <li key={certification.name}>
            <span className={styles.Name}>{certification.name}</span>
            <span className={styles.Meta}>
              {certification.issuer} · {certification.year}
              {certification.expires && ` · valid until ${certification.expires}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsSection;
