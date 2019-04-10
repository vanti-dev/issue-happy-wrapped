Simple example project showing an issue with happy-co/rules_node handling of wrapped deps that depend on non-wrapped deps.

Test it out by running `bazel run //bad-deps`

If there is still an issue you'll see output like the following:

```
$ bazel run //bad-deps
INFO: Analysed target //bad-deps:bad-deps (1 packages loaded, 6 targets configured).
INFO: Found 1 target...
Target //bad-deps:bad-deps up-to-date:
  bazel-bin/bad-deps/bad-deps
INFO: Elapsed time: 1.401s, Critical Path: 1.15s
INFO: 3 processes: 3 linux-sandbox.
INFO: Build completed successfully, 9 total actions
INFO: Build completed successfully, 9 total actions
module.js:549
    throw err;
    ^

Error: Cannot find module '@protobufjs/aspromise'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (.../751d7ff2e7633fadbf0103162d7d673a/execroot/__main__/bazel-out/k8-fastbuild/bin/bad-deps/node_modules/@grpc/proto-loader/node_modules/protobufjs/src/util/minimal.js:5:18)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)

```