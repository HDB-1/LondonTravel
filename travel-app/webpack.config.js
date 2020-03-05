// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.(png|jpe?g|gif)$/i,
//           use: [
//             {
//               loader: 'file-loader',
//               options: {
//                 name: 'dirname/[contenthash].[ext]',
//               },
//             },
//           ],
//         },
//       ],
//     },
//   };
module.exports = {
    module: {
        
        test: /\.sass$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '/src/assets/tube_map.jpeg',
                },
            },
            'css-loader',
            'sass-loader',
        ]
    }
}1