// 1===========================类定义===========================
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  print() {
    return this.name + this.age;
  }
}
// let p = new Person('lisi', 33);
// console.log(p.print());

// 2===========================类的继承===========================
class Student extends Person {
  cardnumber: string;
  school: string;
  constructor(cardnumber: string, school: string) {
    super("zhangsan", 19);
    this.cardnumber = cardnumber;
    this.school = school;
  }
  dohomework() {
    return this.name + "今年" + this.age + "岁，就读于" + this.school + "编号" + this.cardnumber
  }
}

// var stu1 = new Student('1001', '北京大学');
// console.log(stu1.dohomework());

// 3===========================接口的继承===========================
interface Printer {
  getmsg();
}
interface PrinterPrinting {
  printing();
}
// interface ColorPrinter extends Printer{
//   printing();
// }
class HPPrinter implements Printer, PrinterPrinting {
  printing() {
    console.log('打印成功');
  }
  getmsg() {
    console.log('HP10011');
  }
}
// let hp = new HPPrinter();
// hp.getmsg();
// hp.printing();


// 4===========================访问修饰符=============================
// public private protected
class People {
  public name: string;
  private age: number;
  protected email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  print() {
    return this.name + ":" + this.age;
  }
}
// let p1 = new People('zhangsan', 20, "111@qq.com");
// console.log(p1.name);
// console.log(p1.age); //属性“age”为私有属性 只能在类“People”中访问
// console.log(p1.email); //属性“email”受保护 只能在类“People”及其子类中访问

class Teacher extends People {
  show() {
    console.log(this.name);
    // console.log(this.age);//属性“age”为私有属性，只能在类“People”中访问
    console.log(this.email)
  }
}

// 5===========================多态（同一个父类 不同的子类 有不同的实现）=============================
class Animal {
  eat() {
    console.log('animal eat');
  }
}
class Cat extends Animal {
  eat() {
    console.log('猫吃鱼');
  }
}
class Dog extends Animal {
  eat() {
    console.log('狗吃肉');
  }
}
// let c = new Cat();
// c.eat();
// let d = new Dog();
// d.eat();

// 6===========================抽象类 抽象方法=============================
// 6.1 抽象类是提供其他类继承的基类(父类) 不能直接被实例
// 6.2 抽象方法只能包含在抽象类中 抽象类中可以包含抽象方法和非抽象方法
// 6.3 非抽象的子类继承抽象类 必须实现抽象方法 抽象的子类继承抽象类 可以不实现抽象方法

abstract class Beast {
  abstract eat();
  run() {
    console.log("run run run");
  }
}
class Tiger extends Beast {
  eat() {
    console.log('天王盖地虎');
  }
}
abstract class Lion extends Beast {
  // abstract eat();
  eat() {
    console.log('我是老狮子');
  }
}
class SmallLion extends Lion {
  eat() {
    console.log('我是小狮子,我父亲说:' + super.eat());
  }
}
// let t = new Tiger();
// t.eat();

// let sl = new SmallLion();
// sl.eat();
