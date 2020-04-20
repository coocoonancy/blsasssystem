module.exports = {
    devServer: {
        proxy: {
            '/cloudproject': {
                target: 'https://bizsys.ibroadlink.com/'
            },
            '/userservice': {
                target: 'https://bizsys.ibroadlink.com/'
            },
            '/tobmaterial': {
                target: 'https://bizsys.ibroadlink.com/'
            }
        }
    }
}