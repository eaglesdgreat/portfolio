import React, { useEffect } from 'react'

function About() {
  useEffect(() => {})

  return (
    <div>
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
