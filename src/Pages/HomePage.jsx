import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { api } from '../api';
import NavBar from '../components/NavBar';
import Footer from '../components/Rodape';
import Slider from "react-slick";  // Importa o Slider do react-slick
import { FaPlay } from "react-icons/fa6";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/HomePage.css';

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

function Home() {
  const [banners, setBanners] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    api.get('/movie/popular')
      .then(response => {
        setBanners(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar banners:', error);
      });

    api.get('/movie/popular')
      .then(response => {
        setPopularMovies(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes populares:', error);
      });

    api.get('/discover/movie', {
      params: {
        with_genres: '28', // Código de gênero para Ação
      },
    })
      .then(response => {
        setActionMovies(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes de ação:', error);
      });

    api.get('/discover/movie', {
      params: {
        with_genres: '35', // Código de gênero para Comédia
      },
    })
      .then(response => {
        setComedyMovies(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar comédias:', error);
      });
  }, []);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  // Configurações para o Slider
  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,  // Quantos filmes por vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <FaCaretRight />,
    prevArrow: <FaCaretLeft />
  };

  return (
    <>
      <Container>
        <NavBar />

        <div>
          {banners.length > 0 && (
            <div className="banner-container">
              <div className="banner">
                <button className="prev-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}><FaCaretLeft /></button>
                <img
                  src={`https://image.tmdb.org/t/p/original${banners[currentIndex].backdrop_path}`}
                  alt={banners[currentIndex].title}
                  style={{ width: '100%', height: '100%', margin: 0 }}
                />
                <button className="play-button" onClick={() => openModal(banners[currentIndex])}>
                  <FaPlay /> Play
                </button>
                <h2>{banners[currentIndex].title}</h2>
                <p>{banners[currentIndex].desc}</p>
                <button className="next-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}><FaCaretRight /></button>
              </div>
            </div>
          )}

          {/* Carrossel de filmes */}
          <section className="category-section">
            <h1>Mais Votados</h1>
            <Slider {...sliderSettings}>
              {popularMovies.map(movie => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-info">
                    <button className="play-btn" onClick={() => openModal(movie)}>
                      <FaPlay />
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
          

          <section className="category-section">
            <h1>Populares</h1>
            <Slider {...sliderSettings}>
              {actionMovies.map(movie => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-info">
                    <button className="play-btn" onClick={() => openModal(movie)}>
                      <FaPlay />
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          <section className="category-section">
            <h1>Seção Filmes</h1>
            <Slider {...sliderSettings}>
              {comedyMovies.map(movie => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-info">
                    <button className="play-btn" onClick={() => openModal(movie)}>
                      <FaPlay />
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </div>

        <Footer />

        {/* Modal */}
        {selectedMovie && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                style={{ width: '100%' }}
              />
              <p>{selectedMovie.overview}</p>
            </div>
          </div>
        )}
        
      </Container>
    </>
  );
}

export default Home;

