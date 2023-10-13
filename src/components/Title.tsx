import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import styles from './Title.module.scss';

export type TitleProps = {
  icon: IconProp;
  title: string;
};

const Title: FC<TitleProps> = ({ icon, title }) => {
  return (
    <h2 className={styles.Title}><FontAwesomeIcon icon={icon} /> {title}</h2>
  );
};

export default Title;