(function () {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['category'];
    function ItemsController(category){
        let itemsCtrl = this;

        itemsCtrl.category = category.category.name;
        itemsCtrl.items = category.menu_items;
    }
})();