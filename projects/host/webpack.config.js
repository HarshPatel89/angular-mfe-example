const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'host',

  exposes: {
    './Component': './projects/host/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  remotes:{
    remoteApp1: 'remoteApp1@http://localhost:5000/remoteEntry.js',
    remoteApp2: 'remoteApp2@http://localhost:5001/remoteEntry.js',
  }



});



