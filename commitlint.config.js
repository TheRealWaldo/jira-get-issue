module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['GJIA-'],
    },
  },
  rules: {
    'references-empty': [2, 'never'],
  },
};
