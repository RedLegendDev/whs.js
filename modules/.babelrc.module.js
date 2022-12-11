/* Built for whs v2.2.0-beta.0 */
module.exports = {
  presets: [['@babel/preset-env', {
    'targets': {
      browsers: ['last 2 versions', 'safari >= 7']
    },
    modules: true
  }]],
  plugins: ['@babel/plugin-external-helpers', // ['@babel/plugin-transform-runtime', {
  //   polyfill: false,
  //   regenerator: true
  // }],
  '@babel/plugin-proposal-class-properties', ['@babel/plugin-proposal-decorators', {
    legacy: true
  }], '@babel/plugin-transform-async-to-generator'] // env: {
  //   test: {
  //     presets: [
  //       ['@babel/preset-env', {
  //         targets: {
  //           node: 'current'
  //         },
  //         modules: 'commonjs',
  //         useBuiltIns: false,
  //         debug: false
  //       }]
  //     ],
  //     plugins: [
  //       ['@babel/plugin-transform-runtime', {
  //         polyfill: false
  //       }]
  //     ]
  //   },
  // }
};
//# sourceMappingURL=.babelrc.module.js.map
