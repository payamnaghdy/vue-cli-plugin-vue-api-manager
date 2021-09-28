module.exports = function (api, options) {
    const {authTokenStore} = options
    api.extendPackage({
        dependencies: {
            "@payamnaghdy/vue-api-manager": "^0.0.6"
        }
    })
    api.render('./templates', {
        authTokenStore
    })
}

