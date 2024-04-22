import React, { useState } from 'react';
import FilterTop from './FilterTop';
import FilterLocation from './FilterLocation';
import FilterDate from './FilterDate';
import FilterAmount from './FilterAmount';
import FilterButton from './FilterButton';
import styles from './Filter.module.scss';

/**
 * filter 컴포넌트 입니다.
 * @param {boolean} props.isOpen 모달 보임 유무
 * @param {function} props.setIsOpen 모달 보임 유무 결정
 */

interface Location {
  id: number;
  name: string;
}

interface OpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filter({ isOpen, setIsOpen }: OpenProps) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [selectLocation, setSelectLocation] = useState<Location[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [money, setMoney] = useState<string>('');

  // isOpen이 true면 filter가 나옵니다.
  // selectLocation, startDate, money는 위치, 시작일, 금액의 값입니다.
  if (!isOpen) return null;
  return (
    <div className={styles.filter}>
      <div className={styles.gapBox}>
        <FilterTop setIsOpen={setIsOpen} />
        <FilterLocation
          selectLocation={selectLocation}
          setSelectLocation={setSelectLocation}
        />
      </div>
      <FilterDate startDate={startDate} setStartDate={setStartDate} />
      <div className={styles.gapContainer}>
        <FilterAmount money={money} setMoney={setMoney} />
        <FilterButton
          selectLocation={selectLocation}
          setSelectLocation={setSelectLocation}
          startDate={startDate}
          setStartDate={setStartDate}
          money={money}
          setMoney={setMoney}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}
