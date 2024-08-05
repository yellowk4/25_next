import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  //console.log('Executing'); // 서버에서 실행되기 때문에 브라우저 콘솔에 출력되지 않음

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
              <NavLink href="/meals">식사 둘러보기</NavLink>
            </li>
            <li>
              <NavLink href="/community">미식가 커뮤니티</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
