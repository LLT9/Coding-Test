export async function authenticateAccountAndPassword(account, password) {
  const userData = {
    email: account,
    isAuthenticated: false,
    status: "inactive",
  }

  const adminAccount = "admin"
  const adminPassword = "Admin&8181"

  if (account === adminAccount && password === adminPassword) {
    userData.isAuthenticated = true
    userData.status = "active"
    userData.uid = "HUYFUY24BJKJj"
  } else {
    userData.isAuthenticated = false
    userData.status = "inactive"
  }

  return userData
}
