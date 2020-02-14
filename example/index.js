const Bird = require('../dist/'); // require('node-bird-lite');
const bird = new Bird();

const MY_LOCATION = { latitude : '48.8760826', longitude : '2.3691194'};

async function init() {
  try {
    await bird.login();
    const nearbyScooters = await bird.getScootersNearby(MY_LOCATION.latitude, MY_LOCATION.longitude);
    console.log(nearbyScooters);
  } catch (err) {
    console.log(err);
  }
}

init();
