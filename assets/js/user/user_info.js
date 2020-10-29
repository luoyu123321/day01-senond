$(function() {

    var form = layui.form
    var layer = layui.layer
    initUserInfo()

    function initUserInfo() {
        $.ajax({
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }

                form.val('userInfo', res.data)
            }
        })
    }

    $('.layui-form').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg(res.message)
                window.parent.getUserInfo()

            }
        })
    })
    $('#btnReset').on('click', function(e) {
        e.preventDefault()
            //从新渲染
        initUserInfo()
    })

    form.verify({
        nickname: function(value) {
            if (value.length > 6) {
                return '字符数量应该在1~6位'
            }
        }
    })

})