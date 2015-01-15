
$(function() {
    var navigationType = NewsApp.config.navigationType,
        startupView = "home";

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    if(DevExpress.devices.real().platform === "win8" && DevExpress.devices.real().deviceType === "phone") {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
        NewsApp.app.navigatingBack.add(function() {
            if(!NewsApp.app.canBack() && window.external) {
                window.external.Notify("DevExpress.ExitApp");
            }
        });
    }

    function onBackKeyDown() {
        DevExpress.hardwareBackButton.fire();
    }

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
