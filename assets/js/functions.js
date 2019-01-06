function getAuthorArgs(width, height){
	return {
        	scaleX: 1,
        	scaleY: 1,
        	padding: 10,
			fontFamily: 'Arial',
			fontSize: 21,
			textAlign: 'center',
			centerTransform: false,
			originX: 'center',
			originY: 'bottom',
        	width: (width/2)
		};
		

}
function getBrandArgs(width, height){
	return {
        	scaleX: 1,
        	padding: 10,
			scaleY: 1,
			fontFamily: 'Architects Daughter',
			fontSize: 18,
			fontWeight: 'bold',
			textAlign: 'center',
			centerTransform: false,
			originX: 'center',
			originY: 'bottom',
        	width: (width/2),
        	hasControls : false,
			lockMovementX : true,
			lockMovementY : true,
			opacity: 0.5,
			selectable: false
		};
}

var backgroundImages = [
	{
		'url' : '1.jpg'
	},
	{
		'url' : '2.jpg'
	},
	{
		'url' : '3.jpg'
	},
	{
		'url' : '4.jpg'
	},
	{
		'url' : '5.jpg'
	},
	{
		'url' : '6.jpg'
	},
	{
		'url' : '7.jpg'
	},
	{
		'url' : '8.jpg'
	},
	{
		'url' : '9.jpg'
	},
	{
		'url' : '10.jpg'
	},
	{
		'url' : '11.jpg'
	},
	{
		'url' : '12.jpg'
	},
	{
		'url' : '13.jpg'
	},
	{
		'url' : '14.jpg'
	},
	{
		'url' : '15.jpg'
	},
	{
		'url' : '16.jpg'
	},
	{
		'url' : '17.jpg'
	},
	{
		'url' : '18.jpg'
	},
	{
		'url' : '19.jpg'
	}
];


$(document).ready(function(){	
	$('[data-toggle="tooltip"]').tooltip();

	var $container = $('#container').masonry({
        itemSelector: '.item'
    });

	$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

});