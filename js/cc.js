$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['home', 'about', 'students','vips', 'freelanc', 'hunt', 'course', 'college', 'upeve', 'free'],
		sectionsColor : ['#3949AB', '#FFB300', '#1BAEE4', '#F35F72', '#435196', '#00796B', '#CDDC39', '#607D8B', '#673AB7', '#b71c1c'],
		menu: '#menu',
        css3: true,
        easing: 'easeInOutCubic',
		easingcss3: 'ease',
        scrollingSpeed: 1000,
        fitToSection: true,
		fitToSectionDelay: 1000,
		scrollOverflow: false,
		verticalCentered:false,

        paddingTop: '3.5rem'

  //       navigation: true,
		// navigationPosition: 'right',
		
	});
});

function writeJson(){
	$.ajax({      
        url: '/dataCollector.php',
        data: {
          "do":"panelRubricStore",
        },
        type: 'get',
        success: function(response)
        { 
          window.alert(response);
        }      
    });
}
