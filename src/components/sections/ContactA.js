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
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactA;
