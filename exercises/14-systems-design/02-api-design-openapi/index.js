function validate(req, schema) {
  const missing = (schema.required||[]).filter(k => !(k in req));
  if (missing.length) throw new Error('missing:'+missing.join(','));
  return true;
}
module.exports = { validate };
