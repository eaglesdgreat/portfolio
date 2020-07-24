import React, { useEffect } from 'react'
import author from './../static/author.jpg'

function About() {
  useEffect(() => {})

  return (
    <div>
      {/* <!-- Hero Section--> */}
      <section class="hero bg-cover bg-center mt-5" id="hero" style={{ background: author }}>
        <div class="container py-5 my-5 index-forward">
          <div class="row">
            <div class="col-md-8 text-white">
              <h2 class="h4 text-primary font-weight-normal mb-0">Hi, I am</h2>
              <h1 class="text-uppercase text-xl mb-0">f_name<span class="text-primary">l_name</span></h1>
              <h2 class="h4 font-weight-normal mb-5">jobTitle</h2>
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
    </div>
  )
}

export default About
