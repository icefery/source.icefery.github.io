
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
        //  $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.5/source/favicon.png");
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '教主的博客';
         clearTimeout(titleTime);
     }
     else {
        //  $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.5/source/favicon.png");
        $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });