import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import { notFound } from 'next/navigation';

// 동적 메타데이터 추가
export async function generateMetadata({ params }) {
  // generateMetadata : 예약된 이름의 비동기 함수 사용
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);

  //Meal이 undefined이고 찾지 못하였을때
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
