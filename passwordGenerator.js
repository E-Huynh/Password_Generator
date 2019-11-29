        //TODO
        
        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

        //Set default values
        var wantLower = true;
        var wantUpper = true;
        var wantNumber = true;
        var wantSpecial = true;
        var characterCount = Number(document.getElementById("myRange").value);

        //Define var array as an empty array
        var array = [];
        
        //Defines password variable
        var password;

        //Builds var array according to user input of which characters requested
        function buildArray()   {
            //resets the array everytime you build
            array = [];
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

        //builds initial array.
        buildArray();
        

        function randomnum()  {
            //Sets var randArray to a random index of 0-3; relates to arrays: lower, upper, number, special
            var randArray = Math.floor((Math.random() * array.length));
            //Sets var random to the index of selected var randArray from 0 - max length of the randArray
            var random = Math.floor((Math.random() * array[randArray].length));
            //returns the value in var randArray with an index of var random
            return array[randArray][random];
        }

        function determineLength()  {
            characterCount = Number(document.getElementById("myRange").value)
        }

        document.getElementById('myRange').ontouchmove = function() {
            document.querySelector(".lengthDisplay").innerText = "Length: " + this.value;
        }
        
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
            //rebuilds the array based on the current character booleans
            buildArray();
            //checks that the array has at least 1 character array
            if(array.length != 0){
            //generates the first character based on current array.
            password = randomnum();
            determineLength();
            //lengthens the password to input
            makePassword(characterCount);
            }
            //if not character arrays are selected display the following
            else{
                document.querySelector("#passwordDisplay").innerText = "No characters selected";
            }
        });

        //Copy Password Button
        copyButton.addEventListener("click", function(){
            //pulls text from password display
            var copyText = document.querySelector("#passwordDisplay").textContent;
            // Figure out how to copy to clipboard
            console.log(copyText);
        });
