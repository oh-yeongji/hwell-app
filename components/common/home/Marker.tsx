import { Marker } from '@/types/map';
import React, { useEffect } from 'react';

// 필요 props 가 naver 객체, 위경도 좌표
const Marker = ({ map, cordinates }: Marker) => {
  // mount 가 되면
  useEffect(() => {
    // map 이 있다면
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(...cordinates),
        map: map,
      });
      // 꼭 해야 하는 것은 아닙니다.
      // cleanup 함수는 필요할 때 사용하세요.
      // unmount 역할 : 컴포넌트가 제거(화면에서 제거)될때
      return () => {
        // 지도 지우기
        marker?.setMap(null);
      };
    }
  }, [map]);
  return null;
};

export default Marker;
