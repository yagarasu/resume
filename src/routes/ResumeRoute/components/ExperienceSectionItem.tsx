import type { FC } from 'react';
import styles from './ExperienceSectionItem.module.scss';
import { Experience } from '../../../types/experience';
import { format, intervalToDuration, isToday } from 'date-fns';
import Markdown from 'react-markdown';

export type ExperienceSectionItemProps = {
  item: Experience;
};

const calculateDates = (startDate: Date, endDate: Date) => {
  const formatedStart = format(startDate, 'MMM yyyy');
  const formatedEnd = format(endDate, 'MMM yyyy');
  const isPresent = isToday(endDate);
  const duration = intervalToDuration({
    start: startDate,
    end: endDate,
  });
  return {
    formatedStart,
    formatedEnd,
    isPresent,
    duration,
  };
};

const formatDuration = (duration: Duration) => {
  let format = '';
  if (duration.years) {
    format += `${duration.years} years`;
  }
  if (duration.months) {
    format += ` ${duration.months} months`;
  }
  return format;
}

const ExperienceSectionItem: FC<ExperienceSectionItemProps> = ({ item }) => {
  const { place, logo, positions } = item;
  const isSingle = positions.length === 1;
  if (isSingle) {
    const [position] = positions;
    const {
      formatedStart,
      formatedEnd,
      isPresent,
      duration,
    } = calculateDates(position.startDate, position.endDate);
    return (
      <section className={styles.Item}>
        <header>
          <img src={logo} />
          <div className={styles.ItemHeader}>
            <h3 className={styles.ItemPlace}>{place}</h3>
            <h3 className={styles.ItemPosition}>{position.position}</h3>
            <h4 className={styles.ItemTimeline}>{formatedStart} - {isPresent ? 'present' : formatedEnd}</h4>
            <h4 className={styles.ItemDuration}>{formatDuration(duration)}</h4>
          </div>
        </header>
        <main className={styles.PositionContent}>
          <Markdown>{position.description}</Markdown>
        </main>
      </section>
    );
  }
  // El rango del empleo se calcula con min/max, no con la posición del array:
  // así no importa si las posiciones vienen en orden ascendente o descendente.
  const startDates = positions.map((p) => p.startDate.getTime());
  const endDates = positions.map((p) => p.endDate.getTime());
  const overallStart = new Date(Math.min(...startDates));
  const overallEnd = new Date(Math.max(...endDates));
  const {
    formatedStart: formatedOverallStart,
    formatedEnd: formatedOverallEnd,
    isPresent,
    duration: overallDuration,
  } = calculateDates(overallStart, overallEnd);
  return (
    <section className={styles.Item}>
      <header>
        <img src={logo} />
        <div className={styles.ItemHeader}>
          <h3 className={styles.ItemPlace}>{place}</h3>
          <h4 className={styles.ItemTimeline}>{formatedOverallStart} - {isPresent ? 'present' : formatedOverallEnd}</h4>
          <h4 className={styles.ItemDuration}>{formatDuration(overallDuration)}</h4>
        </div>
      </header>
      <main>
        {positions.map((position) => {
          const {
            formatedStart,
            formatedEnd,
            isPresent,
            duration,
          } = calculateDates(position.startDate, position.endDate);
          return (
            <div key={position.position}>
              <div className={styles.PositionHeader}>
                <h3 className={styles.ItemPosition}>{position.position}</h3>
                <h4 className={styles.ItemTimeline}>{formatedStart} - {isPresent ? 'present' : formatedEnd}</h4>
                <h4 className={styles.ItemDuration}>{formatDuration(duration)}</h4>
              </div>
              <div className={styles.PositionContent}>
                <Markdown>{position.description}</Markdown>
              </div>
            </div>
          )
        })}
      </main>
    </section>
  );
};

export default ExperienceSectionItem;