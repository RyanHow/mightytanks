var fs = require("fs");
var Concat = require("concat-with-sourcemaps");

var concat = new Concat(true, 'docs/bundle.js', '\n');

concat.add(null, "// (c) Ryan How 2017");
concat.add(null, "// License GPLv3");
concat.add('babylon.js', fs.readFileSync('node_modules/babylonjs/babylon.js'));
concat.add('index.js', fs.readFileSync('docs/index.js'),  fs.readFileSync('docs/index.js.map'));

fs.writeFileSync('docs/bundle.js', concat.content);

fs.writeFileSync('docs/bundle.js.map', concat.sourceMap);