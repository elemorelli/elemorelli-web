export default function handler(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const website = req.body.website;
  const message = req.body.message;

  res.status(200).json({ name, email, phone, website, message });
}
