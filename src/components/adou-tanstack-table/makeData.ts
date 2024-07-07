// makeData.ts

export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  }
  
  export function makeData(count: number): any[] {
    const data: Person[] = [];
  
    for (let i = 0; i < count; i++) {
      const firstName = `First${i + 1}`;
      const lastName = `Last${i + 1}`;
      const age = Math.floor(Math.random() * 80) + 20; // Random age between 20 and 99
      const visits = Math.floor(Math.random() * 100);
      const status = i % 2 === 0 ? 'complicated' : 'single';
      const progress = Math.random() * 100;
  
      data.push({
        firstName,
        lastName,
        age,
        visits,
        status,
        progress,
      });
    }
    const arr = [
      {
          "id": 1,
          "name": "张三",
          "age": 30,
          "gender": "男",
          "email": "zhangsan@example.com",
          "isStudent": false,
          "gpa": 3.7,
          "courses": ["数学", "物理", "化学"],
          "address": {
              "street": "朝阳区",
              "city": "北京",
              "postalCode": "100000"
          }
      },
      {
          "id": 2,
          "name": "李四",
          "age": 25,
          "gender": "女",
          "email": "lisi@example.com",
          "isStudent": true,
          "gpa": 3.9,
          "courses": ["英语", "历史", "地理"],
          "address": {
              "street": "海淀区",
              "city": "北京",
              "postalCode": "100080"
          }
      },
      {
          "id": 3,
          "name": "王五",
          "age": 28,
          "gender": "男",
          "email": "wangwu@example.com",
          "isStudent": false,
          "gpa": 3.5,
          "courses": ["计算机科学", "数据结构", "算法"],
          "address": {
              "street": "东城区",
              "city": "北京",
              "postalCode": "100010"
          }
      },
      {
          "id": 4,
          "name": "赵六",
          "age": 22,
          "gender": "男",
          "email": "zhaoliu@example.com",
          "isStudent": true,
          "gpa": 3.8,
          "courses": ["艺术", "音乐", "哲学"],
          "address": {
              "street": "西城区",
              "city": "北京",
              "postalCode": "100032"
          }
      },
      {
          "id": 5,
          "name": "孙七",
          "age": 23,
          "gender": "女",
          "email": "sunqi@example.com",
          "isStudent": true,
          "gpa": 4.0,
          "courses": ["生物", "化学", "物理"],
          "address": {
              "street": "丰台区",
              "city": "北京",
              "postalCode": "100071"
          }
      },
      {
          "id": 6,
          "name": "周八",
          "age": 27,
          "gender": "男",
          "email": "zhouba@example.com",
          "isStudent": false,
          "gpa": 3.6,
          "courses": ["经济学", "管理学", "会计学"],
          "address": {
              "street": "石景山区",
              "city": "北京",
              "postalCode": "100043"
          }
      },
      {
          "id": 7,
          "name": "吴九",
          "age": 26,
          "gender": "女",
          "email": "wujiu@example.com",
          "isStudent": true,
          "gpa": 3.7,
          "courses": ["文学", "语言学", "社会学"],
          "address": {
              "street": "昌平区",
              "city": "北京",
              "postalCode": "102200"
          }
      },
      {
          "id": 8,
          "name": "郑十",
          "age": 29,
          "gender": "男",
          "email": "zhengshi@example.com",
          "isStudent": false,
          "gpa": 3.4,
          "courses": ["机械工程", "电气工程", "材料科学"],
          "address": {
              "street": "通州区",
              "city": "北京",
              "postalCode": "101100"
          }
      },
      {
          "id": 9,
          "name": "王十一",
          "age": 24,
          "gender": "女",
          "email": "wangshiyi@example.com",
          "isStudent": true,
          "gpa": 3.9,
          "courses": ["心理学", "教育学", "人类学"],
          "address": {
              "street": "顺义区",
              "city": "北京",
              "postalCode": "101300"
          }
      },
      {
          "id": 10,
          "name": "冯十二",
          "age": 31,
          "gender": "男",
          "email": "fengshier@example.com",
          "isStudent": false,
          "gpa": 3.3,
          "courses": ["法学", "政治学", "国际关系"],
          "address": {
              "street": "大兴区",
              "city": "北京",
              "postalCode": "102600"
          }
      },
      {
          "id": 11,
          "name": "陈十三",
          "age": 21,
          "gender": "女",
          "email": "chen13@example.com",
          "isStudent": true,
          "gpa": 4.1,
          "courses": ["计算机科学", "数据结构", "算法"],
          "address": {
              "street": "怀柔区",
              "city": "北京",
              "postalCode": "101400"
          }
      },
      {
          "id": 12,
          "name": "褚十四",
          "age": 32,
          "gender": "男",
          "email": "chu14@example.com",
          "isStudent": false,
          "gpa": 3.2,
          "courses": ["天文学", "地质学", "气象学"],
          "address": {
              "street": "平谷区",
              "city": "北京",
              "postalCode": "101200"
          }
      },
      {
          "id": 13,
          "name": "卫十五",
          "age": 28,
          "gender": "女",
          "email": "wei15@example.com",
          "isStudent": true,
          "gpa": 3.8,
          "courses": ["语言学", "文学", "历史"],
          "address": {
              "street": "密云区",
              "city": "北京",
              "postalCode": "101500"
          }
      },
      {
          "id": 14,
          "name": "蒋十六",
          "age": 29,
          "gender": "男",
          "email": "jiang16@example.com",
          "isStudent": false,
          "gpa": 3.5,
          "courses": ["经济学", "统计学", "市场营销"],
          "address": {
              "street": "延庆区",
              "city": "北京",
              "postalCode": "102100"
          }
      },
      {
          "id": 15,
          "name": "沈十七",
          "age": 27,
          "gender": "女",
          "email": "shen17@example.com",
          "isStudent": true,
          "gpa": 3.9,
          "courses": ["艺术史", "设计", "美术"],
          "address": {
              "street": "房山区",
              "city": "北京",
              "postalCode": "102488"
          }
      },
      {
          "id": 16,
          "name": "韩十八",
          "age": 33,
          "gender": "男",
          "email": "han18@example.com",
          "isStudent": false,
          "gpa": 3.1,
          "courses": ["法医学", "刑事科学", "犯罪心理学"],
          "address": {
              "street": "东城区",
              "city": "北京",
              "postalCode": "100010"
          }
      },
      {
          "id": 17,
          "name": "杨十九",
          "age": 24,
          "gender": "女",
          "email": "yang19@example.com",
          "isStudent": true,
          "gpa": 4.0,
          "courses": ["计算机网络", "操作系统", "数据库"],
          "address": {
              "street": "西城区",
              "city": "北京",
              "postalCode": "100032"
          }
      },
      {
          "id": 18,
          "name": "朱二十",
          "age": 34,
          "gender": "男",
          "email": "zhu20@example.com",
          "isStudent": false,
          "gpa": 3.0,
          "courses": ["建筑学", "城市规划", "环境设计"],
          "address": {
              "street": "海淀区",
              "city": "北京",
              "postalCode": "100080"
          }
      },
      {
          "id": 19,
          "name": "秦二一",
          "age": 23,
          "gender": "女",
          "email": "qin21@example.com",
          "isStudent": true,
          "gpa": 4.2,
          "courses": ["环境科学", "生态学", "生物多样性"],
          "address": {
              "street": "朝阳区",
              "city": "北京",
              "postalCode": "100000"
          }
      },
      {
          "id": 20,
          "name": "尤二二",
          "age": 35,
          "gender": "男",
          "email": "you22@example.com",
          "isStudent": false,
          "gpa": 3.5,
          "courses": ["农业科学", "园艺学", "农学"],
          "address": {
              "street": "丰台区",
              "city": "北京",
              "postalCode": "100071"
          }
      },
      {
          "id": 21,
          "name": "许二三",
          "age": 36,
          "gender": "女",
          "email": "xu23@example.com",
          "isStudent": false,
          "gpa": 3.7,
          "courses": ["兽医学", "动物科学", "食品科学"],
          "address": {
              "street": "石景山区",
              "city": "北京",
              "postalCode": "100043"
          }
      },
      {
          "id": 22,
          "name": "何二四",
          "age": 37,
          "gender": "男",
          "email": "he24@example.com",
          "isStudent": false,
          "gpa": 3.4,
          "courses": ["电子工程", "通信工程", "软件工程"],
          "address": {
              "street": "昌平区",
              "city": "北京",
              "postalCode": "102200"
          }
      },
      {
          "id": 23,
          "name": "吕二五",
          "age": 38,
          "gender": "女",
          "email": "lv25@example.com",
          "isStudent": false,
          "gpa": 3.8,
          "courses": ["护理学", "医学", "药学"],
          "address": {
              "street": "通州区",
              "city": "北京",
              "postalCode": "101100"
          }
      }
  ]
  
  const cars = [
    { id: 1, name: 'Car', model: 'Sedan', features: ['Sunroof', 'Leather Seats'], price: 30000, year: 2020, color: 'Red', mileage: 15000 },
    { id: 2, name: 'Car', model: 'SUV', features: ['All-Wheel Drive', 'Navigation System'], price: 40000, year: 2019, color: 'Blue', mileage: 20000 },
    { id: 3, name: 'Car', model: 'Coupe', features: ['Sport Package', 'Bluetooth'], price: 35000, year: 2021, color: 'Black', mileage: 10000 },
    { id: 4, name: 'Car', model: 'Convertible', features: ['Heated Seats', 'Backup Camera'], price: 45000, year: 2020, color: 'White', mileage: 5000 },
    { id: 5, name: 'Car', model: 'Hatchback', features: ['Rear Spoiler', 'Keyless Entry'], price: 25000, year: 2018, color: 'Green', mileage: 30000 },
    { id: 6, name: 'Car', model: 'Wagon', features: ['Roof Rails', 'Third Row Seat'], price: 28000, year: 2017, color: 'Gray', mileage: 40000 },
    { id: 7, name: 'Car', model: 'Truck', features: ['Tow Package', 'Bed Liner'], price: 50000, year: 2021, color: 'Silver', mileage: 7000 },
    { id: 8, name: 'Car', model: 'Van', features: ['DVD Player', 'Backup Sensors'], price: 32000, year: 2016, color: 'Gold', mileage: 60000 },
    { id: 9, name: 'Car', model: 'Minivan', features: ['Power Sliding Doors', 'Rear Entertainment System'], price: 27000, year: 2022, color: 'Brown', mileage: 8000 },
    { id: 10, name: 'Car', model: 'Electric', features: ['Autopilot', 'Fast Charging'], price: 60000, year: 2023, color: 'White', mileage: 2000 },
    { id: 11, name: 'Car', model: 'Hybrid', features: ['Lane Assist', 'Adaptive Cruise Control'], price: 35000, year: 2020, color: 'Blue', mileage: 12000 },
    { id: 12, name: 'Car', model: 'Crossover', features: ['Blind Spot Monitor', 'Apple CarPlay'], price: 33000, year: 2019, color: 'Red', mileage: 22000 },
    { id: 13, name: 'Car', model: 'Diesel', features: ['Turbocharged', 'Remote Start'], price: 42000, year: 2018, color: 'Black', mileage: 18000 },
    { id: 14, name: 'Car', model: 'Luxury', features: ['Massaging Seats', '360° Camera'], price: 70000, year: 2021, color: 'Silver', mileage: 9000 },
    { id: 15, name: 'Car', model: 'Compact', features: ['Eco Mode', 'Wireless Charging'], price: 24000, year: 2017, color: 'Yellow', mileage: 34000 },
    { id: 16, name: 'Car', model: 'Sport', features: ['Launch Control', 'Performance Tires'], price: 55000, year: 2022, color: 'Blue', mileage: 5000 },
    { id: 17, name: 'Car', model: 'Off-Road', features: ['Skid Plates', 'Locking Differentials'], price: 48000, year: 2019, color: 'Green', mileage: 15000 },
    { id: 18, name: 'Car', model: 'Pickup', features: ['Crew Cab', 'Bed Cover'], price: 52000, year: 2020, color: 'Brown', mileage: 12000 },
    { id: 19, name: 'Car', model: 'Roadster', features: ['Wind Deflector', 'Premium Audio'], price: 62000, year: 2018, color: 'Red', mileage: 8000 },
    { id: 20, name: 'Car', model: 'Supercar', features: ['Carbon Fiber Body', 'Ceramic Brakes'], price: 200000, year: 2023, color: 'Orange', mileage: 1000 },
    { id: 21, name: 'Car', model: 'Classic', features: ['Restored Interior', 'Vintage Radio'], price: 45000, year: 1970, color: 'Purple', mileage: 75000 },
    { id: 22, name: 'Car', model: 'Microcar', features: ['Compact Size', 'City Parking Assistance'], price: 15000, year: 2021, color: 'Pink', mileage: 5000 },
  ];
  
  
    return cars;
    
  }
  