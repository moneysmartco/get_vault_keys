# Get Vault Keys

Takes the secret keys from Vault.

## Inputs

### `address`

**Required**. The URL and PORT of your Vault host (ie. https://ms.vault.co:8200)

### `role_id`

**Required**.

### `secret_id`

**Required**.

### `path`

**Required**. The path to the secrets in Vault (ie. secrets/app_env/stating/bla)

## Outputs

### `secrets`

The secrets from Vault structured as `KEY=VALUE`

## Updating
Update `index.js` and ensure `dist/index.js` is updated to apply the action code change. See [here](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github) for more details.


## Example usage

    uses: actions/get_vault_keys@v0.1.0
    with:
      address: 'https://bla.bla:8200'
      role_id: 'xxx'
      secret_id: 'xxx'
      path: 'bla/bla/bla'
