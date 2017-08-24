<script type="text/javascript">
    alert("Accessing course_entry.js!");

    generateTerms();

    var function generateTerms = function() {
        var item = document.getElementById("courseSystem").selectedIndex;

        if (item === 0) {
            document.getElementById("quarterTerms").style.display = "block";
        } else if (item === 1) {
            document.getElementById("semesterTerms").style.display = "block";
        } else {
            alert("this section needs some work. try something else!");
        }

        return;
    };
</script>