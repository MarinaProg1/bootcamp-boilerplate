const respuestaEstandar = require('../utils/respuestaEstandar');

const login = (req, res) => {
  const { email, password } = req.body;

  const USER_VALIDO = "admin@salita.com";
  const PASS_VALIDA = "1234";
  const HARDCODED_TOKEN = "token_falso_123";

  if (email === USER_VALIDO && password === PASS_VALIDA) {
    return respuestaEstandar(res, 200, true, 'Autenticación exitosa', { token: HARDCODED_TOKEN });
  }

  return respuestaEstandar(res, 401, false, 'Credenciales incorrectas', null );
};

module.exports = { login };