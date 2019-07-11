const nforce = require('nforce');

/**
 * Creates connection to Salesforce CRM
 */

module.exports = nforce.createConnection({
  // Client Id === Consumer Key
  clientId: process.env.SF_CLIENT_ID,
  // Consumer Secret
  clientSecret: process.env.SF_CLIENT_SECRET,
  redirectUri: 'https://login.salesforce.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  // Salesforce username
  username: process.env.SF_USERNAME,
  password: process.env_SF_PASSWORD,
  // 
  oauth: {
    // Initial access token
    access_token: process.env.SF_ACCESS_TOKEN,
    instance_url: process.env.SF_INSTANCE_URL
  },
});
