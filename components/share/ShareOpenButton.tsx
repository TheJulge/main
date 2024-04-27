import styles from '@/components/share/ShareOpenButton.module.scss';
import { useState } from 'react';
import ShareModal from '@/components/share/ShareModal';

export default function ShareOpenButton() {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.shareButton} onClick={handleOpen} type="button">
        공유하기
      </button>
      {showModal && (
        <ShareModal showModal={showModal} handleClose={handleClose} />
      )}
    </>
  );
}
