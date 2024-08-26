import React, { useEffect, useState } from 'react';
import { api } from '../api';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

const BannerContainer = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

function Home() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    api.get('/movie/popular')
      .then(response => {
        console.log('Banners:', response.data.results);
        setBanners(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar banners:', error);
      });
  }, []);

  return (
    <Container>
      <BannerContainer>
        {banners.length > 0 && (
          <Slider {...settings}>
            {banners.map(banner => (
              <div key={banner.id}>
                <BannerImage
                  src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
                  alt={banner.title}
                />
              </div>
            ))}
          </Slider>
        )}
      </BannerContainer>
    </Container>
  );
}

export default Home;
