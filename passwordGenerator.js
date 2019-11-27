        //TODO
        //incorporate 8-128 character limit
        //tie in user inputs to something other than prompts/confirms
        
        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
        var characterCount = 20;

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

        //Generates and addes to the password string more random characters
        function makePassword(count)   {
            for (var i = 1; i < count; i++)    {
                //addes the next character to password
                password += randomnum();
            }
            return password;
        }
        console.log(makePassword(characterCount));