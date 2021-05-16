(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);
       
    MenuDataService.$inject = ['$http'];
    function MenuDataService ($http) {
        let service = this;

        service.getAllCategories = function() {
        let promise = $http({
            url: 'https://davids-restaurant.herokuapp.com/categories.json'
        }).then(function(response) {
            return response.data;
        })
        .catch(function (error){
            console.log(error);
        });

        return promise;
    };


        service.getItemsForCategory = function(categoryShortName) {

            let promise = $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
                // params: {
                //     param1: categoryShortName
                // }                
            }).then(function(response) {
                return response.data;
            })
            .catch(function (error){
                console.log(error);
            });
    
            return promise;

        };
    }
    
})();