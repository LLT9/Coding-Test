const { keyv } = require('../../config/keyv')
const adminData = require('../../json/admin.json')

async function adminDataSet() {
  await keyv.set('name', adminData.name)
  await keyv.set('password', adminData.pass)
  console.log('admin data is already set.')
}

adminDataSet()
