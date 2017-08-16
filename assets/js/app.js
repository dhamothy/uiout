$(document).ready(function(){
	//open preview
	$('[data-preview-project="true"]').click(function(){		
		$(this).find('[data-preview-frame="true"]').addClass('ui-section__frame--open');
		$('[data-preview-close="true"]').addClass('ui-section__close--open');
		$('body').addClass('overflow-hidden');
	});

	//close preview
	$('[data-preview-close="true"]').click(function(){		
		$('[data-preview-frame="true"]').removeClass('ui-section__frame--open');
		$('[data-preview-close="true"]').removeClass('ui-section__close--open');
		$('body').removeClass('overflow-hidden');
	});
});