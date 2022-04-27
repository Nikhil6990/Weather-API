document.body.style.backgroundImage=url('weat.jpg');
async function sample(){
    let city= document.getElementById("mytext").value;
    console.log(city);
    let token="260397baa2384ce71ce0a1178d0ea291";
     let weatherApi="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+token+"&units=metric";
     let prom=await fetch(weatherApi);
 
     let res=await prom.json();
 
     console.log(res);
     document.getElementById("myhead1").innerHTML="Current Temperature in "+city+" is "+res.main.temp+"<sup>o</sup>C";
   //console.log("hellow");
 }
 
 
 
 async function sample2(){
     let city= document.getElementById("mytext2").value;
     console.log(city);
     let token="260397baa2384ce71ce0a1178d0ea291";
      let weatherApi="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+token+"&units=metric";
      let prom=await fetch(weatherApi);
  
      let res=await prom.json();
  
        let data=res.list;
     //  data.forEach(element => {
     //      console.log(element.main.temp);
     //  });
      let arr=[];
      for(let i=0;i<data.length;i=i+8){
          let sum=0;
          for(let j=i;j<i+8;j++){
              sum+=data[i].main.temp;
          }
          sum=sum/8;
          arr.push(sum);
      }
      console.log(arr);
      console.log(res);
      charts(arr);
      
    //  document.getElementById("mypara2").innerHTML="Current Temperature in "+city+" is "+res.main.temp;
    //console.log("hellow");
  }
 
 
  function charts(arr){
     const ctx = document.getElementById('myChart').getContext('2d');
     const myChart = new Chart(ctx, {
         type: document.getElementById("mytext3").value,
         data: {
             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
             datasets: [{
                 label: '# of Votes',
                 data: arr,
                 backgroundColor: [
                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)'
                 ],
                 borderColor: [
                     'rgba(255, 99, 132, 1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)'
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }

     });
     document.getElementById("myChart").style.backgroundColor="white";
  }