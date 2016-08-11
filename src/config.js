import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

const app = angular.module('app', [uiRouter, ngMaterial]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

$stateProvider
    .state('home', {
        url: '/',
        template: require('home/home.html'),
    })
    .state('about', {
        url: '/about',
        template: require('about/about.html')
    });

// $locationProvider.html5Mode(true);
});

export default app;