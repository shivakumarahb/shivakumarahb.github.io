import React from 'react';
import '../../App.css';
import './SignUp.css';
import ImageSlider from "./../ImageSlider";
import './../Gallery.css';


const SignUp = () => {
  const slides0 = [
    { url: "myImages/sheep.jpg", title: "beach" },
    { url: "myImages/lake.webp", title: "boat" },
    { url: "myImages/rose.webp", title: "forest" },
  ];


  const containerStyles = {
    width: "635px",
    height: "500px",
    margin: "0 auto",
  };
  

  return (
    <div>
      <div className="my_photo" style={containerStyles}>
        <ImageSlider slides={slides0} />
      </div>
      <div className='my_image_texts'>
        <h1>  </h1>
        <h1>Embracing the Beauty of Tomorrow</h1>
        <h1> ......</h1>
        <h2> Shiva - Nature Photographer and Tech Enthusiast</h2>
        <br></br>

        <h4> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;In a world filled with endless potential and boundless wonders, 
          there exists a visionary who effortlessly captures the essence of nature's brilliance while eagerly embracing the 
          limitless possibilities of the future. Meet Shiva - a name that resonates with strength, creativity, and a profound 
          connection with the natural world.</h4>
          <br></br>
          <h4>As a nature photographer, Shiva's journey began when he picked up his first camera as a young soul, and ever since, 
            he has been on a captivating expedition to preserve the beauty of the environment through his lens. With every click, 
            Shiva endeavors to immortalize the fleeting moments of sunrise-kissed meadows, mist-covered mountains, and cascading waterfalls, 
            etching them into memories that will last beyond the annals of time.
      </h4>
      <br></br>
      <h4>Through his art, Shiva has the innate ability to transport us to remote, untouched corners of the Earth, revealing the inherent harmony
         between humans and nature. He believes that photography is not just about capturing aesthetics but also serves as a medium to awaken people's 
         consciousness towards preserving the planet for future generations. With every photograph, Shiva weaves a narrative that speaks of the 
         interdependence between mankind and Mother Nature, reminding us of our responsibility as caretakers of this precious Earth.</h4>
        <br></br>
        <h4>Through his photography, Shiva spreads a message of hope, reminding us that the future is ours to shape. He sees a world where renewable energy 
          harnesses the power of the sun and wind, where AI aids in the conservation of wildlife and natural ecosystems, and where immersive virtual experiences 
          inspire environmental stewardship among the masses.With an unwavering spirit and a heart filled with reverence for nature's wonders, Shiva continues 
          to explore the world, his camera in hand and an open mind ready to embrace the unknown. He cherishes the present while looking forward to a future that 
          stands at the cusp of transformation.In a rapidly changing world, Shiva embodies the harmonious dance between the timeless beauty of nature and the infinite
           potential of technology. As he ventures forth, he inspires others to cherish the natural world, embrace innovation, and envision a future where the 
           magnificence of nature and the power of technology converge, creating a world where humanity thrives alongside the planet we call home.</h4>
      </div>




      <div className='my_image_texts'>
  <a href='https://www.instagram.com/shiva74o6/' className='my_image_text'> <h2>Shiva <i class="fa-brands fa-instagram"></i></h2> &nbsp;</a>
  <div>  <a href='https://www.instagram.com/shiva74o6/' className='my_image_text'> <h2>WILDRECKSHOTS <i class="fa-brands fa-instagram"></i></h2> </a></div>
  </div>




    </div>
  );
}

export default SignUp;
