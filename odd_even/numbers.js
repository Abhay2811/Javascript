const input = document.querySelector("input");

const output = document.getElementById("output");

input.addEventListener("input", values);

function values(e) {
	var number = e.target.value;
 	var result = "";
 	count = 0;
 	if (number < 0) {
	   output.innerHTML = "enter a positive value";
	} else if (number % 2 == 0) {
	   number++;
   	while (count < 3) {
      	if (number % 2 == 0) {
     			result += " " + number + ",";
      		number++;
      		count++;
      	} else {
      		number++;
     		}
   	}
   	// removed comma from last digit of Even Numbers
   	result = result.substring(0, result.length-1);

   	// output of even numbers
   	output.innerHTML = result;
 	} else {
   	number++;
   	while (count < 3) {
      	if (number % 2 != 0) {
       		result += " " + number + ",";
            number++;
         	count++;
         } else {
         	number++;
      	}
   	}
   	// removed comma from last digit of odd Numbers
   	result = result.substring(0, result.length-1);

   	// output of odd numbers
      output.innerHTML = result;
 	}
}