Users.remove({})
Projects.remove({})

for (i = 1; i <= 20; i++) {
  const userId = Users.insert({ name: faker.name.findName() })
  Projects.insert({ userId, name: faker.lorem.words() })
}

Meteor.publish('users', function () {
  return Users.find()
})

Meteor.publish('user', function () {
  return Users.find({}, { limit: 1 })
})

Meteor.methods({
  users() {
    return Users.find().fetch()
  }
})
