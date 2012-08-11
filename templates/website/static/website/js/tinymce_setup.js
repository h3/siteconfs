function CustomFileBrowser(field_name, url, type, win) {

    var cmsURL = '/admin/fb/browse/?pop=2';
    cmsURL = cmsURL + '&type=' + type;
    
    tinyMCE.activeEditor.windowManager.open({
        file: cmsURL,
        width: 980, // Your dimensions may differ - toy around with them!
        height: 500,
        resizable: 'yes',
        scrollbars: 'yes',
        inline: 'no', // This parameter only has an effect if you use the inlinepopups plugin!
        close_previous: 'no'
    }, {
        window: win,
        input: field_name,
        editor_id: tinyMCE.selectedInstance.editorId
    });
    return false;
}

tinyMCE.init({
    // General options
    mode : "textareas",
    theme : "advanced",
    skin: 'grappelli',
    plugins: 'autolink,advimage,advlink,fullscreen,paste,searchreplace,grappelli,grappelli_contextmenu,template,layer,table',
    //plugins : "lists,pagebreak,style,layer,save,advhr,emotions,iespell,inlinepopups,insertdatetime,media,print,contextmenu,directionality,noneditable,visualchars,nonbreaking,xhtmlxtras,template,wordcount,advlist,autosave,",
    extended_valid_elements : "iframe[src|style|width|height|frameborder|allowfullscreen]",
//

    // General
    //accessibility_warnings: false,
    browsers: 'gecko,msie,safari,opera',
    dialog_type: 'window',
    editor_deselector: 'mceNoEditor',
    keep_styles: false,
    language: 'en',
    object_resizing: true,
    media_strict: true,

    file_browser_callback: 'CustomFileBrowser',
    theme_advanced_image_image_browser_callback: 'CustomFileBrowser',

    // Layout
    width: 758,
    height: 450,
    indentation: '10px',

    // URL
    relative_urls: false,
    remove_script_host: true,

    // Theme Advanced
    theme_advanced_toolbar_location: 'top',
    theme_advanced_toolbar_align: 'left',
    theme_advanced_statusbar_location: 'bottom',
    theme_advanced_buttons1: 'formatselect,styleselect,fontsizeselect|,bold,italic,underline,|,bullist,numlist,blockquote,|,link,unlink,|,image,|,grappelli_adv',
    theme_advanced_buttons2: 'search,|,pasteword,template,media,charmap,|,code,|,table,cleanup,grappelli_documentstructure,|,undo,redo,|,fullscreen',
    theme_advanced_buttons3: '',
    theme_advanced_path: false,
    theme_advanced_blockformats: 'p,h2,h3,h4,pre',
    theme_advanced_resizing: true,
    theme_advanced_resize_horizontal: false,
    theme_advanced_resizing_use_cookie: true,
    theme_advanced_styles: 'Image Left=img_left;Image Right=img_right;Image Block=img_block',

    // Adv
    advlink_styles: 'Internal Link=internal;External Link=external',
    advimage_update_dimensions_onchange: true,

    // Templates
    //external_link_list_url: "/static/website/js/tinymce_templates.js",
    //template_templates : [
    //{
    //    title : "Well",
    //    src : "/static/website/tinymce_templates/well.html",
    //    description : "Use the well as a simple effect on an element to give it an inset effect."
    //}
    //],

    // Grappelli
    grappelli_adv_hidden: false,
    grappelli_show_documentstructure: 'on'
    // Theme options
    //theme_advanced_buttons1 : "save,newdocument,|,cut,copy,paste,pasteword,|,undo,redo,|,search,|,outdent,indent,|,bullist,numlist,|,insertdate,inserttime,|,hr,charmap,fullscreen,removeformat,cleanup,code,",
    //theme_advanced_buttons2 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,formatselect,fontsizeselect,|,sub,sup|,link,unlink,",
    //theme_advanced_toolbar_location : "top",
    //theme_advanced_toolbar_align : "left",
    //theme_advanced_statusbar_location : "bottom",
    //theme_advanced_resizing : true,

    // Example content CSS (should be your site CSS)
    //content_css : "/static/website/css/site.css",

    // Drop lists for link/image/media/template dialogs
    /*
    template_external_list_url : "lists/template_list.js",
    external_image_list_url : "lists/image_list.js",
    media_external_list_url : "lists/media_list.js",
    */

    // Style formats
    /*
    style_formats : [
        {title : 'Bold text', inline : 'b'},
        {title : 'Red text', inline : 'span', styles : {color : '#ff0000'}},
        {title : 'Red header', block : 'h1', styles : {color : '#ff0000'}},
        {title : 'Example 1', inline : 'span', classes : 'example1'},
        {title : 'Example 2', inline : 'span', classes : 'example2'},
        {title : 'Table styles'},
        {title : 'Table row 1', selector : 'tr', classes : 'tablerow1'}
    ],
    */

    // Replace values for the template plugin
    /*
    template_replace_values : {
        username : "Some User",
        staffid : "991234"
    }
    */
});
