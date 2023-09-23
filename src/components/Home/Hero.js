import hero from '../../imgs/4.png';

function Hero() {
    return (
      <div className="container col-xxl-8 px-4 pt-4 pb-2">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={hero}
              style={{ width: '80%' }}
              className="d-block mx-auto img-fluid hero-img"
              alt="Enzo's Mosaic"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center">
              Hi, I'm Enzo Cabral
            </h1>
            <p className="lead text-center">
              I build some pretty cool stuff. I love coding and solving problems,
              and I try to make the world a better place through that for the
              people I love.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
              <a
                href="mailto:oenzocabral@gmail.com"
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  