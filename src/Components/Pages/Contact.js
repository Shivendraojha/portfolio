
import React ,{useState}from 'react';
import '../CSS/Contact.css';
import linkedin from '../asset/linkedin.png'
import github from '../asset/github.png'
import mail from '../asset/mail.png'
const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Replace '1234567890' with the recipient's phone number
    const phoneNumber = '9044331920';

    // Construct the WhatsApp deep link with a predefined message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappLink, '_blank');
  };

  
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: shivendraojha611@gmail.com</p>
        <p>Phone: +91 9044331920</p>
        <p>Location: Ayodhya, INDIA</p>
      </section>

      <section className="contact-form">
        <h2>Whatsapp ME</h2>
        <form>
          <label htmlFor="name" className='linput1' >Enter your message below </label><br/>
          <input type="text" className='linput2'  id="name" name="name" value={message} onChange={handleChange} placeholder='Enter Your Name & Message' required />
{/* 
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" value={message} onChange={handleChange} required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" value={message} onChange={handleChange} required></textarea>
          <br /> */}
          <br/>
          <button className='button' type="button" onClick={handleSendMessage} >Send Message</button>
        </form>
      </section>

      <section className="social-links">
        <h2>let's Connect Each Other</h2> 
        <div className="social-icons">
          <a href="https://github.com/Shivendraojha" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a> <a></a>
          <a href="https://www.linkedin.com/in/shivendraaa/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a> <a></a>
          <a href="mailto:shivendraojha611@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="LinkedIn" />
          </a>
          {/* Add more social media links and icons as needed */}
        </div>
      </section>
    </div>
  );
}

export default Contact;
