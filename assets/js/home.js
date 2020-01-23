// const home_b_e = $("#home_b")
const make_reservations_b_e = $("#make_reservations_b")
const view_tables_b_e = $("#view_tables_b")

const name_i_e = $("#name_i")
const phone_number_i_e = $("#phone_number_i")
const email_i_e = $("#email_i")
const id_i_e = $("#id_i")

// Don't worry about me Leo, just writing JS for images in home.html
// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

make_reservations_b_e.on("click", function () {
    // var searchedCharacter = $("#character-search").val().trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    $.get("/reserve", function (data) {
        console.log("reserve page")
        // console.log(data);
        // if (data) {
        //     $("#stats").show();
        //     $("#name").text(data.name);
        //     $("#role").text(data.role);
        //     $("#age").text(data.age);
        //     $("#force-points").text(data.forcePoints);
        // } else {
        //     $("#name").text(
        //         "The force is not strong with this one. Your character was not found.");
        //     $("#stats").hide();
        // }
    });
});