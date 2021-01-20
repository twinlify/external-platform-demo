const addExternalCss = src => {
  const l = document.createElement('link');
  l.setAttribute('rel', 'stylesheet');
  l.setAttribute('href', src);
  document.body.appendChild(l);
};

const addScript = (src, next) => {
  const s = document.createElement('script');
  s.setAttribute('src', src);
  s.async = true;

  document.body.appendChild(s);
  s.onload = next;
};

// -----------------------------------------------------------------------------

const loadNexus = options => {
  const {cssUrl, jsUrl} = options;
  const promise = new Promise((resolve, reject) => {
    const onNexusLoaded = () => {
      resolve(window.Nexus);
    };

    if (window.Nexus) {
      onNexusLoaded();
    } else {
      addExternalCss(cssUrl);
      addScript(jsUrl, onNexusLoaded);
    }
  });

  return promise;
};

// -----------------------------------------------------------------------------

// const createNexus = (options, callback) => {
//   const {cssUrl, jsUrl} = options;

//   const nexusOptions = {
//     clientId: 'localhost',
//     connectionsUrl: 'https://connections.twinlify.com',
//     configId: 'heatmap',
//     lang: 'en',
//     ...options
//   };

//   const onNexusLoaded = () => {
//     if (callback) {
//       callback(window.Nexus);
//     }
//   };

//   if (window.Nexus) {
//     onNexusLoaded();
//   } else {
//     addExternalCss(cssUrl);
//     addScript(jsUrl, onNexusLoaded);
//   }
// };

export default loadNexus;
