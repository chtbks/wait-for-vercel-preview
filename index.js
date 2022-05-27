const { run } = require('./action');
const { version } = require('./package.json');

console.log(`Running version ${version}`);

run();
