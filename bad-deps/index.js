#!/usr/bin/env node
// this fails at runtime with "Cannot find module '@protobufjs/aspromise'"
require('@grpc/proto-loader');
console.log('Success!');