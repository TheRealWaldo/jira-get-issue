# jira-get-issue
![.github/workflows/main.yml](https://github.com/TheRealWaldo/jira-get-issue/workflows/.github/workflows/main.yml/badge.svg)

GitHub Action to allow retrieval of Jira Issue Key from a String.  Also writes that issue key to $HOME/jira/config.yml and $HOME/.jira.d/config.yml so that other Jira tools will also work after this action is run.

Will fail if more than one Jira Issue Key is found.

Will fail if no Jira Issue Key is found.

## Inputs

### `search-string`

**Required** The string to search for a Jira Issue Key

## Example usage

uses: TheRealWaldo/jira-get-issue@v0.0.1
with:
  search-string: 'ABC-123 Find the Jira Issue'

## Outputs

### `issue-key`

The Jira Issue Key that was located.

### Writes fields to config file at $HOME/jira/config.yml
- `issue` - a key of a found issue

### Writes fields to CLI config file at $HOME/.jira.d/config.yml
- `issue` - a key of a found issue

---
## Contributing

Everyone is welcome to contribute!  Here's some instructions to get started.

### Build

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew bundle
npm install
npm i -g @zeit/ncc

npx prettier index.js --write
npx eslint index.js
ncc build index.js
```
