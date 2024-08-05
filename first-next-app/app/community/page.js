import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          하나의 열정 공유: <span className={classes.highlight}>Food</span>
        </h1>
        <p>커뮤니티에 가입하고 좋아하는 레시피를 공유하세요!</p>
      </header>
      <main className={classes.main}>
        <h2>커뮤니티 특별 혜택</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="맛있는 식사" />
            <p>레시피 공유 및 발견</p>
          </li>
          <li>
            <Image src={communityIcon} alt="요리하는 많은 사람들" />
            <p>새로운 친구 및 같은 생각을 가진 사람들 찾기</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="요리 이벤트에 모인 사람들" />
            <p>특별 이벤트 참여</p>
          </li>
        </ul>
      </main>
    </>
  );
}
