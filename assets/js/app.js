$(document).ready(function(){
	//open preview	
	$('[data-preview-open="true"]').click(function(){
		var _parent = $(this).parents('[data-preview-project="true"]')[0];
		$(_parent).find('[data-preview-frame="true"]').addClass('ui-section__frame--open');
		$('[data-preview-close="true"]').addClass('ui-section__close--open');
		$('body').addClass('overflow-hidden');
	});

	//close preview
	$('[data-preview-close="true"]').click(function(){
		$('[data-preview-frame="true"]').removeClass('ui-section__frame--open');
		$('[data-preview-close="true"]').removeClass('ui-section__close--open');
		$('body').removeClass('overflow-hidden');
	});

	//header toggle
	$('[data-header-trigger="true"]').click(function(){
		$('[data-header-toggle="true"]').toggleClass('ui-header--open');
		$('body').toggleClass('overflow-hidden');
	});
});