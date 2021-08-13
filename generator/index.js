module.exports = function (api, options) {
    const {authTokenStore} = options
    api.extendPackage({
        dependencies: {
            '@payamnaghdy/vue-api-manager': 'latest'
        }
    })
    api.render('./templates', {
        authTokenStore
    })
}

