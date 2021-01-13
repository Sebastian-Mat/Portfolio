import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power3, TimelineMax } from "gsap";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  let contact = useRef(null);
  const [Animation, setAnimation] = useState(false);
  const tl = new TimelineMax();

  useEffect(() => {
    TweenMax.from(contact.current.childNodes, 1, {
      delay: 1,
      y: "100px",
      opacity: 0,
      ease: Power3.easeOut,
      stagger: {
        amount: 0.5,
      },
    });
  });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    setAnimation(true);
    setInterval(setAnimation(false), 2000)
  };

  useEffect(() => {
    if(Animation){
      tl.to(contact.current.childNodes[4], 1, {
        delay: 1,
        y: "100%",
        ease: Power3.easeOut,
        stagger: {
          amount: 0.1,
        },
      }).to(contact.current.childNodes[4], 1, {
        delay: 1,
        y: "-100%",
        ease: Power3.easeOut,
        stagger: {
          amount: 0.1,
        },
      });
    }
  })

  return (
    <div className="contact" ref={contact}>
      <h3>
        Hey! Let me a message to keep <span>in touch.</span>
      </h3>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Name"
          ref={register}
          required
        />
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
          ref={register}
          required
        />
        <input
          type="text"
          name="subject"
          autoComplete="off"
          placeholder="Subject"
          ref={register}
          required
        />
        <textarea
          type="text"
          name="message"
          autoComplete="off"
          placeholder="Message"
          ref={register}
          required
        />
        <button type="submit">SEND</button>
      </form>
      <h4>Look also my Git</h4>
      <a href="https://github.com/Sebastian-Mat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <div className="modal">
        <h1>Thanks for the message</h1>
        <h2>We will in touch!</h2>
      </div>
    </div>
  );
};

export default Contact;
