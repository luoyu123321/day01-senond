$('#go-reg').on('click', function(e) {
    e.preventDefault()
    $('#form-login').hide()
    $('#form-reg').show()
})
$('#go-login').on('click', function(e) {
    e.preventDefault()
    $('#form-login').show()
    $('#form-reg').hide()
})

var form = layui.form
form.verify({
    pwd: [
        /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
    ],
    repwd: function(value) {
        var pwd = $('#form-reg input[name=username]').val()
        if (value !== pwd) {
            return '两次输入密码不一致'
        }
    }
})