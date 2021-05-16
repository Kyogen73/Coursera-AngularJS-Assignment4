(function (){
    'use strict';

    angular.module('data')
        .controller('CategoriesController', CategoriesController);


        //injecting the property "categories" from the resolve defined in the state        
        CategoriesController.$inject = ['categories']
        function CategoriesController(categories){
            let categoriesCtrl = this;

            categoriesCtrl.categories = categories;

        }

})();



