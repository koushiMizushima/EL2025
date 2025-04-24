$(function () {
	$("form").validate({
		rules: {
			tel: {
				digits: true,
				maxlength: 4,
				minlength: 1
			},
			yubin: {
				digits: true,
			},
			todouhuken: {
				required: true
			}
		}
	});
});
