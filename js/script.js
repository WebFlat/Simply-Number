;(function() {
    var num1 = prompt('Enter first number: ');
    var num2 = prompt('Enter second number more than first number: ');
    var validation = (num2 > num1 && num1 > 1);

    function isSimply() {
        for (var i = num1; i <= num2; i++) {
            if (i % 2 != 0 && validation) {
                document.write('<span>' + ' ' + i + '</span>');
            }
        }
    }

    if (!validation || (isNaN(+num1) || isNaN(+num2))) {
        alert('Enter right number!!!');
    } else {
        isSimply();
    }
})();