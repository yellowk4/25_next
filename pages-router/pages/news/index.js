// our-domain.com/news
import Link from 'next/link'; // Link는 기본내보내기 모듈

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* <a href="/news/news1">News 1</a> */}
          <Link href="/news/news1">News 1</Link>
          {/* 이는 항상 브라우저가 새 요청을 보내고 새 HTML 페이지를 받는다는 신호입니다 */}
        </li>
        <li>News 2</li>
      </ul>
    </>
  );
}

export default NewsPage;
