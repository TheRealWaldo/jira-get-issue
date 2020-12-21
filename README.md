# jira-get-issue
![Tests](https://github.com/TheRealWaldo/jira-get-issue/workflows/Tests/badge.svg)

GitHub Action to allow retrieval of Jira Issue Key from a String.  Also writes that issue key to $HOME/jira/config.yml and $HOME/.jira.d/config.yml so that other Jira tools will also work after this action is run.

Will fail if more than one Jira Issue Key is found.

Will fail if no Jira Issue Key is found.

## Inputs

### `search-string`

**Required** The string to search for a Jira Issue Key

## Example usage

```
uses: TheRealWaldo/jira-get-issue@v0.0.3
with:
  search-string: 'ABC-123 Find the Jira Issue'
```

## Outputs

### `issue-key`

The Jira Issue Key that was located.

### Writes fields to config file at $HOME/jira/config.yml
- `issue` - a key of a found issue

### Writes fields to CLI config file at $HOME/.jira.d/config.yml
- `issue` - a key of a found issue
