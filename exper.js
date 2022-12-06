// let ar=[{id:1,name:'afsal'},{id:2,name:'ansil'},{id:3,name:'anshif'},{id:3,name:'anshif'}]
// ar.map((el,ind,ar)=>{
//     let val=ar.filter((e,i,a)=>{
//         if(ind<=i)return e;
//     })
//     console.log(val)
// })


let dId="v1 singleJourney"
let [vid,journeyType]=dId.split(' ')
console.log(vid,journeyType)
let value=15;


let state ={
    tollName: {
      value: '',
      isValid: false
    },
    faremAmount : {
      value:[ {vehicleId:'v1',vehicleType:'Car/Jeep/Van',singleJourney:'10',returnJourney:'',isValid: false},
      {vehicleId:'v2',vehicleType:'LCV',singleJourney:'',returnJourney:'',isValid: true},
      {vehicleId:'v3',vehicleType:'Truck/Bus',singleJourney:'',returnJourney:'',isValid: true},
      {vehicleId:'v4',vehicleType:' Heavy vehicle',singleJourney:'',returnJourney:'',isValid: true}
    ],
      isValid: false
    }

  }
  let v=state.faremAmount.value
  v.forEach((el,index)=>{
    if(el.vehicleId==vid){
        el[journeyType]=value;
        // el.isValid= true &&  (el.singleJourney.trim().length > 0) && (el.returnJourney.trim().length)
        console.log(el.singleJourney.toString().trim().length > 0,"working")

    }

  })
  state.faremAmount.value=v;
//   console.log(state.faremAmount.value)
  

 
 
