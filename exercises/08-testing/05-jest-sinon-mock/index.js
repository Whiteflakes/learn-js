async function getUserName(api, id) {
  // api.fetch should return { id, name }
  const user = await api.fetch(id);
  return user.name.toUpperCase();
}

module.exports = { getUserName };
