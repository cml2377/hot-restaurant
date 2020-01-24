// const home_b_e = $("#home_b")
const make_reservations_b_e = $("#make_reservations_b")
const view_tables_b_e = $("#view_tables_b")

const name_i_e = $("#name_i")
const phone_number_i_e = $("#phone_number_i")
const email_i_e = $("#email_i")
const id_i_e = $("#id_i")

make_reservations_b_e.on("click", function () {
    $.get("/reserve", function (data) {
        console.log("reserve page")
    });
});