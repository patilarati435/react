import React from 'react';

const About = (x) => {
  return (
    <div>
        <h1 className='text-center'>{x.title}</h1>
      <div className="container-lg container-sm container-md" style={{ marginTop: '120px' }}>
        <div className="row text-start">
          <div className="col-12 col-sm-6 col-lg-6">
            <div>
              <p style={{ fontFamily: "'Lobster', cursive", fontSize: '40px' }}>Learn More About Our Work And Our Cultural Activities</p>
              <p className="" style={{ fontSize: '20px' }}>If you are looking for some games that children will enjoy playing in the classroom while also gaining knowledge, find below our curated list of classroom games that you can use. In addition, some of these games specifically focus on improving their language, art, and memory skills. Education is a serious business, but kids just want to have fun. So here are some fun ways to educate the children, seriously!</p>
            </div>
            <a href="schoolwebsite.html">
              <button className="btn rounded-2 text-light fw-semibold me-3" type="submit" id="btn">Read more</button>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-lg-6 text-center">
            <div className="m-5" style={{ marginLeft: '0%' }}>
              <img src="crousel-5.jpg" width="350px" className="rounded-circle border border-danger-subtle border-5 img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
