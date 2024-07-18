import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* <img src={logoImg.src} alt="음식이 담긴 접시" /> */}
          <Image src={logoImg} alt="음식이 담긴 접시" priority />{' '}
          {/*  priority : 우선순위, 빠른 로딩 */}
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">식사 둘러보기</Link>
            </li>
            <li>
              <Link href="/community">미식가 커뮤니티</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
