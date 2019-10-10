module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle: "# Change Log"
      }
    ],
    [
      "@semantic-release/exec",
      {
        publishCmd: "npm version --allow-same-version ${nextRelease.version}"
      }
    ],
    [
      ("@semantic-release/git",
      {
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      })
    ]
  ]
};
