$(function() {
    //user set
    $('.userSet').click(function() {
            var id = $(this).attr('data-id');
            var td = $(this).parents('tr').children();
            var name = td.eq(0).text();
            var grade = td.eq(2).text();
            $('.uid').val(id)
            $('.form-group').find('.name').val(name).end()
                .find('.role').val(grade)
        })
        //user delete
    $('.del').click(function() {
        var id = $(this).attr('data-id');
        var tr = $(this).parents('tr');
        $.ajax({
                type: 'delete',
                url: '/user/list?id=' + id
            })
            .done(function(res) {
                if (res.status === 1) {
                    if (tr.length > 0) {
                        tr.remove()
                    }
                }
            })
    })
})
