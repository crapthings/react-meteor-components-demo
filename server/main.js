Users.remove({})

Accounts.createUser({
  username: 'demo',
  password: 'demo',
})

for (i = 1; i <= 20; i++) {
  const userId = Users.insert({ name: faker.name.findName() })
}

Meteor.publish('users', function () {
  return Users.find({})
})

Meteor.publish('user', function () {
  return Users.find({ name: { $exists: true }}, { limit: 1 })
})

Meteor.methods({
  users() {
    return Users.find().fetch()
  },

  addUser(name) {
    return Users.insert({ name: name || faker.name.findName() })
  },
})
