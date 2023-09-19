import { MAP_KEY } from '@/hooks/useMap';
import { INFO_KEY } from '@/hooks/userInfo';
import { Info } from '@/types/info';
import { NaverMap } from '@/types/map';
import React from 'react';
import useSWR from 'swr';
import Marker from './Marker';
const Markers = () => {
  //전역상태 정보를 활용한다.

  const { data: infos } = useSWR<Info[]>(INFO_KEY);
  // 전역상태 정보 네이버map 객체 정보 활용
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  // info 와 map 이 모두 있어야 출력한다.
  if (!map || !infos) return null;
  // 여기서 위의 과정을 통과하고 나면 Marker 들을 출력한다.
  return (
    <>
      {infos.map((item, index) => {
        // Marker 는 네이버지도 , 위경도 정보를 받는다.
        return <Marker map={map} cordinates={item.cordinates} key={index} />;
      })}
    </>
  );
};

export default Markers;
