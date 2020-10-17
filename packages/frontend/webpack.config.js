/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

/**
 * @type {import('webpack').ConfigurationFactory}
 */
module.exports = (env, argv) => {
  const PROD_MODE = argv.mode === 'production';

  const ROOT = join(__dirname, '.');
  const SOURCE_FOLDER = join(ROOT, 'src');
  const GENERATED_FOLDER = join(ROOT, 'generated');
  const DIST_FOLDER = join(ROOT, env ? `dist-${env}` : 'dist');

  const TYPE_CHECK = PROD_MODE || argv.typecheck === true;

  return {
    mode: argv.mode,
    devServer: {
      hot: true,
      port: 1234,
      historyApiFallback: true,
    },
    context: SOURCE_FOLDER,
    entry: [join(SOURCE_FOLDER, 'main/index.tsx')],
    output: {
      path: DIST_FOLDER,
      filename: 'main.[hash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: !TYPE_CHECK,
                getCustomTransformers: () => ({
                  before: [styledComponentsTransformer],
                }),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        $src: SOURCE_FOLDER,
        $generated: GENERATED_FOLDER,
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
      new HtmlPlugin({
        template: join(ROOT, 'public/index.html'),
      }),
    ],
  };
};
