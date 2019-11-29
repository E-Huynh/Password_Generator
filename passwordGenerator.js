        //TODO
        //incorporate 8-128 character limit
        //tie in user inputs to something other than prompts/confirms
        
        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

        //User input on which characters they want.
        // var wantLower = confirm("Do you want to use lowercase characters?");
        // var wantUpper = confirm("Do you want to use uppercase characters?");
        // var wantNumber = confirm("Do you want to use numberical characters?");
        // var wantSpecial = confirm("Do you want to use special characters?");
        // var characterCount = prompt("How many characters do you want?")

        //HARD CODED FOR TESTING - REMOVE AT THE END
        //Also need to code in that at least 2 should be selected
        var wantLower = true;
        var wantUpper = true;
        var wantNumber = true;
        var wantSpecial = true;
        var characterCount = 30;

        //Define var array as an empty array
        var array = [];
        
        //Builds var array according to user input of which characters requested
        function buildArray()   {
            if (wantLower)  {
                array.push(lower);
            }
            if (wantUpper) {
                array.push(upper);
            }
            if (wantNumber) {
                array.push(number);
            }
            if (wantSpecial){
                array.push(special);
            }
        }

        buildArray();

        function randomnum()  {
            //Sets var randArray to a random index of 0-3; relates to arrays: lower, upper, number, special
            var randArray = Math.floor((Math.random() * array.length));
            //Sets var random to the index of selected var randArray from 0 - max length of the randArray
            var random = Math.floor((Math.random() * array[randArray].length));
            //returns the value in var randArray with an index of var random
            return array[randArray][random];
        }

        //Sets the first random character of the password to avoid undefined & NaN in the for loop
        var password = randomnum();
        
        function resetPassword() {
            password = randomnum();
        }

        //Generates and addes to the password string more random characters
        function makePassword(characterCount)   {
            for (var i = 1; i < characterCount; i++)    {
                //addes the next character to password
                password += randomnum();
            }
            //Displays generated password in p #passwordDisplay
            document.querySelector("#passwordDisplay").innerText = password;
            //Resets the password
            return resetPassword();
        }
        

        // Button functionality
        //HANDLES THE FUNCTIONALITY OF THE BUTTONS, WRITE MORE DRY CODE
        //INCLUDE PARAMETERS TO MAKE SURE AT LEAST 2 ARE SET TO TRUE
       
        //sets selector to the first button in a div
        var lowerButton = document.querySelector(".lowerbtn");
        var upperButton = document.querySelector(".upperbtn");
        var numberButton = document.querySelector(".numberbtn");
        var specialButton = document.querySelector(".specialbtn");
        var genButton = document.querySelector(".genPassword");
        var copyButton = document.querySelector(".copyPassword");

        //Lowercase character button functionality
        //tells JS to run function on a click
        lowerButton.addEventListener("click", function() {
            //toggles the class enabled on/off; Styles the btn
            lowerButton.classList.toggle("disabled");
            //changed button text to match var wantLower;
                if (wantLower === true) {
                    lowerButton.innerHTML = "Lowercase <br> Disabled";
                }
                else    {
                    lowerButton.innerHTML = "Lowercase";
                }
            //changes the variable to be include/excluded from password generation
            wantLower = !wantLower;
            //logs the value of want Lower
            console.log("wantLower = " + wantLower);
        })
        //Uppercase character button functionality
        upperButton.addEventListener("click", function() {
            upperButton.classList.toggle("disabled");
                if (wantUpper === true) {
                    upperButton.innerHTML = "Uppercase <br> Disabled";
                }
                else    {
                    upperButton.innerHTML = "Uppercase";
                }
            wantUpper = !wantUpper;
            console.log("wantUpper = " + wantUpper);
        })
        //Number character button functionality
        numberButton.addEventListener("click", function() {
            numberButton.classList.toggle("disabled");
                if (wantNumber === true) {
                    numberButton.innerHTML = "Numbers <br> Disabled";
                }
                else    {
                    numberButton.innerHTML = "Numbers";
                }
            wantNumber = !wantNumber;
            console.log("wantNumber = " + wantNumber);
        })
        //Special character button functionality
        specialButton.addEventListener("click", function() {
            specialButton.classList.toggle("disabled");
                if (wantSpecial === true) {
                    specialButton.innerHTML = "Special <br> Disabled";
                }
                else    {
                    specialButton.innerHTML = "Special";
                }
            wantSpecial = !wantSpecial;
            console.log("wantSpecial = " + wantSpecial);
        })

        //Generate Password Button
        genButton.addEventListener("click", function(){
            makePassword(characterCount);
        });

        //Copy Password Button
        copyButton.addEventListener("click", function(){
            //pulls text from password display
            var copyText = document.querySelector("#passwordDisplay").textContent;
            // Figure out how to copy to clipboard
            console.log(copyText);
        });
