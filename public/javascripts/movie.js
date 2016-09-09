
$(function(){
	$('.del').click(function(e){
		if (confirm("此操作不是恢复，是否删除")) {
				var target = $(e.target)
				var id = target.data('id');
				var tr = $(this).parents('tr');
				$.ajax({
					type: 'delete',
					url: '/movie/list?id=' + id
				})
				.done(function(res){
					if(res.status === 1){
						if(tr.length > 0){
							tr.remove()
						}
					}
				})
		}else {
			return false
		}
	})
})