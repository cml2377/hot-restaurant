const submit_b_e = $("#submit_b")

const name_i_e = $("#name_i")
const phone_number_i_e = $("#phone_number_i")
const email_i_e = $("#email_i")
const id_i_e = $("#id_i")


submit_b_e.on("submit", function () {
    const name = name_i_e.val()
    console.log(name)
    const phone_number = phone_number_i_e.val()
    console.log(phone_number)
    const email = email_i_e.val()
    console.log(email)
    const id = id_i_e.val()
    console.log(id)

}

//making reservations on click
make_reservations_b_e.on("click", function () {
    event.preventDefault();
    var newTable = {
        name: name_i_e.val().trim(),
        phone_number: phone_number_i_e.val().trim(),
        email: email_i_e.val().trim(),
        id: id_i_e.val().trim()
    };

    // Question: What does this code do??
    $.post("/tables", newTable)
        .then(function (data) {
            //Don't know what need here
            console.log("reserver.html", data);
            alert("Adding your reservation...");
        });
});