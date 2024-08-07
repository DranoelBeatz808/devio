import React from 'react';
import profilePicture from '../assets/my-image.jpg'; // Adjust the path as needed
import additionalImage1 from '../assets/additional-image1.jpg'; // Adjust paths as needed
import additionalImage2 from '../assets/additional-image2.jpg'; // Adjust paths as needed
import additionalImage3 from '../assets/additional-image3.jpg'; // Adjust paths as needed

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Full viewport height
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#0000', // Optional background color
    }}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Leonard Devio Also known as DRANOEL BEATZ.<br />
        Student and Music Producer.
      </p>
      <img
        src={profilePicture}
        alt="Leonard Devio"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%', // Circle shape
          border: '2px solid #000', // Optional border
          marginBottom: '20px' // Space between profile picture and additional images
        }}
      />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px', // Space between images
        marginBottom: '30px' // Space between images and the "About Me" section
      }}>
        <img
          src={additionalImage1}
          alt="Additional 1"
          style={{
            width: '300px', // Larger width
            height: '300px', // Larger height
            border: '2px solid #000', // Optional border
          }}
        />
        <img
          src={additionalImage2}
          alt="Additional 2"
          style={{
            width: '300px', // Larger width
            height: '300px', // Larger height
            border: '2px solid #000', // Optional border
          }}
        />
        <img
          src={additionalImage3}
          alt="Additional 3"
          style={{
            width: '300px', // Larger width
            height: '300px', // Larger height
            border: '2px solid #000', // Optional border
          }}
        />
      </div>
      <div style={{
        maxWidth: '800px', // Constrain width for readability
        margin: '0 auto', // Center alignment
        textAlign: 'left', // Align text to the left for better readability
      }}>
        <h2>About Me</h2>
        <p>
          "Since 2014, I have been producing EDM music and have created over 1000 songs, with a focus on Hip-hop music since 2019. In addition, I am the founder of DBC Grind and a producer for Loco Space Records. I have also collaborated with both local and international artists."
        </p>
        <p>
         — Producer at DBC Grind, Loco Space Records
        </p>
        <p>
          Leonard is an exceptional EDM music producer with a profound dedication and passion for his art. He seamlessly blends various genres of EDM, and his love for music is evident in every production he creates. His unwavering commitment to his craft is truly inspiring, and his work continues to make waves in the world of EDM.
        </p>
      </div>
    </div>
  );
}

export default Home;
