var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1===========================类定义===========================
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + this.age;
    };
    return Person;
}());
// let p = new Person('lisi', 33);
// console.log(p.print());
// 2===========================类的继承===========================
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(cardnumber, school) {
        var _this = _super.call(this, "zhangsan", 19) || this;
        _this.cardnumber = cardnumber;
        _this.school = school;
        return _this;
    }
    Student.prototype.dohomework = function () {
        return this.name + "今年" + this.age + "岁，就读于" + this.school + "编号" + this.cardnumber;
    };
    return Student;
}(Person));
// interface ColorPrinter extends Printer{
//   printing();
// }
var HPPrinter = /** @class */ (function () {
    function HPPrinter() {
    }
    HPPrinter.prototype.printing = function () {
        console.log('打印成功');
    };
    HPPrinter.prototype.getmsg = function () {
        console.log('HP10011');
    };
    return HPPrinter;
}());
// let hp = new HPPrinter();
// hp.getmsg();
// hp.printing();
// 4===========================访问修饰符=============================
// public private protected
var People = /** @class */ (function () {
    function People(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    People.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return People;
}());
// let p1 = new People('zhangsan', 20, "111@qq.com");
// console.log(p1.name);
// console.log(p1.age); //属性“age”为私有属性 只能在类“People”中访问
// console.log(p1.email); //属性“email”受保护 只能在类“People”及其子类中访问
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.show = function () {
        console.log(this.name);
        // console.log(this.age);//属性“age”为私有属性，只能在类“People”中访问
        console.log(this.email);
    };
    return Teacher;
}(People));
// 5===========================多态（同一个父类 不同的子类 有不同的实现）=============================
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('animal eat');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log('猫吃鱼');
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log('狗吃肉');
    };
    return Dog;
}(Animal));
// let c = new Cat();
// c.eat();
// let d = new Dog();
// d.eat();
// 6===========================抽象类 抽象方法=============================
// 6.1 抽象类是提供其他类继承的基类(父类) 不能直接被实例
// 6.2 抽象方法只能包含在抽象类中 抽象类中可以包含抽象方法和非抽象方法
// 6.3 非抽象的子类继承抽象类 必须实现抽象方法 抽象的子类继承抽象类 可以不实现抽象方法
var Beast = /** @class */ (function () {
    function Beast() {
    }
    Beast.prototype.run = function () {
        console.log("run run run");
    };
    return Beast;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.eat = function () {
        console.log('天王盖地虎');
    };
    return Tiger;
}(Beast));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // abstract eat();
    Lion.prototype.eat = function () {
        return '我是老狮子';
    };
    return Lion;
}(Beast));
var SmallLion = /** @class */ (function (_super) {
    __extends(SmallLion, _super);
    function SmallLion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmallLion.prototype.eat = function () {
        console.log('我是小狮子,我父亲说:' + _super.prototype.eat.call(this));
    };
    return SmallLion;
}(Lion));
// let t = new Tiger();
// t.eat();
var sl = new SmallLion();
sl.eat();
