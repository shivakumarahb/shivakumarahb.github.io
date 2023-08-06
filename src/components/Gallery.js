import ImageSlider from "./ImageSlider";
import './Gallery.css';

const Gallery = () => {
  const slides0 = [
    { url: "instaPic/1.jpg", title: "beach" },
    { url: "instaPic/2.jpg", title: "boat" },
    { url: "instaPic/3.jpg", title: "forest" },
    { url: "instaPic/4.jpg", title: "city" },
    { url: "instaPic/5.jpg", title: "italy" },
  ];
  const slides1 = [
    { url: "instaPic/6.jpg", title: "beach" },
    { url: "instaPic/7.jpg", title: "boat" },
    { url: "instaPic/8.jpg", title: "forest" },
    { url: "instaPic/9.jpg", title: "city" },
    { url: "instaPic/10.jpg", title: "italy" },
  ];
  const slides2 = [
    { url: "instaPic/11.jpg", title: "beach" },
    { url: "instaPic/12.jpg", title: "boat" },
    { url: "instaPic/13.jpg", title: "forest" },
    { url: "instaPic/14.jpg", title: "city" },
    { url: "instaPic/15.jpg", title: "italy" },
  ];
  const slides3 = [
    { url: "instaPic/16.jpg", title: "beach" },
    { url: "instaPic/17.jpg", title: "boat" },
    { url: "instaPic/18.jpg", title: "forest" },
    { url: "instaPic/19.jpg", title: "city" },
    { url: "instaPic/20.jpg", title: "italy" },
  ];
  const slides4 = [
    { url: "instaPic/21.jpg", title: "beach" },
    { url: "instaPic/22.jpg", title: "boat" },
    { url: "instaPic/23.jpg", title: "forest" },
    { url: "instaPic/24.jpg", title: "city" },
    { url: "instaPic/25.jpg", title: "italy" },
  ];
  const slides5 = [
    { url: "instaPic/26.jpg", title: "beach" },
    { url: "instaPic/27.jpg", title: "boat" },
    { url: "instaPic/28.jpg", title: "forest" },
    { url: "instaPic/29.jpg", title: "city" },
    { url: "instaPic/30.jpg", title: "italy" },
  ];
  const slides6 = [
    { url: "instaPic/31.jpg", title: "beach" },
    { url: "instaPic/32.jpg", title: "boat" },
    { url: "instaPic/33.jpg", title: "forest" },
    { url: "instaPic/34.jpg", title: "city" },
    { url: "instaPic/35.jpg", title: "italy" },
  ];
  const slides7 = [
    { url: "instaPic/36.jpg", title: "beach" },
    { url: "instaPic/37.jpg", title: "boat" },
    { url: "instaPic/38.jpg", title: "forest" },
    { url: "instaPic/39.jpg", title: "city" },
    { url: "instaPic/40.jpg", title: "italy" },
  ];
  const slides8 = [
    { url: "instaPic/41.jpg", title: "beach" },
    { url: "instaPic/42.jpg", title: "boat" },
    { url: "instaPic/43.jpg", title: "forest" },
    { url: "instaPic/44.jpg", title: "city" },
    { url: "instaPic/45.jpg", title: "italy" },
  ];
  const slides9 = [
    { url: "instaPic/46.jpg", title: "beach" },
    { url: "instaPic/47.jpg", title: "boat" },
    { url: "instaPic/48.jpg", title: "forest" },
    { url: "instaPic/49.jpg", title: "city" },
    { url: "instaPic/50.jpg", title: "italy" },
  ];
  const slides10 = [
    { url: "instaPic/51.jpg", title: "beach" },
    { url: "instaPic/52.jpg", title: "boat" },
    { url: "instaPic/53.jpg", title: "forest" },
    { url: "instaPic/54.jpg", title: "city" },
    { url: "instaPic/55.jpg", title: "italy" },
  ];
  const slides11 = [
    { url: "instaPic/56.jpg", title: "beach" },
    { url: "instaPic/57.jpg", title: "boat" },
    { url: "instaPic/58.jpg", title: "forest" },
    { url: "instaPic/59.jpg", title: "city" },
    { url: "instaPic/60.jpg", title: "italy" },
  ];
  const slides12 = [
    { url: "instaPic/61.jpg", title: "beach" },
    { url: "instaPic/62.jpg", title: "boat" },
    { url: "instaPic/63.jpg", title: "forest" },
    { url: "instaPic/64.jpg", title: "city" },
    { url: "instaPic/65.jpg", title: "italy" },
  ];
  const slides13 = [
    { url: "instaPic/66.jpg", title: "beach" },
    { url: "instaPic/67.jpg", title: "boat" },
    { url: "instaPic/68.jpg", title: "forest" },
    { url: "instaPic/69.jpg", title: "city" },
    { url: "instaPic/70.jpg", title: "italy" },
  ];
  const slides14 = [
    { url: "instaPic/71.jpg", title: "beach" },
    { url: "instaPic/72.jpg", title: "boat" },
    { url: "instaPic/73.jpg", title: "forest" }
  ];


  const containerStyles = {
    width: "635px",
    height: "500px",
    margin: "0 auto",
  };
  


  return (
    <div>
        <div>
      <div className="gallery1" style={containerStyles}>
        <ImageSlider slides={slides0} />
      </div>
      <div className="gallery" style={containerStyles}>
        <ImageSlider slides={slides12} />
      </div>
      <div className="gallery0" style={containerStyles}>
        <ImageSlider slides={slides14} />
      </div>
      <div className="gallery" style={containerStyles}>
        <ImageSlider slides={slides13} />
      </div>
       <div className="gallery1" style={containerStyles}>
        <ImageSlider slides={slides4} />
      </div>
      
      <div className="gallery0" style={containerStyles}>
        <ImageSlider slides={slides5} />
      </div>
      </div>
      <div>
      <div className="gallery1" style={containerStyles}>
        <ImageSlider slides={slides6} />
      </div>
      <div className="gallery" style={containerStyles}>
        <ImageSlider slides={slides7} />
      </div>
      <div className="gallery0" style={containerStyles}>
        <ImageSlider slides={slides8} />
      </div>
      <div className="gallery" style={containerStyles}>
        <ImageSlider slides={slides9} />
      </div>
       <div className="gallery1" style={containerStyles}>
        <ImageSlider slides={slides10} />
      </div>
      
      <div className="gallery0" style={containerStyles}>
        <ImageSlider slides={slides11} />
      </div>
      </div>
      <div>
      <div className="gallery" style={containerStyles}>
        <ImageSlider slides={slides1} />
      </div>
       <div className="gallery1" style={containerStyles}>
        <ImageSlider slides={slides3} />
      </div>
      
      <div className="gallery0" style={containerStyles}>
        <ImageSlider slides={slides2} />
      </div>
        
      </div>

      </div> 
  );
};

export default Gallery;
