document.addEventListener("DOMContentLoaded", function() {

    $('#thank-modal').modal({
        fadeDuration: 700,
        showClose: false
    });


    $('#menu').hcOffcanvasNav({
        maxWidth: 800,
        position: 'right',
        labelClose: 'Закрыть',
        labelBack: 'Назад'
    });

});
