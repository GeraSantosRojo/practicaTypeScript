function calculateAge(date) {
    var today = new Date();
    var birthDay = new Date(date);
    var age = today.getFullYear() - birthDay.getFullYear();
    // Ajuste si aún no ha cumplido años este año
    if (today.getMonth() < birthDay.getMonth() ||
        (today.getMonth() === birthDay.getMonth() && today.getDate() < birthDay.getDate())) {
        age--;
    }
    return age;
}
// Ejemplo de uso
var dateOfBirth = '1993-09-24';
var age = calculateAge(dateOfBirth);
console.log("La edad es: ".concat(age, " a\u00F1os"));
