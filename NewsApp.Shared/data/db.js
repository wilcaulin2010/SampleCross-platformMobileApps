/// <reference path="../js/jquery-1.10.2.min.js" />
/// <reference path="../js/knockout-3.0.0.js" />
/// <reference path="../js/dx.all.js" />

(function () {


    var products = ["Tennis Barcelona ax director of football Andoni Zubizarreta; Carles Puyol quits club.", "Barcelona ax director of football Andoni Zubizarreta; Carles Puyol quits club", "Major meltdown: Beermen collapse in fourth as Aces pull off another comeback.", "Tennis: 1,000 up for triumphant Federer", "boxing", "Pinpong", "Volleyball",
           "F1 Race", "MotoCross"]; 
    
    var productsCustom = [
        { Name: products[0], Image: "images/sports/01.jpg" },
        { Name: products[1], Image: "images/sports/02.jpg" },
        { Name: products[2], Image: "images/sports/03.jpg" },
        { Name: products[3], Image: "images/sports/04.jpg" },
        { Name: products[4], Image: "images/sports/06.jpg" },
        { Name: products[5], Image: "images/sports/07.jpg" },
        { Name: products[6], Image: "images/sports/10.jpg" },
        { Name: products[7], Image: "images/sports/08.jpg" },
        { Name: products[8], Image: "images/sports/13.jpg" }
       
    ];
    
    var productsGrouped = [
      {
          key: "January 12, 2015",
          items: products.slice(0, 3)
      },
      {
          key: "February 03, 2014",
          items: products.slice(4, 8)
      }
    
    ];
    var gallery = [
            { src: "images/HomeGallery/star.png" },
            { src: "images/HomeGallery/bbc.png" },
            { src: "images/HomeGallery/inquirer.png" },
            { src: "images/HomeGallery/cnn.png" }
               
    ];

    var icons = ["star", "bbc", "inquirer","cnn", "berita", "utusan", "kosmo", "sinar", "detik", "ndtv" ];

    var endpointSelector = new DevExpress.EndpointSelector(NewsApp.config.endpoints);

    var serviceConfig = $.extend(true, {}, NewsApp.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),

            // To enable JSONP support, uncomment the following line
            //jsonp: !window.WinJS,

            // To allow cookies and HTTP authentication with CORS, uncomment the following line
            // withCredentials: true,

            errorHandler: handleServiceError
        }
    });

    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    // Enable partial CORS support for IE < 10    
    $.support.cors = true;
    
    NewsApp.db = new DevExpress.data.ODataContext(serviceConfig.db);

    NewsApp.db = {
        products: new DevExpress.data.ArrayStore(products),
        productsCustom: new DevExpress.data.ArrayStore(productsCustom),
        productsGrouped: new DevExpress.data.ArrayStore(productsGrouped),
        gallery: new DevExpress.data.ArrayStore(gallery),
        icons: icons
    };

}());
