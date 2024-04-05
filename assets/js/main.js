const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {


    var btnEnviarMensaje = document.getElementById('btnEnviarMensaje');

    btnEnviarMensaje.addEventListener('click', function(event) {
        event.preventDefault();
        Swal.fire(
            'Mensaje enviado correctamente',
            '',
            'success'
        );
    });



    $(window).scroll(function () {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-nav");
        } else {
            $("#menu").removeClass("bg-nav");
        }
    });

});