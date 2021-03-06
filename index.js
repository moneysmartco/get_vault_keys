const core = require('@actions/core');
const github = require('@actions/github');

let options = {
    apiVersion: 'v1',
    endpoint: core.getInput('address'),
};

const vault = require("node-vault")(options);

token = vault.approleLogin({
    role_id: core.getInput('role_id'),
    secret_id: core.getInput('secret_id')
}).then((auth) => {
    let token = auth['auth']['client_token'];
    vault.token = token;
    vault.read(core.getInput('path'))
        .then((result) => {
            let secrets = result['data'];
            let env = '';
            Object.keys(secrets).forEach(function(key){
                env += key + '=' + secrets[key] + "\n";
            });
            core.setOutput('secrets_json', JSON.stringify(secretsObject));
            core.setOutput('secrets', JSON.stringify(env));
        }).catch(error => core.setFailed('Fetch Failed! Error: ' + error.message));
}).catch(error => core.setFailed('Auth Failed! Error: ' + error.message));
