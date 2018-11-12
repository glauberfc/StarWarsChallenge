module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSouceExts() {
    return ['ts', 'tsx']
  }
}
