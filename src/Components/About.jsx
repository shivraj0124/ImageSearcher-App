import React from 'react'

function About() {
  return (
    <div className='container d-flex justify-content-center' style={{width:'90%',marginTop:'20px'}}>
          <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          <b>My Self</b>
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body">
                          I am Shivraj Santosh Kolwankar. I am pursuing Diploma in
                          Information Technology from Government Polytechnic Mumbai
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                          <b>App Info</b>
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body">
                          This Website will help to search different images
                          link Images of sports,nature,computer,etc and you can download it.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                          <b>Technologies Used</b>
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body">
                          This website is created using <b>React Js</b> and <b>Bootstrap</b>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About
