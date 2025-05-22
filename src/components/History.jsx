import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Artworks({ startYear, historyData }) {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 8000,
  };

  return (
    <>
      <div className="history">
        <Slider {...settings}>
          {historyData[startYear] &&
            historyData[startYear].events.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
        </Slider>
      </div>
    </>
  );
}
