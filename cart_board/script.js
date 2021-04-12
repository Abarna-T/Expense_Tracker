var items=[
    {
        "name":"idly",
        "price":"rs-40"
    },
    {
        "name":"puri",
        "price":"rs-50"
    },
    {
        "name":"chappathi",
        "price":"rs-80"
    },
    {
        "name":"curd",
        "price":"rs-20"
    },
    {
        "name":"dosa",
        "price":"rs-35"
    },
    {
        "name":"rice",
        "price":"rs-70"
    }, 
    {
        "name":"idly",
        "price":"rs-40"
    },
    {
        "name":"puri",
        "price":"rs-50"
    },
    {
        "name":"chappathi",
        "price":"rs-80"
    },
    {
        "name":"curd",
        "price":"rs-20"
    },
    {
        "name":"dosa",
        "price":"rs-35"
    },
    {
        "name":"rice",
        "price":"rs-70"
    }, 
];
// items.forEach((x)=>alert(x.name));
function search_item(){
    document.getElementById("row").innerHTML="";
    var t=document.getElementById("search_bar").value.toLowerCase();
    let check=new RegExp(`^${t}[a-z]*`);
    for(var i=0;i<items.length;i++)
    {
        if(check.test(items[i].name.toLowerCase()))
        {
            var node=document.createElement("div");
            node.setAttribute("id","item_box");
            var name_tag=document.createElement("h4");
            name_tag.setAttribute("id","item_name");
            var price_tag=document.createElement("h2");
            price_tag.setAttribute("id","item_price");

            var namenode=document.createTextNode(items[i].name);
            name_tag.appendChild(namenode);
            var pricenode=document.createTextNode(items[i].price);
            price_tag.appendChild(pricenode);

            node.appendChild(name_tag);
            node.appendChild(price_tag);

            document.getElementById("row").appendChild(node);
        }
}
        if(document.getElementById("row").innerHTML==="")
        {
            var node=document.createElement("h4");
            node.setAttribute("id","result");
            var textNode=document.createTextNode("No result Found");
            node.appendChild(textNode);
            document.getElementById("row").appendChild(node);
        }}
function required_items(){
    for(var i=0;i<items.length;i++)
    {
        var node=document.createElement("div");
        node.setAttribute("id","item_box");
        var name_tag=document.createElement("h4");
        name_tag.setAttribute("id","item_name");
        var price_tag=document.createElement("h2");
        price_tag.setAttribute("id","item_price");

        var namenode=document.createTextNode(items[i].name);
        name_tag.appendChild(namenode);
        var pricenode=document.createTextNode(items[i].price);
        price_tag.appendChild(pricenode);

        node.appendChild(name_tag);
        node.appendChild(price_tag);

        document.getElementById("row").appendChild(node);
    }
}