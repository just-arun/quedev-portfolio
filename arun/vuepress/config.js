module.exports = {
    title: "Arun",
    description: "hii their, i'm arun from quedev.dev a full stack developer. curently working in wekancode also called as wekan.company",
    head: [
        ['link', {
            rel: 'stylesheet',
            href: '/fontawesome-free-5.10.1-web/css/all.css'
        }],
        ['link', {
            rel: 'stylesheet',
            href: '/css/main.css'
        }]
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
}