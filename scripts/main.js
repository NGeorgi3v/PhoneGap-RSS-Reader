$(function(){
	$("html").niceScroll();
    loadData("http://www.dnes.bg/rss.php?cat=2");
});

function loadData(URL)
{ 
	$("#preloader").removeAttr("class");
	$("#preloader").removeAttr("style");
	if($("#navbar").is(":visible"))
		$('.navbar-toggle').click()
	$("#feedContainer").empty();
	$.get(URL, function (data) {
	    $(data).find("item").each(function () { // or "item" or whatever suits your feed
	        var el = $(this);
	        var _date = el.find("date").text();
	        var date = "";
	        var title = el.find("title").text();
	        var description = el.find("description").text();
	        var image = el.find("enclosure").attr('url');
	        var link = el.find("link").text();
	        for(var i = 0; i < 10; i++)
	        {
	        	date += _date[i];
	        }
	        $("#feedContainer").append("<div class='panel panel-primary'> \
		  <div class='panel-heading'>"+ title +"</div>\
		  <div class='panel-body'>\
		    <div class='row'>\
		    	<div class='col-xs-4 col-sm-4 col-md-4'>\
		    		<img class='img-responsive' src='"+image+"' alt='"+title+"'>\
		    	</div>\
		    	<br>\
		    	<div class='col-xs-8 col-sm-8 col-md-8 text-justify'>\
		    		<strong>\
			    		<div> <span class='fa fa-calendar'></span> Дата на добавяне: "+date+".</div>\
		    		</strong>\
			    	<p>"+description+"<a href='"+link+"'> Прочети повече</a></p>\
		    	</div><!-- col-sm- -->\
		    </div><!-- /.row -->\
		  </div><!-- /.panel-body -->\
		</div><!-- /.panel -->");
	    });
	});
	setTimeout(function(){
		$("#preloader").addClass("animated fadeOut");
	},1000)
	setTimeout(function(){
		$("#preloader").css("display", "none");
	}, 1500);
}