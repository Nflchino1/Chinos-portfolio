
import profilepicture1 from '../assets/IMG_4303.jpg'
import profilepicture2 from '../assets/IMG_4304.jpg'

const Portfolio = () => {
  return (


    <div className='line1'>

   <img src={ profilepicture1 } alt="profile picture" className='image1'/> 
        
<div className='text1'>
 <h1> WELCOME TO CHINO'S PORTFOLIO ~ </h1>

 <h3><u>ROLE ~</u></h3>

   WEB DEVELOPER
  
 <h3><u>QUALIFICATIONS ~</u> </h3> 

BACHELOR'S IN COMPUTER SCIENCE

<br/><br/>

REACT DEVELOPER

<br/><br />

WITH 2 YEARS OF EXPERIENCE
<br/>

<h3><u>CONTACT ~</u> </h3> 

+2347083768684

</div>



<div className='line3'>

<h1>PROJECTS ~</h1>

<figure>
<img src={ profilepicture2 } alt="profile picture" className='image2'/> 
<figcaption>
<button>Explore</button>
</figcaption>
</figure>

<figure>
<img src={ profilepicture2 } alt="profile picture" className='image2'/> 
<figcaption>
<button>Explore</button>
</figcaption>
</figure>

<figure>
<img src={ profilepicture2 } alt="profile picture" className='image2'/> 
<figcaption>
<button>Explore</button>
</figcaption>
</figure>

<figure>
<img src={ profilepicture2 } alt="profile picture" className='image2'/> 
<figcaption>
<button>Explore</button>
</figcaption>
</figure>

<br />


</div>





    </div>
  );
};

export default Portfolio;
