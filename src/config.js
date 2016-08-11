import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

$stateProvider
    .state('home', {
        url: '/',
        views: {
            "topPanel": { template: require('top-panel/top-panel.html') },
            "leftPanel": { template: require('left-panel/left-panel.html') },
            "mainContent": { template: require('home/home.html') }
        }
    })
    .state('about', {
        url: '/about',
        views: {
            "topPanel": { template: require('top-panel/top-panel.html') },
            "leftPanel": { template: require('left-panel/left-panel.html') },
            "mainContent": { template: require('about/about.html') }
        }
    });
 $locationProvider.html5Mode(true);
});

export default app;