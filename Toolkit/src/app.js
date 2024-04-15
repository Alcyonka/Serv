
const _getRowString = (description, envVar) => { 
  return `<p>${description}: <strong>${envVar}</strong></p>`;
}


document.querySelector('.env-vars').innerHTML = `
  ${_getRowString('Название', process.env.APP_TITLE)}
  ${_getRowString('Текущая переменная', process.env.APP_ENV)}
  ${_getRowString('Пользователь', process.env.APP_API_USER)}
  ${_getRowString('URL', process.env.APP_BASE_URL)}
  ${_getRowString('Часовой пояс', process.env.APP_TIMEZONE)}
`;


