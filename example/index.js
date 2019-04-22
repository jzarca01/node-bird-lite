const Bird = require('../');
const bird = new Bird();

const prompt = require('prompt-async');

async function init() {
  try {
    await bird.login('enter-your-email@here.com');
    prompt.start();
    const { verifyCode } = await prompt.get(['verifyCode']);
    await bird.verifyEmail(verifyCode);
    const birds = await bird.getScootersNearby(42.3691194, 8.3691194, 2000);
    console.log(birds);
  } catch (err) {
    console.log(err);
  }
}

init();
