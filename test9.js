var a=[100,200,300,500,30.50,100,600,700,800,1000,1200,1300]
 var b=a.filter(function(check){
	var c=check<1000 && check>500
	  return c
 })
 document.write(b)