import React, { useEffect, useState } from 'react';
import { cusomizedAxios as axios } from "../../../constants/customizedAxios";
import '../../../styles/contents/detail.css';

const Detail = ({ contentId }) => {
  const [details, setDetails] = useState('');

  const api_key = "0decfffb82411d82c9af75fdfaba9b34";
  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/${contentId}?api_key=${api_key}&language=ko-KR`);
        setDetails(response.data.overview);
      } catch (error) {
        console.error('영화 상세 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    fetchMovieDetails();
  }, [contentId]);

  return (
    <section className="detail-section">
      <h3 className="detail-title">콘텐츠 설명</h3>
      <div id="detailContent" className="detail-content">
        <p>
          {details}
        </p>
      </div>
    </section>
  );
};

export default Detail;