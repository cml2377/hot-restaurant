$.get("/api/tables", function (data) {
    console.log(data);
    const name = data.routeName
    console.log(name)
    //   if (data) {
    //     $("#stats").show();
    //     $("#name").text(data.name);
    //     $("#role").text(data.role);
    //     $("#age").text(data.age);
    //     $("#force-points").text(data.forcePoints);
    //   } else {
    //     $("#name").text(
    //       "The force is not strong with this one. Your character was not found.");
    //     $("#stats").hide();
    //   }
});