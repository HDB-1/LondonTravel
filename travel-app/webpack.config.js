module.exports = {
    module: {
        
        test: /\.sass$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '/src/assets/tube_map.png',
                },
            },
            'css-loader',
            'sass-loader',
        ]
    }
}1