// scroll
$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1500, 'easeInCubic');

    e.preventDefault();
}, );


// reseponsive scroll 
$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // p
    if (wScroll > $('.profil').offset().top - 350) {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    }

    // gallery
    if (wScroll > $('.gallery').offset().top - 350) {
        $('.gallery .thumb').addClass('muncul');
    }

    // video
    if (wScroll > $('.video').offset().top - 350) {
        $('.video .img-fluid').addClass('imgMuncul');
    }

    // berita
    if (wScroll > $('.berita').offset().top - 350) {
        $('.berita .beritaR').addClass('bMuncul');
    }
    if (wScroll > $('.berita').offset().top - 350) {
        $('.berita .beritaL1').addClass('bMuncul');
        $('.berita .beritaL2').addClass('bMuncul');
        $('.berita .beritaLT').addClass('bMuncul');
    }

    // anak perusahaan
    if (wScroll > $('.anakPerusahaan').offset().top - 220) {
        $('.anakPerusahaan .ap').addClass('apMuncul');
    }

    // judul
    if (wScroll > $('.video').offset().top - 400) {
        $('.video .judul1').addClass('jMuncul');
    }

    if (wScroll > $('.profil').offset().top - 400) {
        $('.profil .judul2').addClass('jMuncul');
    }

    if (wScroll > $('.gallery').offset().top - 400) {
        $('.gallery .judul3').addClass('jMuncul');
    }

    if (wScroll > $('.berita').offset().top - 400) {
        $('.berita .judul4').addClass('jMuncul');
    }

    if (wScroll > $('.anakPerusahaan').offset().top - 300) {
        $('.anakPerusahaan .judul5').addClass('jMuncul');
    }
});

// arah atas
$(document).ready(function () {
    $('#back-to-top').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// slider
$('.carousel').carousel({
    interval: 2000
})

// modal
// $(window).on('load', function () {
//     $('#exampleModal').modal('show');
// });

$('#peringatan').modal({
    show: true
})

// contents
$(document).ready(function () {
    $('.content [data-toggle="collapse"]').click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).text("Hide");
        } else {
            $(this).text("Show");
        }
    });
});

// const kolom = document.querySelector('.contents');
// kolom.addEventListener('click', function () {
//     kolom.classList.toggle('actif');
// });



// // sublink
// $(document).ready(function () {
//     $("nav-link").click(function () {
//         $("a").toggleClass("aktif");
//     });
// });

// sublink
const subLink = document.querySelectorAll('li.nav-item a.navbar-brand');
subLink.forEach(function (e1) {
    e1.addEventListener('click', function () {
        e1.classList.toggle('active');
    })
});

// subLink.addEventListener('click', function () {
//     subLink.classList.toggle('active');
// });

// gallery
let modalId = $('#image-gallery');

$(document).ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image')
            .show();
        if (counter_max === counter_current) {
            $('#show-next-image')
                .hide();
        } else if (counter_current === 1) {
            $('#show-previous-image')
                .hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
        let current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image')
            .click(function () {
                if ($(this)
                    .attr('id') === 'show-previous-image') {
                    current_image--;
                } else {
                    current_image++;
                }

                selector = $('[data-image-id="' + current_image + '"]');
                updateGallery(selector);
            });

        function updateGallery(selector) {
            let $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title')
                .text($sel.data('title'));
            $('#image-gallery-image')
                .attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
            $('[data-image-id]')
                .each(function () {
                    counter++;
                    $(this)
                        .attr('data-image-id', counter);
                });
        }
        $(setClickAttr)
            .on('click', function () {
                updateGallery($(this));
            });
    }
});


// video
// build key actions
$(document)
    .keydown(function (e) {
        switch (e.which) {
            case 37: // left
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
                    $('#show-previous-image')
                        .click();
                }
                break;

            case 39: // right
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
                    $('#show-next-image')
                        .click();
                }
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

$('#modal1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});


// sweet alert
// const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//         confirmButton: 'btn btn-success',
//         cancelButton: 'btn btn-danger'
//     },
//     buttonsStyling: false,
// })

// swalWithBootstrapButtons.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, delete it!',
//     cancelButtonText: 'No, cancel!',
//     reverseButtons: true
// }).then((result) => {
//     if (result.value) {
//         swalWithBootstrapButtons.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//         )
//     } else if (
//         // Read more about handling dismissals
//         result.dismiss === Swal.DismissReason.cancel
//     ) {
//         swalWithBootstrapButtons.fire(
//             'Cancelled',
//             'Your imaginary file is safe :)',
//             'error'
//         )
//     }
// })

const sa = document.querySelector('#kirim');
sa.addEventListener('click', function () {
    // const swalWithBootstrapButtons = Swal.mixin({
    //     customClass: {
    //         confirmButton: 'btn btn-success',
    //         cancelButton: 'btn btn-danger'
    //     },
    //     buttonsStyling: false,
    // });

    // swalWithBootstrapButtons.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'Yes, delete it!',
    //     cancelButtonText: 'No, cancel!',
    //     reverseButtons: true
    // }).then((result) => {
    //     if (result.value) {
    //         swalWithBootstrapButtons.fire(
    //             'Deleted!',
    //             'Your file has been deleted.',
    //             'success'
    //         )
    //     } else if (
    //         // Read more about handling dismissals
    //         result.dismiss === Swal.DismissReason.cancel
    //     ) {
    //         swalWithBootstrapButtons.fire(
    //             'Cancelled',
    //             'Your imaginary file is safe :)',
    //             'error'
    //         )
    //     }
    // });
    Swal.fire({
        title: 'Apakah anda yakin ingin mengirim pesan ini?',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#22af1f',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Saya Yakin'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Berhasil',
                'Pesan berhasil terkirim<br>terima kasih',
                'success'
            )
        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire(
                'Dibatalkan',
                'Pesan berhasil dibatalkan',
                'error'
            )
        }
    });
});

// parallax
$(window).scroll(function () {


    // jumbotron
    var wScroll = $(this).scrollTop();

    // $('.bd-example img').css({
    //     'transform': 'translate(0px,' + wScroll / 4.2 + '%)'
    // });

    // $('.jumbotron h1').css({
    //     'transform': 'translate(0px,' + wScroll / 2.1 + '%)'
    // });

    // $('.jumbotron p').css({
    //     'transform': 'translate(0px,' + wScroll / 1.2 + '%)'
    // });
});