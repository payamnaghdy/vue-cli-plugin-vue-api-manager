import Vue from 'vue';
import VueAPIManager from '@payamnaghdy/vue-api-manager';
<%_ if(authTokenStore === 'vuex') { _%>
// If this is not your store path change this import
import store from '../store/index';
function getAuthorizationToken() {
    // You should write a getter for the token or change the return value
    return store.getters.getAuthToken;
}
<%_ } _%>

<%_ if(authTokenStore === 'storage') { _%>
function getAuthorizationToken() {
    // You should save your athorization token in this key or change the key
    return localStorage.getItem("vueAPIManagerToken");
}
<%_ } _%>

export const APIRoutes = {
    host: '<host>',
    authorizationHeaderPrefix: '<prefix>', // The module automatically puts a space after the prefix
    rootURL: '<rootURL>',
    headers: {}, // Here you can set global headers
    apis: {
        apiName: {
            method: 'GET',
            path: '<path>',
            params: {},
            headers: {} // Here you can set headers for this request
        },
        getComments:{
            method: "POST",
            path:'<path>',
            params: {},
            requiresAuth: true // If you set this parameter module automatically includes auth header
        }
    }
}
const apiManager = new VueAPIManager(APIRoutes);


<%_ if(authTokenStore === 'storage' | authTokenStore === 'vuex') { _%>
apiManager.setAuthorizationHeader(getAuthorizationToken)
<%_ } _%>

Vue.prototype.$apiManager =apiManager;
export default apiManager;
