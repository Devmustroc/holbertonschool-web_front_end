function outer() {
    const globalVariable = "Welcome";
    let course = "Holberton";
    function inner() {
        alert(globalVariable + ' ' + course);
        let exclamation ="!";
        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();