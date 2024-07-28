import React from 'react'
import 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\CSS\\Homecss.css'
// import image1 from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\pexels-panther-1547248.jpg'
// import image2 from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\pexels-panther-1547248.jpg'
// import image3 from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\pexels-victorfreitas-791763.jpg'
// import chance from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\chance.jpg'
// import community from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\community.jpg'
// import connecting from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\connecting.jpg'
// import integration from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\integration.jpg'
// import motivation from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\motivation.jpg'
// import recomandation from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\recomandation.jpg'
function Home() {
  
  return (
    <>
    
    {/* Sliding Image  */}
    <Imageslider/>

    {/* three Cards shows   */}
    <Cards/>

    {/* this show our gallery */}
    <h1 className="ourgallery"style={{textAlign:"center",width:'100%',paddingTop:'33px'}}>Our Gallery</h1>
    <Gallery/>
    <Gallery/>

    {/* What we will provide you */}
    <h1 style={{textAlign:"center",width:'100%',paddingTop:'33px'}}>What We Provide You</h1>
    <ProvideYou/>

    
    </>
  )
}

export default Home

function Imageslider(){
  return(
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

function Cards(){
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:"3px"}}>
    <div class="col" >
    <div class="card h-100">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: "center"}}>Excerise</h5>
        <p class="card-text" style={{textAlign: "center"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: "center"}} >Nutrition</h5>
        <p class="card-text" style={{textAlign: "center"}}>This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: "center"}}>Meditation</h5>
        <p class="card-text" style={{textAlign: "center"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
    </div>
  </div>
</div>

  )
}

function Gallery(){
  return(
  <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:"3px"}} >
  <div class="col">
    <div class="card h-100">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img-top" alt="..."/>
    </div>
  </div>
</div>
  )
}

function ProvideYou(){
  return(
    <>
 <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'white'}}>Community Environment</h5>
        <p style={{color:'white'}}>Join our vibrant community to connect with like-minded individuals, share experiences, and support each other in your fitness journey..</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'white'}}>Connecting People</h5>
        <p style={{color:'white'}}>We provide a platform that fosters connections between people, allowing you to build relationships and find workout buddies or accountability partners.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  src={`${process.env.PUBLIC_URL}/Images/motivation.jpg`} class="d-block w-100" style={{'height':'1012px'}}alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'white'}}>Continuous Motivation</h5>
        <p style={{color:'white'}}>Stay motivated with our regular updates, challenges, and inspiring content designed to keep you focused and energized on your fitness goals.</p>
      </div>
    </div>
    <div class="carousel-item" >
      <img src={`${process.env.PUBLIC_URL}/Images/chance.jpg`} class="d-block w-100" style={{'height':'1012px'}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'white'}}>Creator Chance</h5>
        <p style={{color:'white'}}>As a creator, you have the chance to showcase your expertise, share your knowledge, and contribute to our community's growth.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" style={{'height':'1012px'}}alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'black'}}>Seamless Integration</h5>
        <p style={{color:'black'}}>Our platform seamlessly integrates with your lifestyle, providing you with convenient access to fitness resources, tools, and support wherever you are.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" style={{'height':'1012px'}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'white'}}>Personalized Recommendations</h5>
        <p style={{color:'white'}}>Receive personalized recommendations tailored to your preferences, goals, and fitness level, ensuring a customized experience that meets your needs.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

