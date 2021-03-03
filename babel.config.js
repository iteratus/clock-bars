module.exports = (api) => {
  api.cache.forever();

  const presets = [
    [
      '@babel/env',
      {
        bugfixes: true,
        modules: false,
      },
    ],
    '@babel/react',
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
