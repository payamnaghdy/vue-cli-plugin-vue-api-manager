module.exports = [
    {
        name: 'authTokenStore',
        message: 'choose storage for finding authorization token',
        type: 'list',
        choices: [
            {
                name: 'Vuex', value: 'vuex'
            },
            {
                name: 'Local Storage', value: 'storage'
            },
            {
                name: "I'll config manually", value: 'manually'
            }
        ],
        default: 'vuex'
    }
]