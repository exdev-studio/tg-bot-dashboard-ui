module.exports = {
  from: [
    `production: false`,
    `domain: ''`,
    `clientId: ''`,
  ],
  to: [
    `production: ${process.env.UI_PRODUCTION || false}`,
    `domain: '${process.env.UI_AUTH_DOMAIN}'`,
    `clientId: '${process.env.UI_AUTH_CLIENT_ID}'`,
  ],
};
