function getUser(api, id) {
  return api.fetch(id).then(u => u.name);
}
module.exports = { getUser };
