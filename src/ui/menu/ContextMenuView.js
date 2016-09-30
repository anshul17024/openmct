define([
    'zepto',
    'text!./context-menu.html',
    '../../adapter/ui/AngularView'
], function ($, template, AngularView) {

    function ContextMenuView(actions) {
        AngularView.call(this, template, function ($scope) {
            $scope.menuActions = actions;
        });
    }

    ContextMenuView.prototype = Object.create(AngularView.prototype);

    return ContextMenuView;
});