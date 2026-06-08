const version = "${version}";

module.exports = {
    plugins: {
        "@release-it/conventional-changelog": {
            infile: "CHANGELOG.md",
            preset: { name: "angular" },
        },
        "@release-it/bumper": {
            in: { file: "package.json", path: ["version"] },
            out: { file: "package.json", path: ["version"] },
        },
    },
    git: {
        push: true,
        tagName: `v${version}`,
        commitMessage: `chore: release v${version}`,
        requireCommits: true,
        requireCommitsFail: false,
    },
    npm: {
        publish: false,
    },
    github: {
        release: false,
    },
};
