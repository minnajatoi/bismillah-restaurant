import '../App.css';

const Hero = () => {
  return (
    <section
    id="Home"
    className="hero-section bg-dark text-white position-relative d-flex align-items-center
    justify-content-center text-center p-4"
    style={{
      backgroundImage:"url('https://t4.ftcdn.net/jpg/04/46/04/91/360_F_446049177_S5BAXHbNxnpXqpmyeBe4QBzzhZoODaar.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    > 
    {/*Overlay*/}
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>

    <div className="position-relative z-index-1">
      <h2 className="dispaly-3 fw-bold text-warning font-serif mb-4">Taste the Tradition</h2>
      <p className="fs-2 mb-4">Authentic Flavors at Bismillah Restaurant </p>
      <p className="fs-5 text-light mb-4">Located in Society Phase-1, Jamshoro</p>
      <a href="#menu" className="btn btn-warning text-dark fw-bold py-3 px-5 rounded-pill fs-5 shadow-lg">View Our Menu</a>
    </div>
    </section>
  );
};

export default Hero;