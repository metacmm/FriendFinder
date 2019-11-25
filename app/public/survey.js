
var validateForm = function () {
    var isValidate = true;
    $(".form-control").each(function () {
        if ($(this).val().trim() === "") {
            isValidate = false;
        }
    });
    $(".chosen-select").each(function () {
        if ($(this).val() === "") {
            isValidate = false;
        }
    });

    return isValidate;
}

$("#submit").on("click", function (event) {
    if (validateForm()) {
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                parseInt($("#q1").val()),
                parseInt($("#q2").val()),
                parseInt($("#q3").val()),
                parseInt($("#q4").val()),
                parseInt($("#q5").val()),
                parseInt($("#q6").val()),
                parseInt($("#q7").val()),
                parseInt($("#q8").val()),
                parseInt($("#q9").val()),
                parseInt($("#q10").val()),
            ]
        };
        console.log(newFriend);
        $.post("/api/friends", newFriend, function (data) {
            console.log(data);
        });
    } else {
        $("#p-message").text("Missing required fields!");
    }
});