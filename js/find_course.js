
alert("DO THIS FOR OLIVIA!");

var id = '';
var lastName = '';
var year = 2000;
var system = '';
var term = '';

/*
* When document is ready and user submits course data,
* save input and search for a potential match in database
 */
$(function() {
    jQuery('#submitButton')
        .on('click', function(event) {
            /*
            id = document.getElementById('courseID').value;
            lastName = document.getElementById('lastName').value;
            year = document.getElementById('academicYear').value;
            var options = document.getElementById('courseSystem');
            system = options.options[options.selectedIndex].value;
            term = document.getElementById('courseTerm').value;
            */
            id = $("#courseID").val();
            lastName = $("#lastName").val();

            $.post("http://localhost:8080/find_course.html", (id id, lastName lastName), function(data) {
                if (data === 'done') {
                    alert('form entry success');
                }
            })


        })
    ;
});
