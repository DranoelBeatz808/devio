import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function ContactInfo() {
  // Sample contact details
  const contactDetails = [
    { label: 'Phone', value: '+639366270928', icon: faPhoneAlt },
    { label: 'Email', value: 'Dranoelbeatz@gmail.com', icon: null },
    { label: 'LinkedIn', value: 'linkedin.com/in/DranoelBeatz', icon: faLinkedin },
    { label: 'Facebook', value: 'facebook.com/DranoelBeatz', icon: faFacebook },
  ];

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f9f9f9',
    }}>
      <h2>Contact Information</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {contactDetails.map((contact, index) => (
          <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            {contact.icon && <FontAwesomeIcon icon={contact.icon} style={{ marginRight: '10px', color: '#007bff' }} />}
            <strong>{contact.label}:</strong>
            {contact.label === 'Email' ? (
              <a href={`mailto:${contact.value}`} style={{ marginLeft: '10px', color: '#007bff' }}>
                {contact.value}
              </a>
            ) : (
              <a href={`https://${contact.value}`} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: '#007bff' }}>
                {contact.label === 'LinkedIn' ? (
                  <>
                    {contact.value.split('/').pop()} {/* Display the last part of LinkedIn URL */}
                  </>
                ) : contact.label === 'Facebook' ? (
                  <>
                    {contact.value.split('/').pop()} {/* Display the last part of Facebook URL */}
                  </>
                ) : (
                  contact.value
                )}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
