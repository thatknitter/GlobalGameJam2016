(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'main-window',
                templateUrl: 'components/scene.html'
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));