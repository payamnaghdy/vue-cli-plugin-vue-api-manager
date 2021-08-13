# Vue-Cli plugin vue api manager
This is a vue-cli plugin to config 
[vue api manager](https://github.com/payamnaghdy/vue-api-manager).

vue api manager is a centralized api manager for your vue application.

### Usage Examples
```angular2html
let response = await this.$apiManager.apiOne();


let response = await this.$apiManager.apiOne({
            params: {
            id:1
            },
            headers:{
            'My-New-Header': 'header value'
            }
        });
```

# Installation
`vue add vue-api-manager`

## Authorization Token Store
There is tow options for token storage browser local storage and
vuex store.

if you want to save the token in vuex store you need to add it to 
your project.

### Install Vuex
`vue add vuex`