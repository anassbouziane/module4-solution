(function () {
    var names = ["John", "Jane", "Jack", "Jill", "Mike", "Mary"];

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            console.log("Goodbye " + name);
        } else {
            console.log("Hello " + name);
        }
    }
})();
