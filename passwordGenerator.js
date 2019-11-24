        // var lowerCheck = confirm("Do you want to use lowercase characters?");
        // var upperCheck = confirm("Do you want to use uppercase characters?");
        // var numberCheck = confirm("Do you want to use numberical characters?");
        // var specialCheck = confirm("Do you want to use special characters?");

        // var array = ["lower", "upper", "numbers", "special"]
        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        var special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

        
        
        function randomnum()  {
            var random = Math.floor((Math.random() * lower.length));
            console.log(lower[random]);
        }