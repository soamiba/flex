
$(".app-footer a").each(function() {
	var path = document.location.pathname.split('/');
	var page = path[path.length - 1];
	var href = $(this).attr("href");
	if (href === page){
		$(this).addClass("active");
		return false;
	}
});

$(".sidebar a").each(function(){
  var path = document.location.pathname.split('/');
  var page = path[path.length - 1];
  var href = $(this).attr("href");
  if (href === page) {
    $(this).addClass("active");
    return false;
  }
});

if(('standalone' in window.navigator)&&window.navigator.standalone){
        var noddy,remotes=false;
        document.addEventListener('click',function(event){
                noddy=event.target;
                while(noddy.nodeName!=='A'&&noddy.nodeName!=='HTML') noddy=noddy.parentNode;
                if('href' in noddy&&noddy.href.indexOf('http')!==-1&&(noddy.href.indexOf(document.location.host)!==-1||remotes)){
                        event.preventDefault();
                        document.location.href=noddy.href;
                }
        },false);
}