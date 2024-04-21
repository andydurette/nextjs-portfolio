"use client";
import React from "react";
import Footer from "./Footer";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact">
      <div id="contact-grid">
        <h2>CONTACT ME</h2>
        <h3 className="section-heading">
          Together let&lsquo;s whip up something great!
        </h3>

        <div className="contact-item">
          <div>
            <Image
              src="/img/social-icons/mixer.svg"
              width={200}
              height={200}
              alt="Picture of a mixer"
            />
          </div>
          <div id="contact-info">
            <p>
              Feel free to look through my professional profiles and social
              media links below. Please contact me if you enjoy my work and feel
              I would be an asset to your team or an ideal candidate to work on
              your next project.
            </p>
            <div className="contact-item">
              <Image
                src="/img/logos/email.svg"
                width={25}
                height={25}
                alt="Email Icon"
              />
              <p>andy@andydurette.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
