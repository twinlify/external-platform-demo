const createSphere = nexus => {
  const location = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [103.7427, 1.3346]
    }
  };

  // https://docs.twinlify.com/documentation/api#createdevice
  nexus.createDevice({
    id: 'sphere-1',
    location,
    model: {
      type: 'sphere',
      color: '#123',
      scale: 1.5
    },
    properties: {
      level: 0, // level to attach, to enable filtering when many floors
      offset: 1.2 // distance to add to the device center, from the level floor, in meters
    }
  });
};

export default createSphere;
