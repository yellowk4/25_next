// our-domain.com/news/something
// 동적 페이지
import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId); // [newsId] 동적파일 이름 입력
  const newsId = router.query.newsId;

  // 백엔드 API에 요청을 보냅니다.
  // 뉴스아이디로 뉴스 항목을 가져오는 요청을 보냅니다.

  return <h1>The Dynamic Detail Page</h1>;
}

export default DetailPage;
