//enum for diferent users
enum role{
    Superadmin,
    Admin,
    Subscriber 
}
//json data formatted as class model
const Users:users[]=[
    {
        "firstName": "Korney",
        "middleName": "ksapena",
        "lastName": "Sapena",
        "email": "ksapena0@businessweek.com",
        "phoneNumber": 6522243888,
        "role": role.Superadmin,
        "address": "97449 Sommers Parkway",
      },
      {
        "firstName": "Shayne",
        "middleName": "springell",
        "lastName": "Pringell",
        "email": "springell1@canalblog.com",
        "phoneNumber": 2593451897,
        "role": role.Admin,
        "address": "4690 Ilene Street",
      },
      {
        "firstName": "Eleni",
        "middleName": "emccallion",
        "lastName": "McCallion",
        "email": "emccallion2@dell.com",
        "phoneNumber": 3474429675,
        "role": role.Subscriber,
        "address": "2 Mosinee Terrace",
      },
      {
        "firstName": "Kennett",
        "middleName": "kgoodridge",
        "lastName": "Goodridge",
        "email": "kgoodridge3@taobao.com",
        "phoneNumber": 6082112525,
        "role": role.Superadmin,
        "address": "2257 Bonner Court",
      },
      {
        "firstName": "Jess",
        "middleName": "jmcgonigal",
        "lastName": "McGonigal",
        "email": "jmcgonigal4@amazonaws.com",
        "phoneNumber": 9478195322,
        "role": role.Subscriber,
        "address": "1725 Schmedeman Circle",
      },
      {
        "firstName": "Newton",
        "middleName": "nclementel",
        "lastName": "Clementel",
        "email": "nclementel5@fda.gov",
        "phoneNumber": 8844969819,
        "role": role.Admin,
        "address": "14 Russell Junction",
      },
      {
        "firstName": "Abagail",
        "middleName": "aingman",
        "lastName": "Ingman",
        "email": "aingman6@dropbox.com",
        "phoneNumber": 7789976373,
        "role": role.Subscriber,
        "address": "77586 Sunbrook Point",
      }

]
//class model contain properties that are in json
 class  users{
    firstName:string;
    middleName:string;
    lastName:string;
    email:string;
    phoneNumber: number;
    role:role;
    address: string;   
}
// crud interface generic type 
interface Icrud<T>{
    Create<T>();
    Read<T>();
    Update<T>(i:any);
    Delete<T>(i:any);
}

// some global letiables used in code
let row;
let initialRowCount=8; 
let value1;
let value2;
let value3;
let value4;
let value5;
let value6;
let value7;

// class type decorator formatted on class Myclass which extends 
// the model class and crud interface 
@FormatDate(new Date())
class Myclass extends users implements Icrud<any>{
    
    // create function which gonna create new row in table in ui for data entry
    Create():void{
    let i=1;
    let add= document.getElementById("tble") as HTMLTableElement;
    let addRow = add.insertRow();
    
    initialRowCount++;
    let addColumn;
    for( let key in Users[0])
    {
        addColumn = addRow.insertCell();
        addColumn.innerHTML=`<input id="inp${i}[${initialRowCount}]">`
        i++; 
    }
    const btns=document.createElement('td');
    btns.innerHTML=`
    <button id="Editing" onClick="new Myclass().Update(${initialRowCount})">Edit</button>
    <button id="Cancel[${initialRowCount}]" onClick="new Myclass().Cancel(${initialRowCount})" disabled>Cancel</button>
    <button id="Save" onClick="new Myclass().Save(${initialRowCount})">Save</button>
    <button id="onDeleting" onClick="new Myclass().Delete(this)">Delete</button>`;
    addRow.appendChild(btns);


}

// read function which gonna read the data from json file
Read<T>(){
    document.getElementById("load").innerHTML="RefreshData";
    let tab = `<div class="table"><table align="center" id="tble"><tr>`;
    for (let k in Users[0]){
        tab+=`<th>${k}</th>`;
    }
    tab+="<th></th></tr>";
    let validation = "<tr class='myrow'>"; 
    for(let i in Object.keys(Users)){

        this.firstName=Users[i]["firstName"];
        this.middleName=Users[i]["middleName"];
        this.lastName=Users[i]["lastName"];
        this.email=Users[i]["email"];
        this.phoneNumber=Users[i]["phoneNumber"];
        this.role=Users[i]["role"];
        this.address=Users[i]["address"];

        validation+=`<td><input id='inp1[${i}]' value="${this.firstName}" disabled></td>`;
        validation+=`<td><input id='inp2[${i}]' value="${this.middleName}" disabled></td>`;
        validation+=`<td><input id='inp3[${i}]' value="${this.lastName}" disabled></td>`;
        validation+=`<td><input id='inp4[${i}]' value="${this.email}" disabled></td>`;
        validation+=`<td><input id='inp5[${i}]' value="${this.phoneNumber}" disabled></td>`;
        validation+=`<td><input id='inp6[${i}]' value="${this.role}" disabled></td>`;
        validation+=`<td><input id='inp7[${i}]' value="${this.address}" disabled></td>`;
        


    // adding buttons for crud operations
    validation+=`<td id="btn1"> 
    <button id="Editing" onClick="new Myclass().Update(${i})">Edit</button>
    <button id="Cancel[${i}]" onClick="new Myclass().Cancel(${i})" disabled>Cancel</button>
    <button id="Save" onClick="new Myclass().Save(${i})">Save</button>
    <button id="onDeleting" onClick="new Myclass().Delete(this)">Delete</button> </td>`;
            validation+=`</tr>`;
    }

    document.getElementById("page").innerHTML=` ${tab} ${validation}
    </table>    </div>`;
   
    
}

// update function for editing the data
Update<T>(i:any ){
    let cn=document.getElementById(`Cancel[${i}]`) as HTMLInputElement;

    

    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;

        let input1 = document.getElementById(`inp1[${i}]`) as HTMLInputElement;
        input1.disabled=false;
        cn.disabled=false;
        let input2 = document.getElementById(`inp2[${i}]`) as HTMLInputElement;
        input2.disabled=false;
        cn.disabled=false;
        let input3 = document.getElementById(`inp3[${i}]`) as HTMLInputElement;
        input3.disabled=false;
        cn.disabled=false;
        let input4 = document.getElementById(`inp4[${i}]`) as HTMLInputElement;
        input4.disabled=false;
        cn.disabled=false;
        let input5 = document.getElementById(`inp5[${i}]`) as HTMLInputElement;
        input5.disabled=false;
        cn.disabled=false;
        let input6 = document.getElementById(`inp6[${i}]`) as HTMLInputElement;
        input6.disabled=false;
        cn.disabled=false;
        let input7 = document.getElementById(`inp7[${i}]`) as HTMLInputElement;
        input7.disabled=false;
        cn.disabled=false;

        row=document.getElementById(`inp1[${i}]`);
        value1=row.value;
        row=document.getElementById(`inp2[${i}]`);
        value2=row.value;
        row=document.getElementById(`inp3[${i}]`);
        value3=row.value;
        row=document.getElementById(`inp4[${i}]`);
        value4=row.value;
        row=document.getElementById(`inp5[${i}]`);
        value5=row.value;
        row=document.getElementById(`inp6[${i}]`);
        value6=row.value;
        row=document.getElementById(`inp7[${i}]`);
        value7=row.value;
        console.log(value1);
      


}

// delete function for deleting the row 
Delete<T>(i:any){
    alert("Are you sure you want to delete data!")
    let del=i.parentElement.parentElement;
    del.remove();


}

// cancel for reterieve the old data 
Cancel<T>(i:any){
    row=document.getElementById(`inp1[${i}]`).parentElement;
    row.innerHTML=`<input id='inp1[${i}]' value="${value1}">`;
    row=document.getElementById(`inp2[${i}]`).parentElement;
    row.innerHTML=`<input id='inp2[${i}]' value="${value2}">`;
    row=document.getElementById(`inp3[${i}]`).parentElement;
    row.innerHTML=`<input id='inp3[${i}]' value="${value3}">`;
    row=document.getElementById(`inp4[${i}]`).parentElement;
    row.innerHTML=`<input id='inp4[${i}]' value="${value4}">`;
    row=document.getElementById(`inp5[${i}]`).parentElement;
    row.innerHTML=`<input id='inp5[${i}]' value="${value5}">`;
    row=document.getElementById(`inp6[${i}]`).parentElement;
    row.innerHTML=`<input id='inp6[${i}]' value="${value6}">`;
    row=document.getElementById(`inp7[${i}]`).parentElement;
    row.innerHTML=`<input id='inp7[${i}]' value="${value7}">`;

   
}

// save function used to save the data after manipulation is done
Save<T>(i:any){
    let always=true;
    let cn=document.getElementById(`Cancel[${i}]`) as HTMLInputElement;
    let input1 = document.getElementById(`inp1[${i}]`) as HTMLInputElement;
    let letters1 = /^[A-Za-z]+$/;
    if(!input1.value.match(letters1)){

        alert("Error Please Enter Valid Name");
        always=false;

    }

    cn.disabled=true;
    let input2 = document.getElementById(`inp2[${i}]`) as HTMLInputElement;
    let letters2 = /^[A-Za-z]+$/;
    if(!input2.value.match(letters2)){

        alert("Error Please Enter Valid Name");
        always=false;
    }

    cn.disabled=true;
    let input3 = document.getElementById(`inp3[${i}]`) as HTMLInputElement;
    let letters3 = /^[A-Za-z]+$/;
    if(!input3.value.match(letters3)){
        alert("Error Please Enter Valid Name");
        always=false;
    }
  
    cn.disabled=true;
    let input4 = document.getElementById(`inp4[${i}]`) as HTMLInputElement;
    let phoneno4=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!input4.value.match(phoneno4))
    {
        alert("Please Enter Valid email");
        always=false;
    }
   
    cn.disabled=true;
    let input5 = document.getElementById(`inp5[${i}]`) as HTMLInputElement;
    let phoneno = /^\d{10}$/;
    if(!input5.value.match(phoneno))
    {
        alert("Please Enter Valid number");
        always=false;
    }
    cn.disabled=true;
    let input6 = document.getElementById(`inp6[${i}]`) as HTMLInputElement;
    
    if(input6.value!="Superadmin" && input6.value!="Admin" && input6.value!="Subscriber")
    {
        alert("Please Enter Valid role");
        always=false;
    }
   

    cn.disabled=true;
    let input7 = document.getElementById(`inp7[${i}]`) as HTMLInputElement;
    let add =/^[a-zA-Z0-9\s,'-]*$/;
        if(!input7.value.match(add))
        {
            alert("Please Enter Valid address");
            always=false;
        }
        cn.disabled=true;

    if(always){
        input1.disabled=true;
        input2.disabled=true;
        input3.disabled=true;
        input4.disabled=true;
        input5.disabled=true;
        input6.disabled=true;
        input7.disabled=true;
    }
    
}


}

// Decorator DateTime Function 
function FormatDate(dt:any):any{
    return function(target:any,name:string,descriptor:PropertyDescriptor){
     const dateTime=document.getElementById("datetime") as HTMLInputElement;
     setInterval(function() {
        dateTime.innerHTML=new Date().toLocaleString();
    },1000);
}
}


// main funcion 
function main()
{
    const obj = new Myclass();
    obj.Read();
}