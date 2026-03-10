function user_getRowSelected() {
    var radio = $("input[name = 'user_inGroup_1']:checked");

    var row = radio.closest("tr");

    var columns = row.find("td");

    $("#txtID").val(columns.eq(1).text().trim());
    $("#txtEmail").val(columns.eq(2).text().trim());
    $("#txtPassword").val(columns.eq(3).text().trim());
    $("#txtFirstName").val(columns.eq(4).text().trim());
    $("#txtLastName").val(columns.eq(5).text().trim());
    $("#txtMark").val(columns.eq(6).text().trim());
}