$(function() {

    var form = layui.form
    var layer = layui.layer
    initArtcateList()

    function initArtcateList() {
        $.ajax({
            url: '/my/article/cates',
            success: function(res) {
                var str = template('tpl-artcate', res)
                $('tbody').html(str)
            }
        })
    }
    var indexAdd = null
    $('#btnAddCate').on('click', function() {
        indexAdd = layer.open({
            type: 1,
            area: ['500px', '260px'],
            title: '添加文章类型',
            content: $('#tpl-addcate').html()
        });

    })
    $('body').on('submit', '#form-addcate', function(e) {
        e.preventDefault()
        $.ajax({
            url: '/my/article/addcates',
            method: 'POST',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg(res.message)
                initArtcateList()
                layer.close(indexAdd)
            }
        })
    })
    var indexedit = null
    $('body').on('click', '#btnEditcate', function() {
        indexedit = layer.open({
            type: 1,
            area: ['500px', '260px'],
            title: '编辑文章类型',
            content: $('#tpl-editcate').html()
        });
        var id = $(this).attr('data-id')
        $.ajax({
            url: '/my/article/cates/' + id,
            success: function(res) {
                form.val('editcate', res.data)
            }
        })

    })
    $('body').on('submit', '#form-editcate', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/article/updatecate',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg(res.message)
                initArtcateList()
                layer.close(indexedit)
            }
        })
    })

    $('body').on('click', '#btn-delete', function() {
        var id = $(this).attr('data-id')
        layer.confirm('确认删除?', { icon: 3, title: '提示' }, function(index) {
            $.ajax({
                url: '/my/article/deletecate/' + id,
                success: function(res) {
                    if (res.status !== 0) {
                        return layer.msg(res.message)
                    }
                    layer.msg(res.message)
                    initArtcateList()
                    layer.close(index);
                }
            })


        });
    })

})