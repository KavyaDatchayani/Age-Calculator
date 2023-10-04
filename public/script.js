function calculateAge() {
    var bd = document.getElementById("bd").value;
    var ageResult = document.getElementById('yourAge');

    if (!bd) {
        ageResult.innerHTML = 'Please enter your date of birth.';
        return;
    }


    var today = new Date();
    var birthDay = new Date(bd);
    var age = today.getFullYear() - birthDay.getFullYear();

    if (today.getMonth() < birthDay.getMonth() || (today.getMonth() === birthDay.getMonth() && today.getDate() < birthDay.getDate())) {
        age--;
    }

    ageResult.innerHTML = "Your Age is: " + age + " Years.";
}
$(document).ready(function () {
    $("#bd").datepicker({
        yearRange: "-100:+0",
        changeMonth: true,
        changeYear: true,
    });

});

