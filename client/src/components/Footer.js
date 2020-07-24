import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer--> */}
      <footer>
        <div class="container text-center section-padding-y">
          <div class="row px-4">
            <div class="col-lg-7 mx-auto">
              <h2 class="text-uppercase mb-0">title</h2>
              <h6 class="text-primary text-uppercase mb-0 letter-spacing-3">jobTitle</h6>
              <p class="text-muted my-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore.
              </p>
              <ul class="list-inline mb-0">
                {/* <%for(let i=0; i<social.length; i++) {%> */}
                <li class="list-inline-item">
                  <a class="social-link" target="_blank" href="<%=social[i].link%>">
                    <i class="<%=social[i].icon%>"></i>
                  </a>
                </li>
                {/* <%}%> */}
              </ul>
            </div>
          </div>
        </div>
        <div class="copyrights px-4">
          <div class="container py-4 border-top text-center">
            <p class="mb-0 text-muted py-2">&copy; All rights reserved. Template designed by 
              <a href="https://bootstraptemple.com">Bootstrap Temple</a>. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
