(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/template/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/template/viewCategories.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve:{
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();                        
                    }]
                }
                
            })

            .state('items', {
                url: '/categories/{categoryShortName}',
                templateUrl: 'src/template/viewItems.html',
                controller: 'ItemsController as itemsCtrl',
                resolve:{
                    category: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {                        
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);                        
                    }]
                }
            });
    }

})();