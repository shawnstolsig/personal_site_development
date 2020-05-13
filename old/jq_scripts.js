
// // $(function(){

//     $(window).load(function() {    

//         var theWindow        = $(window),
//             $bg              = $("#bg"),
//             aspectRatio      = $bg.width() / $bg.height();
                                    
//         function resizeBg() {
            
//             if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {     
//                 // when the window gets too narrow, remove previous class and add bgheight
//                 $bg
//                     .removeClass()
//                     .addClass('bgheight');
//                 // otherwise window is too wide, remove previous class and add bgwidth
//             } else {
//                 $bg
//                     .removeClass()
//                     .addClass('bgwidth');
//             }
                        
//         }
                                    
//         theWindow.resize(resizeBg).trigger("resize");

//     });
    
// // });