// accessing box
let box2_cm = document.getElementById("box2_cm");
let box2_ft = document.getElementById("box2_ft");
let box2_in = document.getElementById("box2_in");
let box2 = document.getElementById("box2");

let weight_unit = document.getElementById("weight_unit");
let weight = document.getElementById("weight");


//    ------------------------------------------for changing units-----------------------------------------
// for changing into metric units        
function func1() {
    box2_ft.style.display = "none";
    box2_in.style.display = "none";

    box2_cm.style.display = "flex";

    weight.value="";
    // change unit of weight into kg
    weight_unit.innerHTML = "kg";
    weight.placeholder = "kilograms";
}

// for changing into us/uk  units
function func2() {
    box2.style.height = "120px";
    // make display:none of metric units(cm) 
    box2_cm.style.display = "none";
    // make display:flex of us/uk units(ft,in) 
    box2_ft.style.display = "flex";
    box2_in.style.display = "flex";

    weight.value="";

    // change unit of weight into lb
    weight_unit.innerHTML = "lb";
    weight.placeholder = "pounds";
}
//    ------------------------------------------calculator-----------------------------------------------
function Submit() {
    let unit = document.getElementsByName("units");

    if (unit[0].checked) {
        submit1();
    }
    else {
        submit2();

    }

}
//    ------------function for displaying bmi range---------------
function bmi_range(bmi) {
    // input tag
    let bmi_category = document.getElementById("bmi_category");
    let healthRisk = document.getElementById("healthRisk");

    if (bmi <= 18.4) {
        bmi_category.value = "Underweight";
        healthRisk.value = "Malnutrition risk";
    } else if (bmi > 18.4 && bmi <= 24.9) {
        bmi_category.value = "Normal weight";
        healthRisk.value = "Low risk";
    } else if (bmi > 24.9 && bmi <= 29.9) {
        bmi_category.value = "Overweight";
        healthRisk.value = "Enchanced risk";
    } else if (bmi > 29.9 && bmi <= 34.9) {
        bmi_category.value = "Moderately obese";
        healthRisk.value = "Medium risk";
    } else if (bmi > 34.9 && bmi <= 39.9) {
        bmi_category.value = "Severely obese";
        healthRisk.value = "High risk";
    } else if (bmi > 39.9) {
        bmi_category.value = "Very severely obese";
        healthRisk.value = "Very High risk";
    }

}
//    ------------calculate in metric units (cm,kg)---------------   
function submit1() {
    let bmi_body = document.getElementById("box5");
    let bmi_value = document.getElementById("bmi_value");

    let height_cm = document.getElementById("height_cm");


    let height_cm_value = height_cm.value;
    let weight_value = weight.value;
    // console.log(height_cm_value);
    // console.log(weight_value);

    let bmi = Math.round((weight_value / (height_cm_value ** 2)) * (10 ** 4));
    // console.log(bmi);

    bmi_body.style.display = "flex";
    bmi_value.value = bmi;
    bmi_range(bmi);

}
//    ------------calculate in uk/us units--------------
function submit2() {
    let bmi_body = document.getElementById("box5");
    let bmi_value = document.getElementById("bmi_value");

    let height_ft = document.getElementById("height_ft");
    let height_in = document.getElementById("height_in");

    let height_ft_value = height_ft.value;
    let height_in_value = height_in.value;
    let weight_value = weight.value;

    let height = Number(height_ft_value * 12) + Number(height_in_value) ;            
    let bmi = Math.round((weight_value / (height ** 2)) * 703);
    // console.log(bmi);

    bmi_body.style.display = "flex";
    bmi_value.value = bmi;
    bmi_range(bmi);

}

//reset 
// function reset() {
//     let bmi_body = document.getElementById("box5");
//     bmi_body.style.display = "flex";


//     document.location.reload();
// }