load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
git_repository(
    name = "com_happyco_rules_node",
    remote = "https://github.com/happy-co/rules_node.git",
    commit = "c86ace466da645da4b78b49bff30f8c59d7f7234",
    shallow_since = "1554344243 +1030"
)
# local_repository(
#     name = "com_happyco_rules_node",
#     path = "/home/matt/IdeaProjects/GitHub/vanti-public/rules_node-1"
# )

load("@com_happyco_rules_node//node:rules.bzl", "node_repositories", "yarn_repository")

node_repositories()
yarn_repository(
    name = "yarn_deps",
    package = "//bad-deps:package.json",
    lockfile = "//bad-deps:yarn.lock",
)