//$(document).on('turbolinks:load', function() {
$( document ).ready(function() {
  $("#import_sources[name='sources[files][]']").change(function() {
    var filenames = [];
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      filenames.push($(this).get(0).files[i].name);
    }
    var params = { filenames: filenames };
    if (filenames.length > 0){
      $('#send_to_api').attr("href",$('#send_to_api').attr("data-url") + decodeURIComponent($.param(params)));
    }else{
      $('#send_to_api').attr("href","javascript:void(0);");
    }
  });
});