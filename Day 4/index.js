setInterval(() =>{
    d= new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hrotation=30*h+m/2;
    mrotation=6*m;
    srotation=6*s;
    hr.style.transform=`rotate(${hrotation}deg)`;
    mn.style.transform=`rotate(${mrotation}deg)`;
    sc.style.transform=`rotate(${srotation}deg)`;
},1000);