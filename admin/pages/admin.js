import { useState } from 'react';

export default function Admin() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  const updateText = async () => {
    const res = await fetch('/api/updateText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    if (res.ok) {
      setStatus('H1 text updated successfully!');
    } else {
      setStatus('Failed to update H1 text.');
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new H1 text"
      />
      <button onClick={updateText}>Update H1 Text</button>
      <p>{status}</p>
    </div>
  );
}
