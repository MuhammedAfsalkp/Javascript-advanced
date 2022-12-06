 function updateOperatingHour() {
    const dayMap = {
        'sunday':0,
        'monday':1,
        'tuesday':2,
        'wednesday':3,
        'thursday':4,
        'friday':5,
        'saturday':6,
    }
    const rest = [{
        _id:'1',
        operatingHours:[{
            startHour:9,
            startMinute:0,
            endHour:10,
            endMinute:0
        }],
        operatingDays:[0,1,2,3,4,5,6]
        },
        {
            _id:'2',
            operatingHours:[{
                startHour:5,
                startMinute:0,
                endHour:8,
                endMinute:0
            }],
            operatingDays:[1,2,3]
     },
     {
        _id:'3',
        operatingHours:[],
        operatingDays:[]
 }];
    console.log(rest, 'TEST', rest.length);
    rest.forEach(async (restaurant, index, obj) => {
      console.log(restaurant._id, 'check');
      const { _id } = restaurant;
      if (
        restaurant.operatingHours &&
        Array.isArray(restaurant.operatingHours) &&
        restaurant.operatingHours.length > 0
      ) {
        const startHour = restaurant.operatingHours[0].startHour;
        const endHour = restaurant.operatingHours[0].endHour;
        const startMinute = restaurant.operatingHours[0].startMinute;
        const endMinute = restaurant.operatingHours[0].endMinute;
        const timeObj = { startHour, startMinute, endHour, endMinute };

        restaurant.operatingHours = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
        }
        for (const day in dayMap){
        if(restaurant.operatingDays.includes(dayMap[`${day}`])){
            console.log("INCLUDE",dayMap[`${day}`])
            restaurant.operatingHours[`${day}`] = [...timeObj];
        }
    }
        // restaurant.operatingHours = {
        //   monday: [{ startHour, startMinute, endHour, endMinute }],
        //   tuesday: [{ startHour, startMinute, endHour, endMinute }],
        //   wednesday: [{ startHour, startMinute, endHour, endMinute }],
        //   thursday: [{ startHour, startMinute, endHour, endMinute }],
        //   friday: [{ startHour, startMinute, endHour, endMinute }],
        //   saturday: [{ startHour, startMinute, endHour, endMinute }],
        //   sunday: [{ startHour, startMinute, endHour, endMinute }],
        // };
      } else {
        restaurant.operatingHours = {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        };
      }
    //   await restaurant.save();
    //   // delete restaurant.operatingDays;
    //   let c = 0;
    //   if (restaurant.operatingDays) {
    //     console.log(c++, 'DEL');
    //     await this.model.updateOne({ _id }, { $unset: { operatingDays: 1 } });
    //   }
    });
    return rest;
  }
 const op= updateOperatingHour();
  console.log(JSON.stringify(op));