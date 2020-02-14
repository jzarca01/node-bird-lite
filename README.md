# node-bird-lite

An API for Bird Scooters
This is the _Lite Version_ of [https://github.com/jzarca01/node-bird](https://github.com/jzarca01/node-bird)

## Usage

```javascript
const Bird = require("node-bird-lite");
const bird = new Bird();
```

For a cool example, see _example/index.js_

### Log in

```javascript
bird.login();
```

### Get Scooters Nearby

```javascript
bird.getScootersNearby(latitude, longitude, (radius = 500));
radius in meters;
```

### Get config by location

```javascript
bird.getConfigByLocation({ latitude, longitude });
```
