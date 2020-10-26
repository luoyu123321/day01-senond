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