import { Suspense } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: '커뮤니티에서 공유하는 맛있는 요리.',
};

async function Meals() {
  console.log('Fetching meals...');
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>{' '}
        </h1>
        <p>좋아하는 레시피를 선택하고 직접 요리하세요. 쉽고 재미있어요!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">공유하기</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>로딩 중...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
