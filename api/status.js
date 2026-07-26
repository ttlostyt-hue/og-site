// Vercel serverless function — CommonJS on purpose (no package.json needed)
module.exports = (req, res) => {
  res.status(200).json({
    ok: true,
    edge: req.headers['x-vercel-ip-country'] || 'edge',
    time: new Date().toISOString()
  });
};
