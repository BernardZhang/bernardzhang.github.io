var globalJSON = {
    "language": "RWATGG",
    "pageType": "frontpage",
    "pageUrl": "http://beta.rwatgg.com/",
    "pageTitle": "Relax, we are the good guys",
    "metaTags": "digital, agency, creative, coding, innovation, DIY, sphere, studio, berlin, lisboa, animation, umbraco",
    "metaDescription": "Relax, we are the good guys is a digital creative agency based in Berlin and Lisboa. We believe that the best results come from having the right team mix of strategists, technical directors and creatives on board – and we approach every job as a unique challenge, requiring its own unique team constellation.",
    "facebookLink": "http://facebook.com/relaxwearethegoodguys",
    "twitterLink": "http://twitter.com/rwatgg",
    "introText": "<p class=\"p1\">Relax, we are the good guys</p>\r\n<p class=\"p1\">was founded in 2009 in Copenhagen</p>\r\n<p class=\"p1\">- now you can find us in Berlin and Lisboa.</p>",
    "filterTypes": ["adaptive", "app", "brand platform", "campaign", "e-commerce", "game", "installation", "responsive", "website"],
    "metaImages": ["http://beta.rwatgg.com/static/images/social.png"],
    "content": {
        "pageTitle": "Relax, we are the good guys",
        "metaTags": "digital, agency, creative, coding, innovation, DIY, sphere, studio, berlin, lisboa, animation, umbraco",
        "metaDescription": "Relax, we are the good guys is a digital creative agency based in Berlin and Lisboa. We believe that the best results come from having the right team mix of strategists, technical directors and creatives on board – and we approach every job as a unique challenge, requiring its own unique team constellation.",
        "facebookLink": "http://facebook.com/relaxwearethegoodguys",
        "twitterLink": "http://twitter.com/rwatgg",
        "introText": "<p class=\"p1\">Relax, we are the good guys</p>\r\n<p class=\"p1\">was founded in 2009 in Copenhagen</p>\r\n<p class=\"p1\">- now you can find us in Berlin and Lisboa.</p>",
        "googleplusLink": "https://plus.google.com/112257715823593403278"
    }
};
var language = 'en';
var dic = {};
var routes = {
    "work": "/work",
    "case": "/work/:case",
    "about": "/about",
    "contact": "/contact",
    "impressum": "/impressum",
    "menuFilter": "/filter",
    "menuFilterType": "/filter/:type",
    "root": "/"
};
var templates = {
    "default": "",
    "workitem": "<% if(data && data.contentItems) { %>\n\t<% _.each(data.contentItems, function(content, index) { %>\n\n\t\t<% if(content.textLeft.length == 0 && content.textRight.length == 0 && content.headlineText.length > 0) { %>\n\t\t\t<section class=\"content headline-only\">\n\t\t<% }else{ %>\n\t\t\t<section class=\"content\">\n\t\t<% } %>\n\t\t\t<% if(content.gallery && content.gallery.length > 0) { %>\n                <div class=\"gallery\">\n                    <% _.each(content.gallery, function(media, index) { %>\n                        <% if(media.type == \"media\"){ %>\n                        \t<%\n\t                        \tvar imgsrc = media.url;\n\t                        \tvar isPNG = imgsrc.indexOf(\".png\") !== -1;\n\t                        \tif(!isPNG)\n\t                        \t{\n\t                        \t\tif(media.width > 1024)\n\t\t                        \t{\n\t\t                        \t\timgsrc += \"?width=1024&quality=70\";\n\t\t                        \t}else\n\t\t                        \t{\n\t\t                        \t\timgsrc += \"?quality=70\";\n\t\t                        \t}\n\t\t                        }\n                        \t%>\n\n                            <img src='<%= imgsrc %>' data-transparent=\"<%= isPNG ? 'true': 'false' %>\" width='<%= media.width %>' height='<%= media.height %>' />\n                        <% } else { %>\n                            <%\n                            \tvar iframe = media.content;\n                            \tiframe = iframe.split(\"<p>\").join(\"\").split(\"</p>\").join(\"\");\n                            %>\n                            <%= iframe %>\n                        <% } %>\n                    <% }); %>\n                </div>\n\t\t\t<% } %>\n\n\t\t\t<div class=\"text\">\n\t\t\t\t<% if(content.subClientText) { %>\n\t\t\t\t\t<h3 class=\"color-theme--color\"><%= content.subClientText %></h3>\n\t\t\t\t<% } %>\n\n\t\t\t\t<% if(content.headlineText) { %>\n\t\t\t\t\t<h1 class=\"color-theme--color headline-only\"><%= content.headlineText %></h1>\n\t\t\t\t<% } %>\n\n\t\t\t\t<% /* two columns*/ %>\n\t\t\t\t<% if(content.textLeft.length > 0 && content.textRight.length > 0) { %>\n\t\t\t\t\t<div class=\"color-theme--color\"><%= content.textLeft %></div>\n\t\t\t\t\t<div class=\"color-theme--color\"><%= content.textRight %></div>\n\t\t\t\t<% } %>\n\t\t\t\t<% /* one columns*/ %>\n\t\t\t\t<% if(content.textLeft.length > 0 && content.textRight.length == 0) { %>\n\t\t\t\t\t<div class=\"color-theme--color full-width\"><%= content.textLeft %></div>\n\t\t\t\t<% } %>\n\n\t\t\t\t<% if(content.caseLink) { %>\n\t\t\t\t\t<a href=\"<%= content.caseLink %>\" target=\"_blank\" class=\"launch-btn\">\n\t\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 50 23\" enable-background=\"new 0 0 50 23\" xml:space=\"preserve\">\n<g class=\"line\">\n\t<rect class=\"color-theme--fill\" x=\"3.1\" y=\"10\" width=\"42.8\" height=\"2.9\"/>\n</g>\n<g class=\"left-arrow\">\n\t<polygon class=\"color-theme--fill\" points=\"13.9,0 0,11.4 13.9,22.9 7,11.5 \t\"/>\n</g>\n<g class=\"right-arrow\">\n\t<polygon class=\"color-theme--fill\" points=\"36.1,0 50,11.4 36.1,22.9 43.1,11.5 \t\"/>\n</g>\n</svg>\n\n\t\t\t\t\t<div>Launch</div>\n\t\t\t\t\t</a>\n\t\t\t\t<% } %>\n\t\t\t</div>\n\t\t</section>\n\n\t<% }); %>\n<% } %>\n"
}
