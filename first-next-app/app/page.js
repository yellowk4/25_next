import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>
              다음 단계의 미식가를 위한
              <br /> 다음 단계의 음식
            </h1>
            <p>전 세계 음식을 맛 보고 공유하기</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community"> 커뮤니티 가입</Link>
            <Link href="/meals"> 식사 살펴보기</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>작동 방식</h2>
          <p>
            NextLevel Food는 미식가들이 자신이 좋아하는 레시피를 전 세계와 공유하는 플랫폼입니다.
            새로운 요리를 발견하고 다른 음식 애호가들과 다른 음식 애호가들과 소통할 수 있는
            곳입니다.
          </p>
          <p>
            넥스트레벨 푸드는 새로운 요리를 발견하고 다른 음식 애호가들과 소통할 수 있는 다른 음식
            애호가들과 소통할 수 있는 곳입니다.
          </p>
        </section>

        <section className={classes.section}>
          <h2>왜 넥스트레벨 푸드인가요?</h2>
          <p>
            NextLevel Food는 미식가들이 자신이 좋아하는 레시피를 전 세계와 공유하는 플랫폼입니다.
            새로운 요리를 발견하고 다른 음식 애호가들과 다른 음식 애호가들과 소통할 수 있는
            곳입니다.
          </p>
          <p>
            넥스트레벨 푸드는 새로운 요리를 발견하고 다른 음식 애호가들과 소통할 수 있는 다른 음식
            애호가들과 소통할 수 있는 곳입니다.
          </p>
        </section>
      </main>
    </>
  );
}
