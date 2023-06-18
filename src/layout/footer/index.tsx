import "styles/layout/footer.scss";

import { AppWrapper, MotionWrap } from "components";
import { ChangeEvent, MouseEvent, useState } from 'react';

import { IFooterFormData } from "types"
import { createContact } from "services";
import images from "constants/images";

const Footer = () => {
  const [formData, setFormData] = useState<IFooterFormData>({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setLoading(true);

    const contact = {
      _type: "contacts",
      name,
      email,
      message
    }

    const res = await createContact(contact);

    if (res !== null) {
      setLoading(false);
      setIsFormSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 5000)
    }
  }

  const { name, email, message } = formData;

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer--cards">
        <div className="app__footer--card">
          <img src={images.email} alt="email" />
          <a href="mailto:okponobiemmanuel@gmail.com" target="_blank" rel="noreferrer noopener" className="p-text">
            okponobiemmanuel@gmail.com
          </a>
        </div>

        <div className="app__footer--card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +2347033390533" target="_blank" rel="noreferrer noopener" className="p-text">
            +2347033390533
          </a>
        </div>
      </div>

      {
        !isFormSubmitted
          ? <div className="app__footer--form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>

            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>

            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>

            <button type="button" className="p-text" onClick={handleSubmit as any} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          : <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
      }
    </>
  )
}

// export default Footer;
export default AppWrapper(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
