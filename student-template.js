"use strict";

// Практическая работа №6
// Тема: основы ООП в JavaScript.
// Заполните только участки TODO.
// Имена классов, функций, методов и module.exports не изменяйте.

// 1. Класс Rectangle
// Конструктор получает width и height.
// getArea() возвращает площадь.
// getPerimeter() возвращает периметр.
class Rectangle {
  constructor(width, height) {
    // TODO
  }

  getArea() {
    // TODO
  }

  getPerimeter() {
    // TODO
  }
}

// 2. Класс Product
// Конструктор: name, price, quantity.
// getTotal() возвращает price * quantity.
// add(amount) увеличивает quantity только если amount > 0
// и в любом случае возвращает текущее quantity.
class Product {
  constructor(name, price, quantity) {
    // TODO
  }

  getTotal() {
    // TODO
  }

  add(amount) {
    // TODO
  }
}

// 3. Класс Student
// Конструктор: name и grades (массив оценок).
// getAverage() возвращает среднее арифметическое; для пустого массива - 0.
// addGrade(grade) добавляет оценку в массив и возвращает новую длину массива.
class Student {
  constructor(name, grades) {
    // TODO
  }

  getAverage() {
    // TODO
  }

  addGrade(grade) {
    // TODO
  }
}

// 4. Класс BankAccount
// Конструктор: owner и balance = 0.
// deposit(amount): если amount > 0, увеличить balance; вернуть текущий balance.
// withdraw(amount): списать сумму только если amount > 0 и amount <= balance;
// вернуть текущий balance независимо от того, удалось списание или нет.
class BankAccount {
  constructor(owner, balance = 0) {
    // TODO
  }

  deposit(amount) {
    // TODO
  }

  withdraw(amount) {
    // TODO
  }
}

// 5. Наследование
// Person: name, age и метод getInfo() -> "Имя, возраст".
// StudentProfile наследуется от Person, добавляет group.
// Его getInfo() должен использовать super.getInfo()
// и вернуть "Имя, возраст, группа GROUP".
class Person {
  constructor(name, age) {
    // TODO
  }

  getInfo() {
    // TODO
  }
}

class StudentProfile extends Person {
  constructor(name, age, group) {
    // TODO
  }

  getInfo() {
    // TODO
  }
}

// 6. "Класс" без синтаксиса class
// Реализуйте функцию-конструктор LegacyUser(name, age).
// Свойства name и age должны быть собственными свойствами экземпляра.
// Метод getInfo() добавьте в LegacyUser.prototype.
function LegacyUser(name, age) {
  // TODO
}

LegacyUser.prototype.getInfo = function () {
  // TODO
};

module.exports = {
  Rectangle,
  Product,
  Student,
  BankAccount,
  Person,
  StudentProfile,
  LegacyUser,
};
