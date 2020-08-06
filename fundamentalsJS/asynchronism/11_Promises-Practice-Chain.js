//Test chain of promises
let users = [
  { id: 1, name: "Gino" },
  { id: 2, name: "Nataly" },
  { id: 3, name: "Evelyn" },
  { id: 4, name: "Dereck" },
];
let phoneNumbers = [
  { id: 1, number: 123123123 },
  { id: 2, number: 9636963696 },
  { id: 3, number: 852588558 },
  { id: 4, number: 7414717177 },
];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    let user = users.find((user) => user.id === id);
    if (user) {
        console.log(`User ${id} found: ${user.name}`)
        resolve(  getPhone(id) )
        //resolve(user);
    } else {
      reject(`User ${id} not found`);
    }
  });
};

const getPhone = (id) => {
  return new Promise((resolve, reject) => {
    let phone = phoneNumbers.find((user) => user.id === id);
    if (phone) {
      resolve(phone);
    } else {
      reject(`Phone for ${id} not found`);
    }
  });
};

let ident = 5;
let promise1 = getUser(ident);
promise1
  .then((user) => {
      return user
  }).then(phone => {
    //console.log(`User ${ident} found: ${user.name}`)
    console.log(`Phone for ${ident} found: ${phone.number}`)
  })
  .catch((err) => console.error(err));


/*  
let promise2 = getPhone(ident);
promise2
  .then((phone) => console.log(`Phone for ${ident} found: ${phone.number}`))
  .catch((err) => console.error(err));
*/