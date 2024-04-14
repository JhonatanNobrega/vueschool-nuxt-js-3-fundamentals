export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false;
    if(!userIsLoggedIn){
        // return abortNavigation('Favor fazer login para acessar essa página!');
        return navigateTo({name: 'login'});
    }
})
