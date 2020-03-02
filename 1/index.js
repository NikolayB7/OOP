/*ООП - абстракция - модели - параметры (свойства,методов)

user - сущность

Свойства:
user(username,password,email)

Метод:
user(login(),logout(),...)

-----------------------------------------------------------

ООП - наследование

user- курсы
user.getCourses
user.rate
user.role - админ,студент,модератор

Общее у всех пользователей:
user(login(),logout(),username,password,email)

*/

let user = {
    username: '',
    password: '',
    email: '',
    //методы
};

//наследование - расширение
// admin это расширение user

admin(user){
    //changeUserStatus()
    //changeUserCourses()
}
student(user){
    //rate
    //getCourses()
}

//наследование позволяет расширить и повторно использовать код


/*
https://youtu.be/ZmH262CgLsM?t=2401

Полиморфизм
*/