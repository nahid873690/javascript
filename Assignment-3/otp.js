function validOtp(otp) {
        let length = otp.length
        if( typeof validOtp !== 'string' ){
            return Invalid;
        }
         
    for ( let i =0; i < length; i++){
        let character = otp[i];
        if ( length === 8){
            return true;
        }
        else{
            return false;
        }
    }
    


}