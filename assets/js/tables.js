// $("#search-btn").on("click", function() {
//     var searchedCharacter = $("#character-search").val().trim();

//     // Using a RegEx Pattern to remove spaces from searchedCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();


$.get("/api/tables", function (data) {
    for (let i = 0; i < data.length; i++) {
        const name = data[i].name
        const phone_number = data[i].phone_number
        const email = data[i].name
        const id = data[i].id
        const table_div = $("<div>")
        const table_container = $("#tables_container")
        const table_h2_name = $("<h2>")
        const table_h2_email = $("<h2>")
        const table_h2_phone_number = $("<h2>")
        const table_h2_id = $("<h2>")
        const table_span_name = $("<span>")
        const table_span_email = $("<span>")
        const table_span_phone_number = $("<span>")
        const table_span_id = $("<span>")
        table_div.attr("style", "padding: 20px;")
        table_span_name.attr("class", "label label-primary")
        table_span_email.attr("class", "label label-primary")
        table_span_phone_number.attr("class", "label label-primary")
        table_span_id.attr("class", "label label-primary")
        table_h2_name.text(`Name: ${name}`)
        table_h2_email.text(`Email: ${email}`)
        table_h2_phone_number.text(`Phone Number: ${phone_number}`)
        table_h2_id.text(`id: ${id}`)
        table_div.append(table_h2_name, table_h2_email, table_h2_phone_number, table_h2_id)
        table_h2_name.append(table_span_name)
        table_h2_email.append(table_span_email)
        table_h2_phone_number.append(table_span_phone_number)
        table_h2_id.append(table_span_id)
        table_container.append(table_div)
        
    }
    
 
});

const print = x => console.log(x)