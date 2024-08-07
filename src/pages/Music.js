import React from 'react';

// Sample data for music tracks
const tracks = [

  { title: 'Best', artist: 'EL PRESKO & JUNPAN', url: '/music/track2.mp3' },
  { title: 'Gear up', artist: 'DBC GRIND', url: '/music/track3.mp3' },
  { title: 'Jezza', artist: 'YungBDLNG', url: '/music/track1.mp3' },
];

function Music() {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f9f9f9',
    }}>
      <h2>Top 3 Tracks I Produced</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tracks.map((track, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h3>{track.title}</h3>
            <p><em>by {track.artist}</em></p>
            <audio controls style={{ width: '100%' }}>
              <source src={track.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Music;
