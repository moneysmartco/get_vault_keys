const core = require('@actions/core');
const github = require('@actions/github');

let options = {
    apiVersion: 'v1',
    endpoint: core.getInput('address'),
};

const vault = require("node-vault")(options);

try {
    token = vault.approleLogin({
        role_id: core.getInput('role_id'),
        secret_id: core.getInput('secret_id')
    }).then((auth) => {
        let token = auth['auth']['client_token'];
        vault.token = token;
        vault.read('secret/app_env/staging/sg/falcon/credit-cards/product_listing_app')
            .then((result) => {
                core.setOutput('secrets', result['data']);
            });
    });
} catch (error) {
    core.setFailed(error.message);
}