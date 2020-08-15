var pages = {
   'About' : 'index.html',
   'Drawing' : 'desseins.html',
   'Photography' : 'photos.html',
   'Development' : 'development.html'
}

$(document).ready(function() {
   $('#nav_menu').append(render_links(pages, 'nav_menu_item'));

   document.title = 'Lily Zhang';
   $('#nav_title').text('Lily Zhang');

   $( "span#res" ).text(window.innerWidth);

   $( window ).resize(function() {
     $( "span#res" ).text(window.innerWidth);
   });
});

function render_links(obj, klass) {
   return Object.keys(obj).reduce(function (acc, title) {
      return `${acc}<a href="${obj[title]}" class="${klass}">${title}</a>`
   }, '');
}
