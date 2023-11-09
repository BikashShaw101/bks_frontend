import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrapper, MotionWrapper } from "../../Wrapper";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { send } from "@emailjs/browser";
import "./Footer.scss";

const FooterContact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    send("service_0ra03dk", "template_2mvjku6", data, "-9UuVz-6vmajnKntg")
      .then((response) => {
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED..! ", err);
        toast.error("Something went wrong! Try Later");
      });
  };

  const formSuccess = () => {
    setLoading(false);
    setIsFormSubmitted(true);
    toast("Message Submitted");
    document.getElementById("queryForm").reset();
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <ToastContainer />
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:bikashvicky101@gmail.com" className="p-text">
            bikashvicky101@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+919330081747" className="p-text">
            +919330081747
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          id="queryForm"
          className="app__footer-form app__flex"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              name="from_name"
              placeholder="Name"
              {...register("from_name", {
                required: "Name is Required",
              })}
              autoComplete="off"
            />

            {errors.from_name?.message && (
              <p className="error">{errors.from_name?.message}</p>
            )}
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              name="reply_to"
              placeholder="Email"
              autoComplete="off"
              {...register("reply_to", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />

            {errors.reply_to?.message && (
              <p className="error">{errors.reply_to?.message}</p>
            )}
          </div>
          <div className="app__flex">
            <input
              type="number"
              className="p-text"
              min={0}
              name="from_phone"
              placeholder="Phone"
              autoComplete="off"
              {...register("from_phone", {
                required: "Phone number is Required",
                minLength: {
                  value: 8,
                  message: "Invalid phone number",
                },
              })}
            />

            {errors.from_phone?.message && (
              <p className="error">{errors.from_phone?.message}</p>
            )}
          </div>
          <div className="app__flex">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is Required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 character subjectLine",
                },
              })}
              autoComplete="off"
            />

            {errors.subject?.message && (
              <p className="error">{errors.subject?.message}</p>
            )}
          </div>
          <div className="app__flex">
            <textarea
              name="message"
              className="p-text"
              placeholder="Your message.."
              {...register("message", {
                required: "Message is Required",
                minLength: {
                  value: 20,
                  message: "Minimum 20 character subjectLine",
                },
                maxLength: {
                  value: 500,
                  message: "Minimum 500 character Allowed",
                },
              })}
              autoComplete="off"
            />

            {errors.message?.message && (
              <p className="error">{errors.message?.message}</p>
            )}
          </div>

          <button type="submit">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapper(
  MotionWrapper(FooterContact, "app__footer"),
  "contact",
  "app__whitebg"
);
