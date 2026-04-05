/*function signature/sample */
function validOtp(otp) {
    let length = otp.length;

    let hasuppercase = false;
    let hasnumber = false;

    for ( let i =0; i < length; i++){
        let character = otp[i];
        // console.log(character);
    }
    if ( character >= "0" && character <= "9"){
        hasNumber = true;
    }
    if ( character >= "A" && character <= "z"){
        hasuppercase = true;
    }
    console.log(otp,length,hasnumber,hasuppercase);
}
let output = validOtp("ph-10985")

