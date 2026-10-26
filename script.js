function clear_1()
{
    document.getElementById("enter").innerText = "";
    document.getElementById("display").innerText = "";
}
function fun_9()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "9";
    else
        input.innerText = input.innerText + "9";
}
function fun_8()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "8";
    else
        input.innerText = input.innerText + "8";
}

function fun_7()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "7";
    else
        input.innerText = input.innerText + "7";
}
function fun_6()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "6";
    else
        input.innerText = input.innerText + "6";
}
function fun_5()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "5";
    else
        input.innerText = input.innerText + "5";
}
function fun_4()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "4";
    else
        input.innerText = input.innerText + "4";
}
function fun_3()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "3";
    else
        input.innerText = input.innerText + "3";
}
function fun_2()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "2";
    else
        input.innerText = input.innerText + "2";
}
function fun_1()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "1";
    else
        input.innerText = input.innerText + "1";
}
function fun_0()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "0";
    else
        input.innerText = input.innerText + "0";
}
function fun_add()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "+";
    else
        input.innerText = input.innerText + "+";
}
function fun_sub()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "-";
    else
        input.innerText = input.innerText + "-";
}
function fun_div()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "/";
    else
        input.innerText = input.innerText + "/";
}
function fun_multi()
{
    let input = document.getElementById("enter");
    if(input.innerText === "")
        input.innerText = "*";
    else
        input.innerText = input.innerText + "*";
}

function calculate()
{
    let input = document.getElementById("enter").innerText;
    let result = document.getElementById("display");
    if(input.startsWith("/") || input.startsWith("*"))
        result.innerText = "Error Can't Start With * or /";
    else if(input.endsWith("/0"))
    {
        result.innerText = "Undeterminate Form";
    }
    else
        result.innerText = eval(input);
}