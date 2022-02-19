//clases
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " paid invoice"));
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice2 = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var person = new User("luis", "lepfsd@live.com", 32);
var person2 = new Member(1, "luis", "lepfsd@live.com", 32);
person2.payInvoice2();
document.write();
