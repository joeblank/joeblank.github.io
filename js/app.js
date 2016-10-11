angular.module('eStore', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: 'views/shop.html',
                controller: 'shopCtrl'
            })
            .state('details', {
              url: '/item-details/:id',
              templateUrl: 'views/details.html',
              controller: 'detailsCtrl'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'views/cart.html',
                controller: 'cartCtrl'
            })
            .state('returns', {
              url: '/returns_&_exchanges',
              templateUrl: 'views/returns.html'
            })






    })
