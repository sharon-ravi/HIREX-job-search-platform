import React from 'react';
import BackButton from './BackButton'; // Import the BackButton component
import './ContactPage.css'; // Import the CSS file for styling

const ContactPage = () => {
  const handleSend = () => {
    // Prepare the WhatsApp URL with a predefined message
    const whatsappUrl = `https://wa.me/919043856464?text=${encodeURIComponent('Hello, I would like to get in touch with you regarding your services.')}`;
    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <BackButton /> {/* Include the BackButton component */}
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need further information, please feel free to reach out to us. We are here to help you and provide the support you need. Click the send button below to contact us via WhatsApp.
        </p>
        <button onClick={handleSend} className="submit-button">Send</button>
      </div>
    </div>
  );
};

export default ContactPage;