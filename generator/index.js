module.exports = function (api, options) {
    const {authTokenStore} = options
    api.extendPackage({
        dependencies: {
            "@payamnaghdy/vue-api-manager": "^0.0.3"
        }
    })
    api.render('./templates', {
        authTokenStore
    })
}

