const core = require('@actions/core')
const zip = require('cross-zip')

async function run() {
  try {
    zip.zipSync(core.getInput('inPath'), core.getInput('outPath'))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
