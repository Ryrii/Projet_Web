const createUser = document.querySelector('.createUser')
const connect = document.querySelector(".connect")
const check_login = document.querySelector(".check_login")
const getList = document.querySelector(".getList")


createUser.addEventListener("click",async ()=>{
    try {
    const response = await fetch("http://localhost:3000/userll", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            email: "ryry@gmail.com",
            password: "ryry@gmail.com"
        })


      })
    const data = await response.json()
    console.log(data)
    	

  } catch (err) {
    console.error(err)
  }
})

connect.addEventListener("click",async ()=>{
    try {
    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            email: "cperois@protonmail.com",
            password: "password"
        })


      })
    const data = await response//.json()
    console.log(data)
    	

  } catch (err) {
    console.error(err)
  }
})
check_login.addEventListener("click",async ()=>{
    try {
    const response = await fetch("http://localhost:3000/check_login", {
        method: "GET",
        headers:{"Content-Type": "application/json"}

      })
    const data = await response.json()
    console.log(data)
    	

  } catch (err) {
    console.error(err)
  }
})
getList.addEventListener("click",async ()=>{
    try {
    const response = await fetch("http://localhost:3000/list", {
        method: "GET",
        headers:{"Content-Type": "application/json"}

      })
    const data = await response.json()
    console.log(data)
    	

  } catch (err) {
    console.error(err)
  }
})


// try {
//     const response = await fetch("http://localhost:3000/use", {
//         method: "POST",
//         headers:{"Content-Type": "application/json"},
//         body: JSON.stringify({
//             email: "ryry@gmail.com",
//             password: "ryry@gmail.com"
//         })


//       })
//     const data = await response.json()
//     console.log(data)
    	

//   } catch (err) {
//     console.error(err)
//   }