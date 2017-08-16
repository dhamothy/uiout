$(document).ready(function(){
	//open preview
	$('[data-preview-open="true"]').click(function(){
		var _parent = $(this).parents('[data-preview-project="true"]')[0];
		$(_parent).find('[data-preview-frame="true"]').addClass('ui-section__frame--open');
		$(_parent).find('[data-preview-close="true"]').addClass('ui-section__close--open');
	});

	//close preview
	$('[data-preview-close="true"]').click(function(){
		var _parent = $(this).parents('[data-preview-project="true"]')[0];
		$(_parent).find('[data-preview-frame="true"]').removeClass('ui-section__frame--open');
		$(_parent).find('[data-preview-close="true"]').removeClass('ui-section__close--open');
	});
});