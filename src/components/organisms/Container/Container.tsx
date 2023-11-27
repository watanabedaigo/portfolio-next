'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/components/atom/Container/container.module.scss';

const Container = ({ children }: { children: React.ReactNode }) => {
  const [showPageNum, setShowPageNum] = useState<number>(0);
  const showPageArray = ['fv', 'about', 'skill', 'works', 'contact'];

  const pathname = usePathname();
  const isWorks = pathname.indexOf('works') !== -1;

  useEffect(() => {
    const defaultNum = Number(localStorage.getItem('showPageNum'));
    defaultNum && setShowPageNum(defaultNum);
    const prevPages = showPageArray.slice(0, defaultNum);
    for (const prevPage of prevPages) {
      const targetEle = document.getElementsByClassName(prevPage)[0];
      targetEle && targetEle.classList.add('prev');
    }
  }, [pathname]);

  const toNextNum = () => {
    if (showPageNum === showPageArray.length - 1) return;
    setShowPageNum((prev) => prev + 1);
    const targetEle = document.getElementsByClassName(
      showPageArray[showPageNum]
    )[0];
    targetEle.classList.add('prev');

    localStorage.setItem('showPageNum', String(showPageNum + 1));
  };

  const toPrevNum = () => {
    if (showPageNum === 0) return;
    setShowPageNum((prev) => prev - 1);
    const targetEle = document.getElementsByClassName(
      showPageArray[showPageNum - 1]
    )[0];
    targetEle.classList.remove('prev');

    localStorage.setItem('showPageNum', String(showPageNum - 1));
  };

  return (
    <div>
      <p>atom/Container</p>
      <div className={styles.container}>
        {!isWorks ? (
          <div>
            <p>showPageNum: {showPageNum}</p>
            <p>showPageName: {showPageArray[showPageNum]}</p>
            <div>
              <button onClick={toPrevNum}>prev</button>
            </div>
            <div>
              <button onClick={toNextNum}>next</button>
            </div>
          </div>
        ) : (
          <Link href="/">to home</Link>
        )}
      </div>
      {!isWorks && <div>{children}</div>}
    </div>
  );
};

export default Container;
