// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('svg');

defaultConfig.resolver.assetExts.push('ttf');

module.exports = defaultConfig;
