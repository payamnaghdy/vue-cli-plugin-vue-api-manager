module.exports = function (api, options) {
    const {authTokenStore} = options
    api.extendPackage({
        dependencies: {
            "@payamnaghdy/vue-api-manager": "^0.0.5"
        }
    })
    api.render('./templates', {
        authTokenStore
    })
}

