$(function() {
    getUserInfo()

    $('#btnLoginout').on('click', function() {
        layer.confirm('是否确认退出?', { icon: 3, title: '提示' }, function(index) {
            localStorage.removeItem('token')
            location.href = '/login.html'
            layer.close(index);
        });
    })
})

function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',
        success: function(res) {
            // console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            renderAvatar(res.data)
        }
    })
}

function renderAvatar(data) {
    var name = data.nickname || data.username
    $('.welcome').html('欢迎&nbsp;&nbsp;' + data.username)
    if (data.user_pic !== null) {
        $('.pic').show().attr('src', data.user_pic)
        $('.user-avatar').hide()
    } else {
        $('.pic').hide()
        let text = name[0].toUpperCase()
        $('.user-avatar').show().html(text)
    }


}