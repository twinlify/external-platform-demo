const createRoom = nexus => {
  const reading = {
    temperature: {
      name: 'Température',
      coloring: 'temperatureColoring'
    },
    date: {
      name: 'Date'
    }
  };

  const location = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [103.742729517214, 1.33433539405487],
          [103.742737235416, 1.33442067499677],
          [103.742726678418, 1.33442162989904],
          [103.74272703878, 1.33442561174525],
          [103.742708247635, 1.33442731144304],
          [103.742707887428, 1.33442333131407],
          [103.742707887428, 1.33442333131407],
          [103.742698327643, 1.33442420087013],
          [103.742690568347, 1.33433894193086],
          [103.742729517214, 1.33433539405487]
        ]
      ]
    }
  };

  nexus.createDevice({
    id: 'zone-4-18',
    location,
    model: {
      type: 'polygon',
      opacity: 0.4
    },
    properties: {
      level: 0
    },
    reading
  });
};

export default createRoom;
