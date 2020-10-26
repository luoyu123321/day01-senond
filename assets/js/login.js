$(function() {

    $.ajaxPrefilter(function(option) {
        option.url = 'http://ajax.frontend.itheima.net' + option.url
    })

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
            var pwd = $('#form-reg input[name=password]').val()
            if (value !== pwd) {
                return '两次输入密码不一致'
            }
        }
    })

    $('#form-reg').on('submit', function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: '/api/reguser',
            data: data,
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功,请登录')
            }
        })
    })

    $('#form-login').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            type: 'POST',
            data: $(this).serialize(),
            url: '/api/login',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg(res.message)
                location.href = '/index.html'
            }

        })
    })

})