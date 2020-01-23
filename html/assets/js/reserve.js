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


    // $.get("/api/characters/" + searchedCharacter, function (data) {
    //     console.log(data);
    //     if (data) {
    //         $("#stats").show();
    //         name_i_e.text(data.name);
    //         phone_number_i_e.text(data.role);
    //         email_i_e.text(data.age);
    //         id_i_e.text(data.forcePoints);
    //     } else {
    //         $("#name").text(
    //             "The force is not strong with this one. Your character was not found.");
    //         $("#stats").hide();
    //     }
    // });
