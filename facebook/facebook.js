var facebook = /** @class */ (function () {
    //constructor that have properties included i.e private id:number...
    function facebook(id, name, age, birthday, email, contact, aboutYou, highSchool, college) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.age = age;
        this.birthday = birthday;
        this.email = email;
        this.contact = contact;
        this.aboutYou = aboutYou;
        this.highSchool = highSchool;
        this.college = college;
        //getters
        this.getId = function () {
            return _this.id;
        };
        this.getAboutYou = function () {
            return _this.aboutYou;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.graduatedFrom = function () {
            return "xavier pena graduated from " + _this.college + " college";
        };
        //setters
        this.setId = function (id) {
            _this.id = id;
        };
        this.setAboutYou = function (aboutYou) {
            _this.aboutYou = aboutYou;
        };
    }
    return facebook;
}());
var xavier = new facebook(18001, 'xavier pena', 22, '03-07-1972', 'xav.pen@fbi.com', 2028081691, 'hustle until your bank account balance looks like phone number', 'st.xavier school', 'st.xavier');
console.log(xavier.getId());
xavier.setAboutYou("make your fortune, i've made mine");
console.log(xavier.getAboutYou());
console.log("age of xavier pena is: " + xavier.getBirthday());
console.log(xavier.graduatedFrom());
