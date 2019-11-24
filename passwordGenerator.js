        // var lowerCheck = confirm("Do you want to use lowercase characters?");
        // var upperCheck = confirm("Do you want to use uppercase characters?");
        // var numberCheck = confirm("Do you want to use numberical characters?");
        // var specialCheck = confirm("Do you want to use special characters?");

        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        var special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
        var array = [lower, upper, number, special];

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
        for (var i = 1; i < 10; i++)    {
            password += randomnum();
        }

        console.log(password);