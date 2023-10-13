import { useEffect, type FC, type ReactNode, MouseEvent, useRef } from 'react';
import styles from './Modal.module.scss';

export type ModalProps = {
  children: ReactNode;
  onClose: (e: MouseEvent) => void;
};

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const backdropRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (backdropRef.current !== null) {
      backdropRef.current.style.top = `${window.scrollY}px`;
    }

    return () => {
      document.body.style.removeProperty('overflow');
      if (backdropRef.current !== null) {
        backdropRef.current.style.removeProperty('top');
      }
    };
  }, []);
  const hndBackdropClick = (e: MouseEvent) => {
    if (e.target !== backdropRef.current) return;
    onClose(e);
  };
  return (
    <div className={styles.Backdrop} onClick={hndBackdropClick} ref={backdropRef}>
      <div className={styles.Modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
