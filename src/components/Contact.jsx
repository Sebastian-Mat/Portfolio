import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power3, TimelineMax } from "gsap";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  let contact = useRef(null);
  const [Animation, setAnimation] = useState(false);

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
  }, []);

  useEffect(() => {
    let tl = new TimelineMax();
    if (Animation) {
      tl.to(contact.current.childNodes[2], 1, {
        delay: 1,
        y: "100%",
        ease: Power3.easeOut,
        stagger: {
          amount: 0.1,
        },
      }).to(contact.current.childNodes[2], 1, {
        delay: 1,
        y: "-100%",
        ease: Power3.easeOut,
        stagger: {
          amount: 0.1,
        },
      });
    }
  }, [Animation]);

  const send = async (form) => {
    let res = await axios.post(
      "https://sm-portfolio.000webhostapp.com/portfolio-be/index.php",
      form
    );
    console.log(res);
  };

  const onSubmit = (data, e) => {
    setAnimation(true);
    setInterval(setAnimation(false), 2000);
    setInterval(() => {
      e.target.reset();
    }, 3000);
    let form =
      "Email=" +
      data.email +
      "&Subject=" +
      data.subject +
      "&Message=" +
      data.message;
    send(form);
  };

  return (
    <div className="contact" ref={contact}>
      <h3>
        Hey! I want to learn more and have <span>more challenges, </span>
        <br /> let me know if you have <span>questions</span> or if you you want
        me to participate in a project.
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
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
        </div>
        <textarea
          type="text"
          name="message"
          autoComplete="off"
          placeholder="Message"
          ref={register}
          required
        />
        <button>SEND</button>
      </form>
      <div className="info">
        <h2>"sebastian.mat30@gmail.com"</h2>
        <h2><a href="https://github.com/Sebastian-Mat">"Sebastian-Mat"</a></h2>
      </div>
      <div className="modal">
        <h1>Thanks for the message</h1>
        <h2>We will in touch!</h2>
      </div>
    </div>
  );
};

export default Contact;
