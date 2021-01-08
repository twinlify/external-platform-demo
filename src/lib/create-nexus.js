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

const createNexus = (options, callback) => {
  const {cssUrl, jsUrl} = options;

  const nexusOptions = {
    clientId: 'localhost',
    connectionsUrl: 'https://connections.twinlify.com',
    configId: 'heatmap',
    lang: 'en',
    ...options
  };

  const onNexusReady = () => {
    window.Nexus.create(nexusOptions);
    if (callback) {
      callback();
    }
  };

  if (window.Nexus) {
    onNexusReady();
  } else {
    addExternalCss(cssUrl);
    addScript(jsUrl, onNexusReady);
  }
};

export default createNexus;
