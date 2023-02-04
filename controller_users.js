const { faker } = require('@faker-js/faker');

class User {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    for (let index = 0; index < 3; index++) {
      let name = faker.name.findName();
      let age = faker.datatype.number({ min: 18, max: 100 });
      this.users.push({
        id: faker.datatype.uuid(),
        name: name,
        age: age,
        email: faker.internet.email(`${name}`, `${age}`),
        phone: faker.phone.number('+55 ## 9########'),
        // job: faker.name.jobTitle(),
      });
    }
  }

  create(user) {
    // const newUser = {
    //   id: faker.datatype.uuid(),
    //   ...user,
    // }
    const { name, age, email, phone } = user;
    const newUser = {
      id: faker.datatype.uuid(),
      name,
      age,
      email,
      phone,
    };

    this.users.push(newUser);
  }

  find() {
    return this.users;
  }

  findOne(id) {
    const user = this.users.find((item) => {
      return item.id === id;
    });
    return user ? user : 'Nao achei o usuario';
  }

  update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      return 'nao chei o usuario..';
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      return 'Nao achei o usuario';
    }
    this.users.splice(index, 1);
    return 'Usurio apagado';
  }
}
console.log('');

module.exports = User;
