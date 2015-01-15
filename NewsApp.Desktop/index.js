
$(function() {
    var navigationType = NewsApp.config.navigationType,
        startupView = "home";

    DevExpress.devices.current("desktop");

    NewsApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: NewsApp,
        navigationType: navigationType,
        navigation: NewsApp.config.navigation
    });

    $(window).unload(function() {
        NewsApp.app.saveState();
    });

    NewsApp.app.router.register(":view", { view: startupView });
    NewsApp.app.navigate();
});

