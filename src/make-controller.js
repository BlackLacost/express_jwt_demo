function makeController(serviceFunc, params) {
  return async function login(req, res, next) {
    try {
      res.json(await serviceFunc(params(req)));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = makeController;
