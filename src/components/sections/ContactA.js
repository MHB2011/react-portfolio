import React from "react";

const ContactA = () => {
  return (
    <section id="contact-a" class="text-center py-3">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="bottom-line"></div>
        <p class="lead">
          You can reach me here or DM me on my twitter account.
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <div class="text-fields">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              class="text-input name-input"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              class="text-input subject-input"
              placeholder="Subject"
              name="subject"
            />
            <input
              type="email"
              class="email-input email-input"
              placeholder="Email"
              name="email"
            />
            <textarea
              class="text-input message-input"
              placeholder="Eneter Message"
              name="message"
            ></textarea>
          </div>
          <div class="my-2">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <button type="submit" class="btn-dark">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactA;
