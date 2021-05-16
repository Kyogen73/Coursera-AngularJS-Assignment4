(function () {
    'use strict';

    angular.module('data')
        .component('categoriesComponent', {
            templateUrl: 'src/template/category.html',            
            bindings: {
                categories: '<'
            }
        });
})();