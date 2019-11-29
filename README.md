# Get Vault Keys

Takes the secret keys from Vault.

## Inputs

### `address`

**Required**. The URL and PORT of your Vault host (ie. https://ms.vault.co:8200)

### `role_id`

**Required**.

### `secret_id`

**Required**.

## Outputs

### `secrets`

The secrets from Vault structured as `KEY=VALUE`

## Example usage

uses: actions/get_vault_keys@v0.1.0
with:
  address: 'https://bla.bla:8200'
  role_id: 'xxx'
  secret_id: 'xxx'