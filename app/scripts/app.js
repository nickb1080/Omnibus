// Generated by CoffeeScript 1.7.1
var App, MainController, MainRouter;

MainRouter = require('./router');

MainController = require('./controller');

App = new Backbone.Marionette.Application();

App.addRegions({
  info: '#info',
  search: '#search',
  chart: '#chart',
  meta: '#meta'
});

App.addInitializer((function(_this) {
  return function(data) {
    var controller, router;
    router = new MainRouter();
    controller = new MainController({
      router: router,
      regions: {
        info: _this.info,
        search: _this.search,
        chart: _this.chart,
        meta: _this.meta
      }
    });
    return router.processAppRoutes(controller, {
      'bill/:id': 'showBill'
    });
  };
})(this));

App.on('initialize:after', function(options) {
  if (Backbone.history) {
    return Backbone.history.start({
      pushState: true
    });
  }
});

module.exports = App;
