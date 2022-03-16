import React from 'react';

function Contact() {
  return (
    /* Contact me section */
    <section id="contact-me">
        <h2>Contact<br/>Me</h2>
        <div>
          <form action="">
            <div>
              <label for='name'>Name:</label>
              <input type='text' name='name' />
            </div>
            <div>
              <label for='email'>Email address:</label>
              <input type='email' name='email' />
            </div>
            <div>
              <label for='message'>Message:</label>
              <br />
              <textarea name="message" rows="5"></textarea>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
    </section>
  );
}

export default Contact;