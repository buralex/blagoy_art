<!DOCTYPE html>
<html lang="en">

<head>

<!-- title and meta -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<meta name="description" content="A simple slide down menu using jQuery and CSS" />
<title>Slide Down Menu With jQuery</title>
    
<!-- css -->
<link href='https://fonts.googleapis.com/css?family=Ubuntu:300,400,700,400italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/base.css" />
<link rel="stylesheet" href="css/style.css" />
    
<!-- js -->
<script src="js/jquery-1.9.1.min.js"></script>
<script>
    $(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                //$(this).children('.sub-menu').slideToggle(200);
            }

        );

        
         $('.dropdown').on('click', function(event) {
             
				 event.preventDefault(); 
				 event.stopPropagation(); 
				 $(this).children('.sub-menu').slideToggle(200);
				 //$(this).children('.sub-menu').get(0).classList.toggle('open');
				 $(this).siblings().children('.sub-menu').hide();

			});
			

        window.onclick = function(event) {
          if (!event.target.matches('.dropdown')) {
              
              $('.sub-menu').each(function(){
                $(this).slideUp(200);
                });
          }
        }
        

    }); // end ready
</script>

</head>

<body>

<div id="wrapper">

<div id="top-bar">
    <div class="content clearfix">
        <span class="all-labs"><a href="https://www.callmenick.com/labs">&larr; all labs</a></span>
        <span class="back-to-tutorial"><a href="https://www.callmenick.com/labs/slide-down-menu-with-jquery-and-css">back to the tutorial</a></span>
    </div>
</div>

<header>
    <div id="title" class="content">
        <h1>Slide Down Menu</h1>
        <h2>This is a simple slide down nav menu using jQuery and CSS</h2>
    </div>
</header>

<nav>
    <ul class="content clearfix">
        <li><a href="#">Nav 1</a></li>
        <li><a href="#">Nav 2</a></li>
        <li class="dropdown dropdown--first">
            <a href="#">Nav 3</a>
            <ul class="sub-menu">
                <li><a href="#">Nav 3.1</a></li>
                <li><a href="#">Nav 3.2</a></li>
                <li><a href="#">Nav 3.3</a></li>
                <li class="dropdown">
                    <a href="#">Nav 3.4</a>
                    <ul class="sub-menu">
                        <li><a href="#">Nav 3.4.1</a></li>
                        <li class="dropdown">
                            <a href="#">Nav 3.4.2</a>
                            <ul class="sub-menu">
                                <li><a href="#">Nav 3.4.2.1</a></li>
                                <li><a href="#">Nav 3.4.2.2</a></li>
                                <li><a href="#">Nav 3.4.2.3</a></li>
                                <li><a href="#">Nav 3.4.2.4</a></li>
                                <li><a href="#">Nav 3.4.2.5</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Nav 3.4.2</a>
                            <ul class="sub-menu">
                                <li><a href="#">Nav ajsfldjlsfdjlj</a></li>
                                <li><a href="#">Nav ajsfldjlsfdjlj</a></li>
                                <li><a href="#">Nav ajsfldjlsfdjlj</a></li>
                                <li><a href="#">Nav ajsfldjlsfdjlj</a></li>
                                <li><a href="#">Nav ajsfldjlsfdjlj</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Nav 3.4.3</a></li>
                        <li><a href="#">Nav 3.4.4</a></li>
                        <li><a href="#">Nav 3.4.5</a></li>
                    </ul>
                </li>
                <li><a href="#">Nav 3.5</a></li>
            </ul>
            
        </li>
        <li><a href="#">Nav 4</a></li>
        <li><a href="#">Nav 5</a></li>
    </ul>
</nav>

<div id="main">
    <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam;</p>
    </div>
</div>


<footer>
</footer>



</div>


</body>
</html>