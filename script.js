function changebackgroundcolor(color){
    document.body.style.backgroundColor = color;
}

document.getElementById('red').addEventListener('click',function()
{
    changebackgroundcolor('red');
});
document.getElementById('orange').addEventListener('click',function()
{
    changebackgroundcolor('orange');
});
document.getElementById('green').addEventListener('click',function()
{
    changebackgroundcolor('green');
});
document.getElementById('blue').addEventListener('click',function()
{
    changebackgroundcolor('blue');
});