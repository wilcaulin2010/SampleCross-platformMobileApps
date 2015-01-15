(function($, DX, undefined) {
    DX.framework.html.layoutControllers.push({
        navigationType: "desktop",
        platform: "desktop",
        controller: new DX.framework.html.DefaultLayoutController({
            layoutTemplateName: "desktop",
            disableViewLoadingState: true
        })
    })
})(jQuery, DevExpress);