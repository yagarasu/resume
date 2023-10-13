import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC, MouseEvent } from 'react';
import styles from './DownloadResumeButton.module.scss';

export type DownloadResumeButtonProps = {
  onClick: (e: MouseEvent) => void;
};

const DownloadResumeButton: FC<DownloadResumeButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.DownloadResumeButton} onClick={onClick} title="Download Resume">
      <FontAwesomeIcon icon={faDownload} size="3x" />
    </button>
  );
};

export default DownloadResumeButton;