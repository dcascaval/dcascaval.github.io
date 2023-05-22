importScripts("./js/opt-library.js")
require = ScalaJSBundlerLibrary.require;
exports = {}
importScripts("./js/opt.js")
onmessage = (e) =>
  postMessage(exports.ColorWorkerMain.main(e));