function makeProfile(name, age) {
  return {
    id: `${name.toLowerCase().replace(/[^a-z]/g, '-')}-${Date.now()}`,
    name,
    age,
    settings: {
      theme: 'dark',
      notifications: { email: true, sms: false }
    },
    tags: ['student', 'learner']
  };
}

module.exports = { makeProfile };
