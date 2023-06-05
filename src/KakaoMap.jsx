import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function KakaoMap() {
  // uploading이랑 같은 역할
  useEffect(
    () => {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      //   const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
      //   // 마커가 표시될 위치입니다
      //   const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

      //   // 마커를 생성합니다
      //   const marker = new window.kakao.maps.Marker({
      //     position: markerPosition,
      //   });

      //   // 마커가 지도 위에 표시되도록 설정합니다
      //   marker.setMap(map);

      // 지도를 생성합니다
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new window.kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch("대구광역시 동구 용계동 1018-1", function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new window.kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">준범 출몰지</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    },
    [
      // 변수를 적으면 변수가 바뀔 때 마다 업로드한다.
    ]
  );

  return (
    // 지도를 표시할 div 입니다.
    // div는 Box랑 완전히 똑같지는 않다. as="div"를 적으면 똑같아진다.
    <Box as="div" w="full" h="300px" id="map"></Box>
  );
}
