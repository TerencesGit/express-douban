 $(function() {
     $('input').on('blur keyup', function(event) {
         var patrn = /^[A-Za-z]\w{4,11}$/;
         var val = $(this).val();
         var id = $(this).attr('id')
         if (id == 'name') {
             if (patrn.exec(val)) {
                 $(this).removeClass('error').addClass('success').siblings('.right').show().parent().next().hide()
             } else {
                 $(this).addClass('error').siblings('.right').hide().parent().next().show()
             }
         } else if (id == 'passwd') {
             var passwd2 = $('#passwd2');
             var val2 = passwd2.val();
             if (val.length > 5 && val.length < 13) {
                 $(this).removeClass('error').addClass('success').siblings('.right').show().parent().next().hide()
                 passwd2.attr('disabled', false)
                 if(val !== val2 && val2.length > 0){
                     passwd2.addClass('error').siblings('.right').hide().parent().next().show()
                 }
             } else {
                 $(this).addClass('error').siblings('.right').hide().parent().next().show()
                 passwd2.attr('disabled', true).removeClass('success').siblings('.right').hide()
             }
         } else if (id == 'passwd2') {
             var pass = $('#passwd').val();
             if (val == pass) {
                 $(this).removeClass('error').addClass('success').siblings('.right').show().parent().next().hide()
             } else {
                 $(this).addClass('error').siblings('.right').hide().parent().next().show()
             }
         }
         if ($('#name').hasClass('success') && $('#passwd').hasClass('success') && $('#passwd2').hasClass('success')) {
             $('#submit').attr('disabled', false)
         } else {
             $('#submit').attr('disabled', true)
         }
     })
     var $name = $('#name');
     $name.blur(function() {
         var val = $name.val();
         $.get('/user/signup', { name: val }, function(res) {
             if (res.code == 1) {
                 $name.addClass('error').siblings('.right').hide().parent().siblings('.alert-exist').show()
             }
             if(res.code == 2){  
                 $name.parent().siblings('.alert-exist').hide()
             }
         })
     })
 })
