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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//enum for diferent users
var role;
(function (role) {
    role["Superadmin"] = "Superadmin";
    role["Admin"] = "Admin";
    role["Subscriber"] = "Subscriber";
})(role || (role = {}));
//json data formatted as class model
var Users = [
    {
        "firstName": "Korney",
        "middleName": "ksapena",
        "lastName": "Sapena",
        "email": "ksapena0@businessweek.com",
        "phoneNumber": 6522243888,
        "role": role.Superadmin,
        "address": "97449 Sommers Parkway"
    },
    {
        "firstName": "Shayne",
        "middleName": "springell",
        "lastName": "Pringell",
        "email": "springell1@canalblog.com",
        "phoneNumber": 2593451897,
        "role": role.Admin,
        "address": "4690 Ilene Street"
    },
    {
        "firstName": "Eleni",
        "middleName": "emccallion",
        "lastName": "McCallion",
        "email": "emccallion2@dell.com",
        "phoneNumber": 3474429675,
        "role": role.Subscriber,
        "address": "2 Mosinee Terrace"
    },
    {
        "firstName": "Kennett",
        "middleName": "kgoodridge",
        "lastName": "Goodridge",
        "email": "kgoodridge3@taobao.com",
        "phoneNumber": 6082112525,
        "role": role.Superadmin,
        "address": "2257 Bonner Court"
    },
    {
        "firstName": "Jess",
        "middleName": "jmcgonigal",
        "lastName": "McGonigal",
        "email": "jmcgonigal4@amazonaws.com",
        "phoneNumber": 9478195322,
        "role": role.Subscriber,
        "address": "1725 Schmedeman Circle"
    },
    {
        "firstName": "Newton",
        "middleName": "nclementel",
        "lastName": "Clementel",
        "email": "nclementel5@fda.gov",
        "phoneNumber": 8844969819,
        "role": role.Admin,
        "address": "14 Russell Junction"
    },
    {
        "firstName": "Abagail",
        "middleName": "aingman",
        "lastName": "Ingman",
        "email": "aingman6@dropbox.com",
        "phoneNumber": 7789976373,
        "role": role.Subscriber,
        "address": "77586 Sunbrook Point"
    }
];
//class model contain properties that are in json
var users = /** @class */ (function () {
    function users() {
    }
    return users;
}());
// some global letiables used in code
var row;
var initialRowCount = 8;
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var value7;
// class type decorator formatted on class Myclass which extends 
// the model class and crud interface 
var Myclass = /** @class */ (function (_super) {
    __extends(Myclass, _super);
    function Myclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create function which gonna create new row in table in ui for data entry
    Myclass.prototype.Create = function () {
        var i = 1;
        var add = document.getElementById("tble");
        var addRow = add.insertRow();
        initialRowCount++;
        var addColumn;
        for (var key in Users[0]) {
            addColumn = addRow.insertCell();
            addColumn.innerHTML = "<input id=\"inp" + i + "[" + initialRowCount + "]\">";
            i++;
        }
        var btns = document.createElement('td');
        btns.innerHTML = "\n    <button id=\"Editing\" onClick=\"new Myclass().Update(" + initialRowCount + ")\">Edit</button>\n    <button id=\"Cancel[" + initialRowCount + "]\" onClick=\"new Myclass().Cancel(" + initialRowCount + ")\" disabled>Cancel</button>\n    <button id=\"Save\" onClick=\"new Myclass().Save(" + initialRowCount + ")\">Save</button>\n    <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this)\">Delete</button>";
        addRow.appendChild(btns);
    };
    // read function which gonna read the data from json file
    Myclass.prototype.Read = function () {
        document.getElementById("load").innerHTML = "RefreshData";
        var tab = "<div class=\"table\"><table align=\"center\" id=\"tble\"><tr>";
        for (var k in Users[0]) {
            tab += "<th>" + k + "</th>";
        }
        tab += "<th></th></tr>";
        var validation = "<tr class='myrow'>";
        for (var i in Object.keys(Users)) {
            this.firstName = Users[i]["firstName"];
            this.middleName = Users[i]["middleName"];
            this.lastName = Users[i]["lastName"];
            this.email = Users[i]["email"];
            this.phoneNumber = Users[i]["phoneNumber"];
            this.role = Users[i]["role"];
            this.address = Users[i]["address"];
            validation += "<td><input id='inp1[" + i + "]' value=\"" + this.firstName + "\" disabled></td>";
            validation += "<td><input id='inp2[" + i + "]' value=\"" + this.middleName + "\" disabled></td>";
            validation += "<td><input id='inp3[" + i + "]' value=\"" + this.lastName + "\" disabled></td>";
            validation += "<td><input id='inp4[" + i + "]' value=\"" + this.email + "\" disabled></td>";
            validation += "<td><input id='inp5[" + i + "]' value=\"" + this.phoneNumber + "\" disabled></td>";
            validation += "<td><input id='inp6[" + i + "]' value=\"" + this.role + "\" disabled></td>";
            validation += "<td><input id='inp7[" + i + "]' value=\"" + this.address + "\" disabled></td>";
            // adding buttons for crud operations
            validation += "<td id=\"btn1\"> \n    <button id=\"Editing\" onClick=\"new Myclass().Update(" + i + ")\">Edit</button>\n    <button id=\"Cancel[" + i + "]\" onClick=\"new Myclass().Cancel(" + i + ")\" disabled>Cancel</button>\n    <button id=\"Save\" onClick=\"new Myclass().Save(" + i + ")\">Save</button>\n    <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this)\">Delete</button> </td>";
            validation += "</tr>";
        }
        document.getElementById("page").innerHTML = " " + tab + " " + validation + "\n    </table>    </div>";
    };
    // update function for editing the data
    Myclass.prototype.Update = function (i) {
        var cn = document.getElementById("Cancel[" + i + "]");
        var firstNameInput = document.getElementById('firstName');
        var input1 = document.getElementById("inp1[" + i + "]");
        input1.disabled = false;
        cn.disabled = false;
        var input2 = document.getElementById("inp2[" + i + "]");
        input2.disabled = false;
        cn.disabled = false;
        var input3 = document.getElementById("inp3[" + i + "]");
        input3.disabled = false;
        cn.disabled = false;
        var input4 = document.getElementById("inp4[" + i + "]");
        input4.disabled = false;
        cn.disabled = false;
        var input5 = document.getElementById("inp5[" + i + "]");
        input5.disabled = false;
        cn.disabled = false;
        var input6 = document.getElementById("inp6[" + i + "]");
        input6.disabled = false;
        cn.disabled = false;
        var input7 = document.getElementById("inp7[" + i + "]");
        input7.disabled = false;
        cn.disabled = false;
        row = document.getElementById("inp1[" + i + "]");
        value1 = row.value;
        row = document.getElementById("inp2[" + i + "]");
        value2 = row.value;
        row = document.getElementById("inp3[" + i + "]");
        value3 = row.value;
        row = document.getElementById("inp4[" + i + "]");
        value4 = row.value;
        row = document.getElementById("inp5[" + i + "]");
        value5 = row.value;
        row = document.getElementById("inp6[" + i + "]");
        value6 = row.value;
        row = document.getElementById("inp7[" + i + "]");
        value7 = row.value;
        console.log(value1);
        //         setTimeout(()=>{
        //             let input = document.getElementById(`inp1[${i}]`) as HTMLInputElement;
        //             input.disabled=true;
        // firstNameInput.disabled=true
        //         },3000)
    };
    // delete function for deleting the row 
    Myclass.prototype.Delete = function (i) {
        alert("Are you sure you want to delete data!");
        var del = i.parentElement.parentElement;
        del.remove();
    };
    // cancel for reterieve the old data 
    Myclass.prototype.Cancel = function (i) {
        row = document.getElementById("inp1[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp1[" + i + "]' value=\"" + value1 + "\">";
        row = document.getElementById("inp2[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp2[" + i + "]' value=\"" + value2 + "\">";
        row = document.getElementById("inp3[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp3[" + i + "]' value=\"" + value3 + "\">";
        row = document.getElementById("inp4[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp4[" + i + "]' value=\"" + value4 + "\">";
        row = document.getElementById("inp5[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp5[" + i + "]' value=\"" + value5 + "\">";
        row = document.getElementById("inp6[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp6[" + i + "]' value=\"" + value6 + "\">";
        row = document.getElementById("inp7[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp7[" + i + "]' value=\"" + value7 + "\">";
    };
    // save function used to save the data after manipulation is done
    Myclass.prototype.Save = function (i) {
        var always = true;
        var cn = document.getElementById("Cancel[" + i + "]");
        var input1 = document.getElementById("inp1[" + i + "]");
        var letters1 = /^[A-Za-z]+$/;
        if (!input1.value.match(letters1)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input2 = document.getElementById("inp2[" + i + "]");
        var letters2 = /^[A-Za-z]+$/;
        if (!input2.value.match(letters2)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input3 = document.getElementById("inp3[" + i + "]");
        var letters3 = /^[A-Za-z]+$/;
        if (!input3.value.match(letters3)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input4 = document.getElementById("inp4[" + i + "]");
        var phoneno4 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!input4.value.match(phoneno4)) {
            alert("Please Enter Valid email");
            always = false;
        }
        cn.disabled = true;
        var input5 = document.getElementById("inp5[" + i + "]");
        var phoneno = /^\d{10}$/;
        if (!input5.value.match(phoneno)) {
            alert("Please Enter Valid number");
            always = false;
        }
        cn.disabled = true;
        var input6 = document.getElementById("inp6[" + i + "]");
        if (input6.value != "Superadmin" && input6.value != "Admin" && input6.value != "Subscriber") {
            alert("Please Enter Valid role");
            always = false;
        }
        cn.disabled = true;
        var input7 = document.getElementById("inp7[" + i + "]");
        var add = /^[a-zA-Z0-9\s,'-]*$/;
        if (!input7.value.match(add)) {
            alert("Please Enter Valid address");
            always = false;
        }
        cn.disabled = true;
        if (always) {
            input1.disabled = true;
            input2.disabled = true;
            input3.disabled = true;
            input4.disabled = true;
            input5.disabled = true;
            input6.disabled = true;
            input7.disabled = true;
        }
    };
    Myclass = __decorate([
        FormatDate(new Date())
    ], Myclass);
    return Myclass;
}(users));
// Decorator DateTime Function 
function FormatDate(dt) {
    return function (target, name, descriptor) {
        var dateTime = document.getElementById("datetime");
        setInterval(function () {
            dateTime.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
// main funcion 
function main() {
    var obj = new Myclass();
    obj.Read();
}
