//grab DOM elements//
const balance=document.getElementById("balance");
const money_plus=document.getElementById("money-plus");
const money_minus=document.getElementById("money-minus");
const list=document.getElementById("list");
const form=document.getElementById("form");
const text=document.getElementById("text");
const amount=document.getElementById("number");

/*const dummy=[

    {id:1,text:"salary",amount:50000},
    {id:2,text:"fee",amount:-10000},
    {id:3,text:"rent",amount:-10000},
    {id:4,text:"shop",amount:-5000}
];*/
//Generate id
function generateID(){
    return Math.floor(Math.random()*10000000);
}

//add
function addTransactioDOM(transaction){
    //get sign depends on amount
    const sign=transaction.amount<0 ? '-' : '+';

    const item=document.createElement("li");

    //Add class based on class value
    item.classList.add(transaction.amount< 0? 'minus' : 'plus');
    //using template string `` 
    item.innerHTML=
    `${transaction.text}<span>${sign} Rs: ${Math.abs(transaction.amount)}</span><button class="delete-btn onclick="removeTransaction(${transaction.id})>X</button>`
list.appendChild(item);

}

const localStorageTransaction=JSON.parse(
    localStorage.getItem('transactions')
);
//localstorage is similar to cookie
let transactions=localStorage.getItem("transactions")!==null?localStorageTransaction: [];

function add(e){
    e.preventDefault();
   if(text.nodeValue.trim()===''||amount.value.trim()==='')
        alert("Please add text & amount")
    else{
        const transaction={
            id:generateID(),
            text:text.value,
            amount:+amount.value
        };
        transactions.push(transaction);
        addTransactioDOM(transaction);
        updateValues();
        updateLocalStorage();
        text.value='';
        amount.value=''
    }

}
//upadte the balance,income,expense
//map used to transerve for every element of an array
function updateValues(){
    const amounts=transactions.map(t=ransaction=>transaction.amount);
    //[50000,-10000,-10000,-1000] output of amounts array
    //console.log(amounts);
    const total=amounts.reduce((sum,item)=>(sum+=item),0).toFixed(2);
    const income=amounts
                    .filter(item=>item>0)//[50,10]
                    .reduce((sum,item)=>(sum+=item),0)//[60]
                    .toFixed(2);//[60.00]
    const expense=(amounts
                    .filter(item=>item<0)
                    .reduce((sum,item)=>(sum+=item),0)*-1)
                    .toFixed(2);
    balance.innerText=`Rs ${total}`;
    money_plus.innerText=`Rs ${income}`;
    money_minus.innerText=`Rs ${expense}`;
}

function removeTransaction(id){
    transactions=transactions.filter(transaction=>transaction.id !== id);
    updateLocalStorage();
    init();
}
//update local storage transaction
function updateLocalStorage(){
    localStorage.setItem('transactions',JSON.stringify(transactions));
}
//init app
function init(){
    list.innerHtml=''
    transactions.forEach(addTransactioDOM);
}
init();
form.addEventListener('submit',addTransaction);

