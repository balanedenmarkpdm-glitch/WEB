const message = document.getElementById("message")
const message1 = document.getElementById("message1")
const Button = document.getElementById("loadBtn")
const Button1 = document.getElementById("loadBtn1")
const profile = document.getElementById("profile")
const grade = document.getElementById("grade")
const schedule = document.getElementById("schedule")

Button.addEventListener("click", function(){
 Button1.style.backgroundColor = "green"


})





Button1.addEventListener("click", function(){
    
  

    function showMessage1(){
        return new Promise(function(resolve){
            setTimeout(function(){
                
                resolve("Initialize....")
            }, 2000)
        })
    }
    
    Button1.addEventListener("click", function(){



          message1.style.webkitTextFillColor = "green"

        message1.innerHTML = "Checking Images... "
    
        showMessage1()
    
        .then(function(result){
            message1.innerHTML = result
     
            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("DecryptImages....")
                }, 2000)
    
            })
            .then(function(result){
                message1.innerHTML = result
                
                return new Promise(function(resolve){
                    setTimeout(function(){
                        resolve("Images Show")
                    },3000)
                })
            })
            .then(function(result){
                message.innerHTML = result
            })
        })
    })
    
})
