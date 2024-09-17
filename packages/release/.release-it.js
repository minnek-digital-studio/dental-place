const version = '${version}';
const packageName = process.env.npm_package_name;
const scope = packageName.split('/')[1];

module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      path: '.',
      infile: 'CHANGELOG.md',
      preset: {
        name: "angular"
      },
      gitRawCommitsOpts: {
        path: '.',
      },
    "@release-it/bumper": {
        "in": {
            "file": "package.json",
            "path": ["version"]
        },
      "out": {
        "file": "package.json",
        "path": ["version"]
      }
    }
    },
  },
  git: {
    push: true,
    tagName: `${packageName}-v${version}`,
    commitsPath: '.',
    commitMessage: `chore(${scope}): release v${version}`,
    requireCommits: true,
    requireCommitsFail: false,
  },
  npm: {
    publish: false,
    versionArgs: ['--workspaces false'],
  },
  github: {
    release: false,
    releaseName: `${packageName}-v${version}`,
  },
};
