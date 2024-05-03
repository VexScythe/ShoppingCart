import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jewel1 from '../assets/jewel1.jpg';
import jewel2 from '../assets/jewel2.jpg';
import jewel3 from '../assets/jewel3.jpg';
import jewel4 from '../assets/jewel4.jpg';
import jewel5 from '../assets/jewel5.jpg';
import jewel6 from '../assets/jewel6.jpg';
import jewel7 from '../assets/jewel7.jpg';

export function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            quam id felis placerat tincidunt. Etiam ac velit ligula. Vivamus eu
            nisi id libero consequat lacinia. Vivamus id nisl a nisl venenatis
            scelerisque. Sed vel suscipit ligula. Morbi eu neque vitae ligula
            feugiat condimentum.
          </p>

          <Slider {...settings}>
            <div>
              <img src={jewel1} alt="Pizza" className="w-[500px] h-[800px]" />
            </div>
            <div>
              <img src={jewel2} alt="Pizza" className="w-[500px] h-[800px]" />
            </div>
            <div>
              <img src={jewel3} alt="Pizza" className="w-[500px] h-[800px]" />
            </div>
            <div>
              <img src={jewel4} alt="Pizza" className="w-[500px] h-[800px]" />
            </div>
            <div>
              <img src={jewel5} alt="Pizza" className="w-[500px] h-[800px]" />
            </div>
            <div>
              <img src={jewel6} alt="Pizza" className="w-[500px] h-[800px]" />
            </div>
            <div>
              <img src={jewel7} alt="Pizza" className="w-[500px] h-[800px]" />
            </div>
          </Slider>

          <p className="text-lg mt-4">
            Nulla pharetra ligula quis libero ultricies, ac fermentum tortor
            tempus. Fusce vel tristique mauris. Cras pretium odio a diam
            vehicula, sit amet dictum libero dapibus. Vivamus lobortis lacus
            felis, vel feugiat lacus lobortis sed.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
