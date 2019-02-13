var str = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.';
var arr = [];
for(var i=0;i<str.length; i++)
  if(str[i]==="a"){
    arr.push(i);
  }
  console.log(arr);