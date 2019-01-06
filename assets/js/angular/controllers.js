
var controllers = angular.module('app.controllers', ['app.directives']);

controllers.controller('RandomQuotesCtrl', RandomQuotesCtrl);
RandomQuotesCtrl.$injector = ['$scope', '$http', '$cookies', 'Fabric', 'FabricConstants', 'EditorService'];
function RandomQuotesCtrl($scope, $http, $cookies){

    $scope.quote   = null;
    $scope.author  = null;

    $scope.getRandomQuote = function(){
        $http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=')
        .then(function (result) {
            var q = result['data'][0].content;
            var a = "- " + result['data'][0].title;
            $scope.quote = cleanQuote(q);
            $scope.author = cleanQuote(a);
        }, function(result) {
            console.log(result);
        });
    }

    $scope.createImage = function(){
        $cookies.put('quote', $scope.quote);
        $cookies.put('author', $scope.author);
    }

    var cleanQuote = function(q){
        q = q.replace(/<p>/gm, "");
        q = q.replace(/<\/p>/gm, "");
        q = q.replace(/<strong>/gm, "");
        q = q.replace(/<\/strong>/gm, "");
        q = q.replace(/<em>/gm, "");
        q = q.replace(/<\/em>/gm, "");
        q = q.replace(/&#8217;/g, "’");
        q = q.replace(/&#8216;/g, "\'");
        q = q.replace(/&#8211;/g, "-");
        q = q.replace(/&#8230;/g, "...");
        q = q.replace(/&#8220;/g, "“");
        q = q.replace(/&#8221;/g, "”");
        q = q.replace(/&#233;/g, "é");

        return q;
    }
    var init = function () {
        $scope.getRandomQuote();
    };

    init();
}

controllers.controller('MainCtrl', MainCtrl);
MainCtrl.$injector = ['$scope', '$cookies'];
function MainCtrl($scope, $cookies){

    $scope.quote   = null;
    $scope.author  = null;

    $scope.createImage = function(q = null, a = null){
        if(q == null && a == null){
            $cookies.put('quote', $scope.quote);
            $cookies.put('author', $scope.author);
        }
        else{
            $cookies.put('quote', q);
            $cookies.put('author', a);   
        }
    }
}


controllers.controller('EditorCtrl', EditorCtrl);
EditorCtrl.$injector = ['$q', '$scope', '$window', '$cookies','Fabric', 'FabricConstants', 'Keypress', 'quoteService', '$modal', 'EditorService', '$http'];
function EditorCtrl($q, $scope, $window, $cookies, Fabric, FabricConstants, Keypress, quoteService, $modal, EditorService, $http){
    $scope.fabric = {};
    $scope.FabricConstants = FabricConstants;
    $scope.backgroundImages = backgroundImages;
    $scope.backgroundTemplates = FabricConstants.backgroundTemplates;
    $scope.currentPreset = FabricConstants.presetSizes[0];
    $scope.showTemplateList = false;

    $scope.showTextBox = false;
    $scope.current = null;
    $scope.SINGLE_LINE = false;
    $scope.currentZoomValue = 1;
    $scope.currentTemplate = 0;
    $scope.borderColor = 'none';
    $scope.canvasImage = null;
    $scope.templateOverlay = {
        'display' : 'block'
    }
    $scope.fixedWidth = 484;

    $scope.border = {};
    $scope.border.isBorder = true;
    $scope.border.width = 20;
    $scope.border.borderWidths = [{
        width: 10
    }, {
        width: 20
    }, {
        width: 30
    }, {
        width: 40
    }];

    setTimeout(function () {
        $('input[value=20]').trigger('click');
    }, 2000);



    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        console.log("Finished");
        $scope.showTemplateList = true;
    });
    angular.element(function () {
        $scope.backgroundTemplates.forEach(function(property) {
            property.pStyle = {
                    'background-color' : property.background,
                    'color' : property.color,
                    'border' : ('1px solid ' + property.border)
                }
        });
        $scope.templateOverlay = {
            'display' : 'none'
        }

        $scope.backgroundImages.forEach(function(property) {
            property.pUrl = property.url;
        });

    });


    $scope.toggleBorder = function(){
        temp = $scope.FabricConstants.backgroundTemplates[$scope.currentTemplate];
        if(!$scope.border.isBorder){
            $scope.fabric.setBackgroundActiveObject();
            $scope.fabric.setFill(temp.background);
            $scope.fabric.changeBorderColor(temp.background);
            $scope.fabric.setQuoteActiveObject();
        }
        else{
            $scope.fabric.setBackgroundActiveObject();
            $scope.fabric.setFill(temp.background);
            $scope.fabric.changeBorderColor(temp.border);
            $scope.fabric.setQuoteActiveObject();
        }
    }
    $scope.changeBorderWidth = function(){
        $scope.fabric.setBackgroundActiveObject();
        $scope.fabric.changeBorderWidth($scope.border.width);
        $scope.fabric.setQuoteActiveObject();
        $scope.fabric.displayObjects();
    }
    





    // Editing Canvas Size
    // ================================================================
    $scope.selectCanvas = function() {
        $scope.canvasCopy = {
            width: $scope.fabric.canvasOriginalWidth,
            height: $scope.fabric.canvasOriginalHeight,
        };
    };

    $scope.setCanvasSize = function() {
        $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
        $scope.fabric.setDirty(true);
        delete $scope.canvasCopy;
    };

    $scope.init = function() {
        
        $scope.fabric = new Fabric({
            JSONExportProperties: FabricConstants.JSONExportProperties,
            textDefaults: FabricConstants.textDefaults,
            shapeDefaults: FabricConstants.shapeDefaults,
            json: {}
        });

        var randomTemplate = Math.floor((Math.random() * FabricConstants.backgroundTemplates.length) + 1);
        var quote = $cookies.get('quote') || 'Enter Your Quote Here';
        var author = $cookies.get('author') || 'Author Name';
        
        $scope.fabric.addText(quote);
        $scope.fabric.addText(author, getAuthorArgs($scope.currentPreset.width, $scope.currentPreset.height));
        $scope.fabric.addText("designyourquotes.info",getBrandArgs($scope.currentPreset.width, $scope.currentPreset.height), false);
        $scope.fabric.addCanvasBackground({
            width: ($scope.fabric.canvasOriginalWidth - 20),
            cacheWidth: ($scope.fabric.canvasOriginalWidth - 20),
            height: ($scope.fabric.canvasOriginalHeight - 20),
            cacheHeight: ($scope.fabric.canvasOriginalHeight - 20),
            strokeWidth: 20,
            selectable: false,
            hoverCursor: 'pointer',
            top:0,
            left:0
        });

        $scope.applyTemplate(randomTemplate - 1);
        $scope.changeCanvasSize($scope.currentPreset.width, $scope.currentPreset.height);
        //$scope.setCanvasScale();
        //$scope.fabric.setZoom();
    };

    $scope.setCanvasScale = function(){
        var scale = $scope.fixedWidth / $scope.currentPreset.width;
        $scope.fabric.canvasScale = scale;
        $scope.fabric.render();
        $scope.fabric.setZoom();
    }

    $scope.changePreset = function(index){
        $scope.currentPreset = $scope.FabricConstants.presetSizes[index];
        $scope.changeCanvasSize($scope.currentPreset.width, $scope.currentPreset.height);
    }
    $scope.centerBrandName =function(){
        $scope.fabric.setBrandActiveObject();
        $scope.fabric.setActiveStyle('originX', 'center');
    }

    $scope.share = function(){
        var promise = $q.when($scope.fabric.getCanvasData());
        promise.then(function(imageUrl){
            $scope.canvasImage = imageUrl;
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: 'assets/js/angular/templates/shareImage.html',
                controller: 'ShareImageCtrl'
            });
            modalInstance.shareImage = $scope.canvasImage;
            modalInstance.quoteTitle = $cookies.get('quote');
        });
    }

    $scope.$on('canvas:created', $scope.init);

    Keypress.onSave(function() {
        $scope.updatePage();
    });

    $scope.uploadToServer = function(){
        var formData = {
            'image' : $scope.fabric.getCanvasData()
        };
        $http.post(BASE_URL + "save", $scope.fabric.getCanvasData())
        .then(function(imageUrl) {
            if(imageUrl != null){
                var imageLink = imageUrl.data.toString();
                //$scope.fabric.facebookImageShare(imageUrl.data, 'Hello World');
                console.log(imageUrl.data);
                $scope.deleteImage(imageLink);
                /*FB.ui({
                    method: 'share',
                    display: 'popup',
                    href: imageLink,
                }, function(response) {
                    if (response && !response.error_message) {
                        alert('Posting completed.');
                        $scope.deleteImage(imageLink);
                    } else {
                        alert('Error while posting.');
                    }
                });*/
            }else{
                console.log(imageUrl);
            }

        });
    }
    $scope.deleteImage = function(url){
        var formData = {
            'url' : url
        };
        $http.post(BASE_URL + "delete", url)
        .then(function(response) {
            console.log(response);
        });
    }
    $scope.shareImageToFacebook = function(url, message){
        FB.ui({
            method: 'share',
            href: message,     // The same than link in feed method
            title: message,  // The same than name in feed method
            picture: url,  
            caption: 'Caption: ' + message,  
            description: 'Description: ' + message,
        },
        function(response){
            console.log(response);
            console.log('Done');
        });
    }
            
            

        


    $scope.uploadedImage = null;
    $scope.uploadImage = function(element){
        var reader = new FileReader();
        reader.onload = function(event) {
            $scope.fabric.hideBackground();
            $scope.fabric.setQuoteActiveObject();
            var img = new Image();
            img.src = event.target.result;
            img.onload = function() {
                var width   = $scope.fabric.canvasOriginalWidth;
                var height  = (img.height/img.width) * $scope.fabric.canvasOriginalHeight;  
                //img.height  = height;
                //img.width   = width;

                var scaleX  =  $scope.fixedWidth / img.width; 
                var scaleY  =  (($scope.currentPreset.height/$scope.currentPreset.width) * $scope.fixedWidth) / img.height;
                console.log(scaleX, scaleY);
                $scope.fabric.setBackgroundImage(img.src, 1, scaleX, scaleY);
                $scope.fabric.scaleAndPositionImage(img.width, img.height);
            }
            $scope.$apply();
        };
        reader.readAsDataURL(element.files[0]);
        
        
        //$scope.fabric.resizeBackgroundImage(width, height);
    }

    $scope.changeBackground = function(imgUrl){
        //url =  "img.designyourquotes.info/bg/" + url;
        url =  "assets/images/bg/" + imgUrl;
        turl = "assets/images/thumbnail/" + imgUrl;
        $scope.fabric.hideBackground();
        $scope.fabric.setQuoteActiveObject();
        $scope.fabric.setBackgroundImage(turl, 0.75);
        var img = new Image();
        img.src = url;
        img.onload = function(){
            $scope.fabric.setBackgroundImage(img.src);
        }

        console.log($scope.fabric.getBackgroundImage());
    }

    $scope.applyTemplate = function(id){
        $scope.currentTemplate = id;
        $scope.fabric.showBackground();
        temp = $scope.FabricConstants.backgroundTemplates[id];
        EditorService.applyTemplate(temp, $scope.fabric);
        $scope.fabric.displayObjects();
    }

    $scope.editAuthor = function(){
        $scope.fabric.setAuthorActiveObject();
        if($scope.current == 'Author'){
            $scope.showTextBox =! $scope.showTextBox;   
        }
        $scope.current = 'Author';
        
    }



    $scope.customSettings = {
        control: 'wheel'
    };

    $scope.editQuote = function(isCurrent){
        $scope.fabric.setQuoteActiveObject();
        
        if($scope.current == 'Quote' ){
            $scope.showTextBox =! $scope.showTextBox;   
        }
        $scope.current = 'Quote';
    }

    $scope.zoomIn = function(){
        if($scope.currentZoomValue < $scope.FabricConstants.zoom.length){
            $scope.currentZoomValue++;
            zoomValue = $scope.FabricConstants.zoom[$scope.currentZoomValue].value;
            $scope.fabric.canvasScale = zoomValue / 100;
            $scope.fabric.setZoom();
        }
    }
    $scope.zoomOut = function(){
        if($scope.currentZoomValue > 0){
            $scope.currentZoomValue--;
            zoomValue = $scope.FabricConstants.zoom[$scope.currentZoomValue].value;
            $scope.fabric.canvasScale = zoomValue / 100;
            $scope.fabric.setZoom();
        }
    }

    $scope.changeCanvasSize = function(w, h) {
        $scope.fabric.setCanvasSizeU(w, h);
        var bg = $scope.fabric.getBackgroundImage();
        if(bg!=null){
            $scope.fabric.resizeBackgroundImage(w, h);
        }
        $scope.setCanvasScale();
        $scope.fabric.updateBorderWithSize($scope.border.width);
        $scope.fabric.updateBrandWithSize();
        $scope.fabric.updateAuthorWithSize();
        $scope.fabric.updateQuoteWithSize($scope.currentPreset.width, $scope.currentPreset.height);
        $scope.fabric.setQuoteActiveObject();
        console.log($scope.fabric.getBackgroundImage());
    };
}
