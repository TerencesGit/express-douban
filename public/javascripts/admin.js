$(function(){
	$('#douban').blur(function(){
		var id = $(this).val();
		console.log(id)
		if(id){
			$.ajax({
				url: 'https://api.douban.com/v2/movie/subject/'+ id,
				cache: true,
				type: 'GET',
				dataType: 'jsonp',
				crossDomain: true,
				jsonp: 'callback',
				success: function(data){
					$('#inputTitle').val(data.title)
					$('#inputDirector').val(data.directors[0].name)
					$('#inputCountry').val(data.countries[0])
					$('#inputLanguage').val('英语')
					$('#inputYear').val(data.year)
					$('#inputPost').val(data.images.large)
					$('#inputFlash').val(data.falsh)
					$('#inputSummary').val(data.summary)
				}
			})
		}
	})
})