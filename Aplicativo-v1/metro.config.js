const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Obtenha a configuração padrão
const defaultConfig = getDefaultConfig(__dirname);

// Adicione suporte ao SVG e outras configurações personalizadas
const customConfig = {
  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    ...defaultConfig.resolver,
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

// Exporte a configuração mesclada
module.exports = mergeConfig(defaultConfig, customConfig);

