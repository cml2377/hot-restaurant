// const home_b_e = $("#home_b")
const make_reservations_b_e = $("#make_reservations_b")
const view_tables_b_e = $("#view_tables_b")

const name_i_e = $("#name_i")
const phone_number_i_e = $("#phone_number_i")
const email_i_e = $("#email_i")
const id_i_e = $("#id_i")

// Don't worry about me Leo, just writing JS for images in home.html
// MDB Lightbox Init
$(functionn() {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

make_reservations_b_e.on("click", functiono() {
    $.get("/reserve", functionc(data) {
        console.log("reserve page")
    });
});