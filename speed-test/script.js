function checkSpeed(){
    let spd = document.getElementById('spd')
    let res = document.getElementById('res')
    let speed = parseInt(spd.value)
    let fine = (speed - 80) * 3.25
    if (spd.value < 0 || spd.value.length == 0 || spd.value > 200){
        window.alert('ERROR! Not a valid input!')
        } 
        
        else if (spd.value > 80){
            document.body.style.backgroundColor = '#fd5f5f'
            res.innerHTML = `The vehicle was caught driving above the limit by ${speed - 80} kilometers!<br>The fine price is ${fine}U$D`
        } 
        
        else{
            document.body.style.backgroundColor = '#3e69c5'
            res.innerHTML = `The vehicle was driving at a safe speed.<br>No fine needed to be applied.`
        }
    }