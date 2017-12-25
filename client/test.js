// Session.set('ts', Date.now())
// let rerun = 0
// this.trackerHandler = Meteor.autorun(() => {
//   const ts = Session.get('ts')
//   rerun ++
//   console.log('tracker rerun', rerun)
//   let count = Test.find().count()
//   console.log('count test before sub', count)
//   this.subHandler = Meteor.subscribe('test', ts)
//   console.log(this.subHandler)
//   console.log('subscription status', this.subHandler.ready())
//   if (!this.subHandler.ready())
//     return

//   count = Test.find().count()
//   console.log('count test after sub', count)
// })
