$(function() {
    getUserInfo()

})

function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            console.log(res);
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