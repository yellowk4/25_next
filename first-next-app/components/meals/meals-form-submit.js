'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  // const status = useFormStatus();
  const { pending } = useFormStatus(); // 구조분해 할당을 통해 pending 변수만 사용

  return (
    <button type="submit" disabled={pending}>
      {pending ? '전송 중...' : '식사 공유'}
    </button>
  );
}
