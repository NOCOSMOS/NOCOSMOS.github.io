$(document).ready(function(){var d=$(".toggle-sm .navigate li:eq(0),.nav-left .navigate li:eq(0)"),a=$(".toggle-sm .navigate li:eq(1),.nav-left .navigate li:eq(1)"),c=$(".toggle-sm .navigate li:eq(2),.nav-left .navigate li:eq(2)"),b=$(".toggle-sm .navigate li:eq(3),.nav-left .navigate li:eq(3)");d.on("click",function(){$(".section-about").fadeIn();$(".section-work").fadeOut();$(".section-labs").fadeOut();$(".section-contact").fadeOut();$(this).css({color:"#ea469e","border-left":"5px solid #ff4ba8"}).end();a.css({color:"#fff","border-left":"0px solid transparent"}).end();c.css({color:"#fff","border-left":"0px solid transparent"}).end();b.css({color:"#fff","border-left":"0px solid transparent"})});a.on("click",function(){$(".section-about").fadeOut();$(".section-work").fadeIn();$(".section-labs").fadeOut();$(".section-contact").fadeOut();$(this).css({color:"#ea469e","border-left":"5px solid #ff4ba8"}).end();d.css({color:"#fff","border-left":"0px solid transparent"}).end();c.css({color:"#fff","border-left":"0px solid transparent"}).end();b.css({color:"#fff","border-left":"0px solid transparent"})});c.on("click",function(){$(".section-about").fadeOut();$(".section-work").fadeOut();$(".section-contact").fadeOut();$(".section-labs").fadeIn();$(this).css({color:"#ea469e","border-left":"5px solid #ff4ba8"}).end();d.css({color:"#fff","border-left":"0px solid transparent"}).end();a.css({color:"#fff","border-left":"0px solid transparent"}).end();b.css({color:"#fff","border-left":"0px solid transparent"})});b.on("click",function(){$(".section-about").fadeOut();$(".section-work").fadeOut();$(".section-labs").fadeOut();$(".section-contact").fadeIn();$(this).css({color:"#ea469e","border-left":"5px solid #ff4ba8"}).end();d.css({color:"#fff","border-left":"0px solid transparent"}).end();a.css({color:"#fff","border-left":"0px solid transparent"}).end();c.css({color:"#fff","border-left":"0px solid transparent"})})});