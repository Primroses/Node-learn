class User {
    // 原来只要this.name中的属性名和set name/get name后面的name一致，
    // 对this.name就会调用setter/getter，
    // 也就是说setter/getter是hook函数，而真实的存储变量是_name，我们可以在代码中直接获取它。

    // 还是java 那种写法会好一点
    constructor(id, name, sex, age) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    //    还有 静态的 static 方法声明 
    //    static get   or static set
    getId() {
        return this.id
    }
    setId(id) {
        this.id = id
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
    getSex() {
        return this.sex
    }
    setSex(sex) {
        this.sex = sex
    }
    getAge() {
        return this.age
    }
    setAge(age) {
        this.age = age
    }

}
module.exports = User