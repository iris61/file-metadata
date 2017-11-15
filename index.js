$('form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData($("form")[0]);
    formData.append('file', document.querySelector('[type=file]').files[0]);

    $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (returndata) {
            console.log(returndata);
        },
        error: function (returndata) {
            console.log(returndata);
        }
    });
});