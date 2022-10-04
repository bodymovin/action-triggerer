const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    console.log(`PASO 1`);
    // const token = 'a';
    const secretToken = process.env.GH_TOKEN || 'none secret';
    console.log('secretToken', secretToken.length);
    const octokit = github.getOctokit(secretToken);
    console.log(typeof octokit);
  } catch (error) {
    console.log('RUN ERROR: ', error);
  }
}

try {
  run()
} catch (error) {
  console.log('FAILEDD');
}