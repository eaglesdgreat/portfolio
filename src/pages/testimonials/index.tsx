import "styles/pages/testimonials.scss";

import { AppWrapper, MotionWrap } from "components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IBrandProps, ITestimonialProps } from "types"
import { getBrandsAndTestimonials, urlFor } from "services";
import { useEffect, useState } from 'react';

import { motion } from "framer-motion";

const Testimonials = () => {
  const [brands, setBrands] = useState<IBrandProps[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonialProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonialData = async () => {
    const data = await getBrandsAndTestimonials();
    setBrands(data?.brands);
    setTestimonials(data?.testimonials);
  }

  useEffect(() => {
    testimonialData().catch(e => { console.log(e) });
  }, [])

  const handleClick = (current: number) => {
    setCurrentIndex(current)
  }

  const testimonial: ITestimonialProps = testimonials[currentIndex];

  return (
    <div className="app__testimonials">
      {
        testimonials.length > 0 && (
          <>
            <div className="app__testimonials--item app__flex">
              <img src={urlFor(testimonial.imageUrl) as any} alt="testimonial" />

              <div className="app__testimonials--content">
                <p className="p-text">{testimonial.feedback}</p>
                <h4 className="bold-text">{testimonial.name}</h4>
                <h5 className="p-text">{testimonial.company}</h5>
              </div>
            </div>

            <div className="app__testimonials--btn app__flex">
              <div className="app__flex" onClick={() => { handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1) }}>
                <HiChevronLeft />
              </div>
              <div className="app__flex" onClick={() => { handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1) }}>
                <HiChevronRight />
              </div>
            </div>
          </>
        )
      }

      <div className="app__testimonials--brands app__flex">
        {
          brands.map((brand: IBrandProps, i: number) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl) as any} alt={brand.name} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default AppWrapper(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
