
$(function(){
	$('.del').click(function(e){
		var target = $(e.target)
		var id = target.data('id');
		var tr = $(this).parents('tr');
		console.log(id)
		$.ajax({
			type: 'delete',
			url: '/admin/movie?id='+id
		})
		.done(function(res){
			if(res.status === 1){
				if(tr.length>0){
					tr.remove()
				}
			}
		})
	})
})