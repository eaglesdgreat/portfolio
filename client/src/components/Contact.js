import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {})

  return (
    <div>
      {/* <!-- Contact Section --> */}
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

export default Contact
