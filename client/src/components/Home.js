// import bootstrap from 'bootstrap'
import React, { Component } from 'react'
import author from './../static/author.jpg'

class Home extends Component {
  // constructor(props) {

  // }

  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        {/* <!-- Hero Section--> */}
        <section class="hero bg-cover bg-center mt-5" id="hero" style={{ background: author }}>
          <div class="container py-5 my-5 index-forward">
            <div class="row">
              <div class="col-md-8 text-white">
                <h2 class="h4 text-primary font-weight-normal mb-0">Hi, I am</h2>
                <h1 class="text-uppercase text-xl mb-0">Emmanuel<span class="text-primary">Okponobi</span></h1>
                <h2 class="h4 font-weight-normal mb-5">Backend Developer</h2>
                <p class="text-shadow">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About Section--> */}
        <section class="bg-light" id="about">
          <div class="container">
            <header class="mb-5">
              <p class="font-weight-bold text-primary text-uppercase letter-spacing-3">Innovative solutions</p>
              <h2 class="h3 lined">To boost your creative projects</h2>
            </header>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, <strong class="text-dark">consetetur sadipscing elitr,
              </strong> sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
            <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. </p>
            <p class="text-muted mb-0">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
              et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </section>

        {/* <!-- Expertise Section --> */}
        <section id="expertise">
          <div class="container">
            <header class="mb-5 pb-4">
              <p class="font-weight-bold text-primary text-uppercase letter-spacing-3">Batman would be jealous.</p>
              <h2 class="text-uppercase lined">Expertise</h2>
            </header>
            <div class="row">
              <div class="col-md-6 mb-5">
                <h3 class="h4"><span class="text-primary mr-2">01</span>Ecommerce</h3>
                <p class="text-muted text-small ml-4 pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
              </div>
              <div class="col-md-6 mb-5">
                <h3 class="h4"><span class="text-primary mr-2">02</span>Copywriter</h3>
                <p class="text-muted text-small ml-4 pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
              </div>
              <div class="col-md-6 mb-5 mb-md-0">
                <h3 class="h4"><span class="text-primary mr-2">03</span>Web Design</h3>
                <p class="text-muted text-small ml-4 pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
              </div>
              <div class="col-md-6">
                <h3 class="h4"><span class="text-primary mr-2">04</span>Web Development</h3>
                <p class="text-muted text-small ml-4 pl-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Education Section--> */}
        <section class="bg-light" id="education">
          <div class="container">
            <header class="mb-5 pb-4">
              <p class="font-weight-bold text-primary text-uppercase letter-spacing-3">Lazy isn't in my vocabulary.</p>
              <h2 class="text-uppercase lined">Education</h2>
            </header>
            {/* <!--  Timeline --> */}
            <ul class="timeline">
              {/* <!-- Timeline item--> */}
              <li class="timeline-item ml-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row no-gutter">
                  <div class="col-lg-5 mb-4 mb-lg-0">
                    <p class="font-weight-bold mb-2 text-primary text-small">2000 - 2005 </p>
                    <h2 class="h5 mb-0 text-uppercase">Software Engineering</h2>
                    <p class="text-small mb-0">Oxford University</p><span class="small text-muted">United Kingdeom</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
              {/* <!-- Timeline item--> */}
              <li class="timeline-item ml-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row no-gutter">
                  <div class="col-lg-5 mb-4 mb-lg-0">
                    <p class="font-weight-bold mb-2 text-primary text-small">Jan 2000 - Feb 2000 </p>
                    <h2 class="h5 mb-0 text-uppercase">UI/UX Workshop.</h2>
                    <p class="text-small mb-0">IT Academy</p><span class="small text-muted">Portland, OR</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
              {/* <!-- Timeline item--> */}
              <li class="timeline-item ml-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row no-gutter">
                  <div class="col-lg-5 mb-4 mb-lg-0">
                    <p class="font-weight-bold mb-2 text-primary text-small">1998 - 1999 </p>
                    <h2 class="h5 mb-0 text-uppercase">Web Development.</h2>
                    <p class="text-small mb-0">IT Academy</p><span class="small text-muted">Portland, OR</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

      {/* <!-- Experience Section --> */}
        <section id="experience">
          <div class="container">
            <header class="mb-5 pb-4">
              <p class="font-weight-bold text-primary text-uppercase letter-spacing-3">Yes. I've been around.</p>
              <h2 class="text-uppercase lined">Experience</h2>
            </header>
            {/* <!--  Timeline --> */}
            <ul class="timeline">
              {/* <!-- Timeline item--> */}
              <li class="timeline-item ml-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row no-gutter">
                  <div class="col-lg-5 mb-4 mb-lg-0">
                    <p class="font-weight-bold mb-2 text-primary text-small">2014 – Present </p>
                    <h2 class="h5 mb-0 text-uppercase">Microsoft inc.</h2>
                    <p class="text-small mb-0">Senior Interface Designer</p><span class="small text-muted">Portland, OR</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
              {/* <!-- Timeline item--> */}
              <li class="timeline-item ml-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row no-gutter">
                  <div class="col-lg-5 mb-4 mb-lg-0">
                    <p class="font-weight-bold mb-2 text-primary text-small">2014 - 2010 </p>
                    <h2 class="h5 mb-0 text-uppercase">Facebook inc.</h2>
                    <p class="text-small mb-0">Senior Interface Designer</p><span class="small text-muted">Portland, OR</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
              {/* <!-- Timeline item--> */}
              <li class="timeline-item ml-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row no-gutter">
                  <div class="col-lg-5 mb-4 mb-lg-0">
                    <p class="font-weight-bold mb-2 text-primary text-small">2009 - 2010 </p>
                    <h2 class="h5 mb-0 text-uppercase">Google inc.</h2>
                    <p class="text-small mb-0">Senior Interface Designer</p><span class="small text-muted">Portland, OR</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

      {/* <!-- Contact Section        --> */}
        <section class="bg-light" id="contact">
          <div class="container">
            <header class="mb-5 pb-4">
              <p class="font-weight-bold text-primary text-uppercase letter-spacing-3">Call me, maybe.</p>
              <h2 class="text-uppercase lined">Contact</h2>
            </header>
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="px-4 py-5 text-center contact-item shadow-sm"><i class="fas fa-map-marker-alt fa-2x mb-4"></i>
                  <h4 class="contact-item-title h5 text-uppercase">Location</h4>
                  <p class="text-small mb-0">Portland, Oregon</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="px-4 py-5 text-center contact-item shadow-sm"><i class="fas fa-mobile fa-2x mb-4"></i>
                  <h4 class="contact-item-title h5 text-uppercase">Phone</h4>
                  <p class="text-small mb-0">534 456 886</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"><a
                  class="px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor" href="www.example.com"><i
                    class="fas fa-globe-americas fa-2x mb-4"></i>
                  <h4 class="contact-item-title h5 text-uppercase">Website</h4>
                  <p class="text-small mb-0">www.example.com</p>
                </a></div>
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"><a
                  class="px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor" href="mailto:info@example.com"><i
                    class="fas fa-envelope fa-2x mb-4"></i>
                  <h4 class="contact-item-title h5 text-uppercase">Email</h4>
                  <p class="text-small mb-0">info@example.com</p>
                </a></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
