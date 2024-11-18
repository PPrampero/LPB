// execute o comando abaixo no terminal para ele refazer os registos das dependências.
//expo r -c
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
/*
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
*/