const POSITIONS = [
  [103.74282, 1.33457],
  [103.7427, 1.33447],
  [103.74285, 1.33445],
  [103.7427, 1.3346]
];

let currentPosition = 0;

const moveSphere = nexus => {
  setTimeout(() => {
    if (!nexus) {
      return;
    }

    currentPosition = (currentPosition + 1) % 4;
    console.log('newposition :', POSITIONS[currentPosition]);

    // https://docs.twinlify.com/documentation/api#updatedevicedata
    nexus.updateDeviceData({
      deviceId: 'sphere-1',
      data: {
        coordinates: POSITIONS[currentPosition]
      }
    });

    moveSphere(nexus);
  }, 3000);
};

export default moveSphere;
