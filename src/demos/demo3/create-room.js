import locations from './rooms.locations.json';

// -----------------------------------------------------------------------------

/*
  better pick a location in the given array above 🔼
*/
// eslint-disable-next-line no-unused-vars
const exampleLocation = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [103.74253932143, 1.33401157940892],
        [103.742602682314, 1.33404299962514],
        [103.742602682314, 1.33404299962514],
        [103.742598930029, 1.33405056224662],
        [103.742622094002, 1.33406204909779],
        [103.742597330688, 1.33411195884362],
        [103.742597330688, 1.33411195884362],
        [103.742510805831, 1.3340690517772],
        [103.742510805831, 1.3340690517772],
        [103.74253932143, 1.33401157940892]
      ]
    ]
  }
};

// -----------------------------------------------------------------------------

const reading = {
  temperature: {
    name: 'Température',
    coloring: 'temperatureColoring'
  },
  date: {
    name: 'Date'
  }
};

// -----------------------------------------------------------------------------

const createRoom = nexus => {
  const location = locations[12];

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

// -----------------------------------------------------------------------------

export default createRoom;
