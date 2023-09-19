// 위경도 정보를 여러 컴포넌트에서 재활용해서 관리하는 코드(hook)
// 함수를 한번만 만들고 재 렌더링이 되더라도 새로 생성안해요.
// 성능 최적화 : 초반에는 적용하지않고 테스트 중에 고려를 해보자.
import { useCallback } from 'react';
// 위경도 정보를 전역 state 로 보관한다.
// SWR 을 활용한다.
// SWR 을 활용하여 위경도 데이터를 전역에 보관(담기)한다.
// mutate: SWR에 쓴다.(저장)
import { Info } from '@/types/info';
import { mutate } from 'swr';
// SWR의 KEY는 문자열 : 문자열의 장소에 전역데이터를 보관한다.
export const INFO_KEY = '/infos';

const useInfo = () => {
  // 초기 위경도 데이터를 전달받아 swr 키 INFO_KEY에 보관한다.
  // infos 매개변수는 [[위 , 경 ] , [위 ,경] , [위 ,경]]
  //   useCallback(함수, []); 성능 최적화 때문에 함수를 다시 만들지 마.
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos);
  }, []);
  return {
    initializeInfos,
  };
};
import {} from 'swr';

export default useInfo;
