function role(role) {
    console.log(role);
}

// Calls aboutLoad when page is loaded
$(document).ready(function(e) { 
    socialMedia_load();

});

function socialMedia_load() {
            setTimeout(function() {
                $("#socialMediaInsert").fadeIn(2000, "linear", function() {
                // Animation complete
                });
            }, 2000);
}