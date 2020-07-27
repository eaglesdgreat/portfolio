import React, { Component } from 'react'

class Education extends Component {
  componentDidMount() { }

  render() {
    return (
      <div>
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
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et
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
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et
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
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>    
    )
  }
}

export default Education
