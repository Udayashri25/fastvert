import { useEffect, useState } from 'react';

export default function Home() {
  const [h1Text, setH1Text] = useState('');

  useEffect(() => {
    const fetchText = async () => {
      const res = await fetch('/api/getText');
      const data = await res.json();
      setH1Text(data.text);
    };

    fetchText();
  }, []);

  return (
    <div>
      <h1>{h1Text}</h1>
    </div>
  );
}
