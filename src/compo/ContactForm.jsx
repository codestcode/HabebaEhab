import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'D:/habeba/habeba/new work of DOM/tailwindtrain/src/untils/motion.ts';
import emailjs from 'emailjs-com';
import {
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Dribbble,
  Twitter,
} from 'lucide-react';

export default function Contact() {
  const contactCardRef = useRef(null); // Ref for contact card
  const formCardRef = useRef(null); // Ref for form card
  const { initial, animate } = useScrollAnimation(contactCardRef); // Animation for contact card
  const { initial: formInitial, animate: formAnimate } = useScrollAnimation(formCardRef); // Animation for form card

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wdkpx6p', //  service ID of emailjs
        'template_pj894d9', //   template ID
        e.target,
        'Ybu7bkmEDzSw1ySER' // public key
      )
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen text-white flex items-center justify-center px-8 py-16"
    >
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Card */}
        <motion.div
          ref={contactCardRef}
          initial={initial}
          animate={animate}
          className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-white"
        >
          <h3 className="font-SpaceGrotesk   
    text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-16
    font-SpaceGrotesk animate-pulse">
            Contact Information
          </h3>

          <div className="space-y-5 text-[18px] text-white font-SpaceGrotesk">
            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-cyan-400 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-white">habebaehab165@gmail.com</p>
                <p className="text-xs text-gray-300 text-[13px]">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="text-pink-500 mt-1" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-white">Egypt</p>
                <p className="text-xs text-gray-300 text-[13px]">
                  Available for remote work worldwide
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4">
              <Calendar className="text-purple-400 mt-1" />
              <div>
                <p className="font-medium">Availability</p>
                <p className="text-white text-[15px]">
                  Currently available for intenships /full-time / freelance projects
                </p>
                <p className="text-xs text-gray-300 text-[13px]">Book a consultation call</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 text-2xl">
            <p className="text-gray-300 mb-3 font-thin ">Connect with me</p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                <Dribbble className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-gray-400 hover:text-white transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          ref={formCardRef}
          initial={formInitial}
          animate={formAnimate}
          className="space-y-4 p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm shadow-lg rounded-2xl"
        >
          <form
            onSubmit={sendEmail}
          >
            <h3 className="text-3xl font-semibold text-[#FF00FF] mb-4 font-SpaceGrotesk">
              Get In Touch
            </h3>
            <p className='text-[16px] text-gray-300  '>Have a project in mind or want to discuss potential collaborations? <br /> Fill out the form, and I'll get back to you as soon as possible.</p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="form"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="form h-32 resize-none"
            ></textarea>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
              {/* Submit Button */}
              <button
                type="submit"
                className="px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-purple-400 hover:shadow-purple-400/50 hover:shadow-2xl focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span>Send Message</span>
                  <img src="src/assets/icons8-send-50.png" alt="send" className="w-5 h-5 border-none bg-wh" />
                </div>
              </button>

              {/* Data Security*/}
              <div className="flex items-center gap-2">
                <img src="src/assets/datascure.svg" alt="data" className="w-5 h-5" />
                <span className="text-[15px] font-thin text-[#9CA3AF] font-SpaceGrotesk">
                  Your data is secure
                </span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}