
alert("DO THIS FOR OLIVIA!");

$(function() {
    jQuery('#submitButton')
        .on('click', function(event) {
            alert("submit button clicked!");
        })
    ;
});

/*
var functionFind = function() {
    alert("accessing the functionFind...");

    db.query('SELECT name FROM courses WHERE ', function (err, rows, fields) {
        if (err) throw err

        console.log('The courses table contains: ', rows)
    })
};
*/
