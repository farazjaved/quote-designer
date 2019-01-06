angular.module('app.services', [])

.service("quoteService", function () {
	var quote = {};

	return {
    	getQuote: function () {
        	return quote.text;
    	},
    	getQuoteID: function () {
        	return quote.textID;
    	},
    	setQuote: function (value) {
        	quote.text = value;
    	},
    	setQuoteID: function (value) {
        	quote.textID = value;
    	},
    	getAuthor: function(){
    		return quote.author;
    	},
    	getAuthorID: function(){
    		return quote.authorID;
    	},
    	setAuthor: function(value){
    		quote.author = value;
    	},
    	setAuthorID: function(value){
    		quote.authorID = value;
    	},
        getBackgroundID: function(){
            return quote.backgroundID;
        },
        setBackgroundID: function(value){
            quote.backgroundID = value;
        }
	};

})
.service('EditorService', function(){
    this.applyTemplate = function(temp, fabric){
        fabric.setBackgroundImage(null);
        fabric.setBackgroundActiveObject();
        fabric.setFill(temp.background);
        fabric.changeBorderColor(temp.border);


        fabric.setBrandActiveObject();
        fabric.setFill(temp.color);

        fabric.setAuthorActiveObject();
        fabric.setFill(temp.color);

        fabric.setQuoteActiveObject();
        fabric.setFill(temp.color);
    }
})