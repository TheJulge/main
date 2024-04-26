import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getShop } from '@/libs/shop';
import { getShopNotices } from '@/libs/notice';
import EmptyTable from '@/components/table/emptytable/EmptyTable';
import ShopDetailsCard from '@/components/shopcard/shopDetailCard/ShopDetailsCard';
import styles from './ShopDetails.module.scss';
import { shopData } from './shopDetailsMocks';
import { shopNoticesData } from './shopDetailsMocks';
import Card from '@/components/commons/card/Card';
import { postApplication } from '@/libs/application';

// export const getServerSideProps: GetServerSideProps<any> = async context => {
//   const { query } = context;
//   const shopId = query.id as string;
//   let shopData = null;
//   let shopNoticesData = null;
//   try {
//     const shopResponse = await getShop({ shopId: shopId });
//     if (shopResponse.status !== 200) {
//       throw new Error('shop data fetch error');
//     }
//     shopData = await shopResponse.data;
//   } catch (error) {
//     shopData = { error: 'fetch error' };
//   }

//   try {
//     const shopNoticesResponse = await getShopNotices({ shopId: shopId });
//     if (shopNoticesResponse.status !== 200) {
//       throw new Error('shop notices data fetch error');
//     }
//     shopNoticesData = shopNoticesResponse.data;
//   } catch (error) {
//     shopNoticesData = { error: 'fetch error' };
//   }

//   return { props: { shopId, shopData, shopNoticesData } };
// };

interface ShopDetailsProps {
  shopId: string;
  //타입정의 하기
  shopData: any;
  shopNoticesData: any;
}

export default function ShopDetails(
  {
    // shopId,
    // shopData,
    // shopNoticesData,
  }: ShopDetailsProps,
) {
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView();
  const shopId = '4490151c-5217-4157-b072-9c37b05bed47';

  useEffect(() => {
    if (inView) {
    }
  }, [inView]);
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.myShopContainer}>
          <h1>내 가게</h1>
          {shopData && <ShopDetailsCard shopId={shopId} shopData={shopData} />}
        </div>
      </main>
      <section className={styles.noticeListWrapper}>
        <div className={styles.noticesContainer}>
          {shopNoticesData.count === 0 ? (
            <>
              <h2>등록한 공고</h2>
              <EmptyTable
                text="공고를 등록해 보세요."
                buttonText="공고 등록하기"
              />
            </>
          ) : (
            <>
              <h2>내가 등록한 공고</h2>
              <div className={styles.noticeList}>
                {/* {shopNoticesData.items.map(notice => (
                  <Card noticeInfo={notice} />
                ))} */}
              </div>
              <div ref={ref} />
            </>
          )}
        </div>
      </section>
    </>
  );
}