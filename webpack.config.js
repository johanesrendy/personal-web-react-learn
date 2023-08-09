module.exports = {
  resolve: [
    {
      fallback: { timers: require.resolve("timers-browserify") },
    },
    { path: require.resolve("path-browserify") },
  ],
};
