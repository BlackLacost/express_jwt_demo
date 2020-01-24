async function listUserService() {
  return {
    users: [
      { id: '1', login: 'Ilya', password: 'pass' },
      { id: '2', login: 'Oleg', password: 'pass' },
    ],
  };
}

module.exports = listUserService;
