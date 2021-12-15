import Header  from './components/Header';
import Menu from './components/menu';
import Slider  from './components/carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import MovieReview from './components/movie-review';
import filmImages from './components/film-images';
import { newsObj } from './components/newsAPI';
import NewsBlock from './components/news-block';

function App() {
  const randomFilm1 = Math.floor(Math.random() * filmImages.length)
  const randomFilm2 = Math.floor(Math.random() * filmImages.length)
  const randomFilm3 = Math.floor(Math.random() * filmImages.length)
  return (
    <div>
    <Header />
    <Menu />
    <Slider
    image1= {filmImages[randomFilm1].imageURL}
    rating= {filmImages[randomFilm1].rating}
    image2={filmImages[randomFilm2].imageURL}
    rating= {filmImages[randomFilm2].rating}
    image3={filmImages[randomFilm3].imageURL}
    rating= {filmImages[randomFilm1].rating}
     />
     <div class="flex-container">
     <div class="flex-child-element">
     <MovieReview
       imageURL={filmImages[0].imageURL}
     />
     <MovieReview
       imageURL={filmImages[1].imageURL}
     />
     </div>
     <div class="flex-child-element">
     <NewsBlock 
    imageURL= {newsObj[0].imageURL}
    newsLink={newsObj[0].newsLink}
    title= {newsObj[0].title}
    />
    <NewsBlock 
    imageURL= {newsObj[1].imageURL}
    newsLink={newsObj[1].newsLink}
    title= {newsObj[1].title}
    />
    <NewsBlock 
    imageURL= {newsObj[2].imageURL}
    newsLink={newsObj[2].newsLink}
    title= {newsObj[2].title}
    />
    <NewsBlock 
    imageURL= {newsObj[3].imageURL}
    newsLink={newsObj[3].newsLink}
    title= {newsObj[3].title}
    />
    <NewsBlock 
    imageURL= {newsObj[4].imageURL}
    newsLink={newsObj[4].newsLink}
    title= {newsObj[4].title}
    />
     </div>
     </div>
    </div>
    );
}

export default App;

