const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    console.log(`PASO 1`);
    // const token = 'a';
    const secretToken = process.env.GH_TOKEN || 'none secret';
    const testToken = process.env.GH_TOKEN || 'none test';
    console.log('secretToken', secretToken.length);
    console.log('testToken', testToken.length);
    // const octokit = github.getOctokit(inputs.token)
    // console.log(typeof octokit);
  } catch (error) {
    console.log('RUN ERROR: ', error);
  }
}

try {
  run()
} catch (error) {
  console.log('FAILEDD');
}