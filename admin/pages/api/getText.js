let h1Text = "Initial H1 Text"; // Default text

export default function handler(req, res) {
  res.status(200).json({ text: h1Text });
}
