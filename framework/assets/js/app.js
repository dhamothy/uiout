$(document).ready(function(){
    $('[fw-demo-trigger="true"]').each(function(){
    	_thisParent = $(this).parents('[fw-demo="true"]')[0];
        _thisHtml = $(_thisParent).find('[fw-demo-preview="true"]').html()
        $(_thisParent).find('[fw-demo-code="true"]').text(_thisHtml);
    });
});