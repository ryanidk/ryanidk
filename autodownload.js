// this only works in certain setups, dont bother trying around with this
$(function() {
$('a[data-auto-download]').each(function(){
var $this = $(this);
setTimeout(function() {
window.location = $this.attr('href');
}, 2000);
});
});
