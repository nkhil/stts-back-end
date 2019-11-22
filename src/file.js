const { orchestrator } = require('./index');

async function start() {
  try {
    return await orchestrator();
  } catch (error) {
    console.log(error);
  }
}

start();
