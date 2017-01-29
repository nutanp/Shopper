

jQuery().ready(function() {
 
  var validVar = jQuery("#applicationform").validate({
      rules: {
        fname: {
          required: true,
          minlength: 2,
          maxlength: 16
        },
		 lname: {
          required: true,
          minlength: 2,
          maxlength: 16
        },
        uemail: {
          required: true,
          minlength: 2,
          email: true,
          maxlength: 100,
        },
		phone: {
		  required: true,
		  number: true
      },
	  zip: {
               required: true,
               number: true,
               rangelength : [3, 5]
             }
	
        
      },
      errorElement: "span",
      errorClass: "help-inline",
    });
 
  // Binding next button on first step
  $(".next").click(function() {
  
      if (validVar.form()) {
	  
        $(".shopper").hide("fast");
        $("#applicationform2").show("slow");
      }
   });
 
       // Binding back button on third step
     $(".back").click(function() {
      $(".shopper").hide("fast");
      $("#applicationform").show("slow");
    });
 
    $(".submitbtn").click(function() {
      if (validVar.form()) {
        // optional
        // used delay form submission for a seccond and show a loader image
        $("#loader").show();
         setTimeout(function(){
           $("#applicationform").html('<h3>We recieved your application ,We will get back to you sortly.</h3>');
         }, 1000);
        // Remove this if you are not using ajax method for submitting values
        return false;
      }
    });
});