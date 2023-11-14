const axios = require("axios")
// horas = *(60*60*1000)
// minutos = *(60*1000)
// segundos = *(1000)
const employeesTime = 5 * (60 * 60 * 1000); // hours
const signingsTime = 5 * (60 * 1000); // minutes
const customersTime = 5 * (60 * 60 * 1000); // hours


async function employes() {
    axios.get("http://localhost:3333/syncEmployees", { timeout: 30000 })
    console.log("Employee sync sent...")
}

async function signings() {
    axios.get("http://localhost:3333/syncSignings", { timeout: 30000 })
    console.log("Signings sync sent...")
}

async function customers() {
    axios.get("http://localhost:3333/syncCustomers", { timeout: 30000 })
    console.log("Customers sync sent...")
}

async function bucle() {
    await setInterval(() => {
        employes()
    }, employeesTime);

    await setInterval(() => {
        signings()
    }, signingsTime);

    await setInterval(() => {
        customers()
    }, customersTime);

}

// bucle()
// employes()
customers()