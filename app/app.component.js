(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'main-window',
                templateUrl: 'scene.html'
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));