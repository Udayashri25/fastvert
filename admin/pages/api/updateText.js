let h1Text = "Initial H1 Text"; // Default text

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    h1Text = text;
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
