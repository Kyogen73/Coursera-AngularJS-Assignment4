(function () {
    'use strict';

    angular.module('data')
        .component('itemsComponent', {
            templateUrl: 'src/template/item.html',
            bindings: {
                category: '<',
                items: '<'
            }
        })
})();