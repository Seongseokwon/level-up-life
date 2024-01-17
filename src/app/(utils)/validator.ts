export function emailValidator(email: string) {
    console.log('Email Validator Call');
    const emailReg =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailReg.test(email);

}

export function passwordValidator(password: string) {
    console.log('Password Validator Call');
    const passwordReg = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`\-|=]).{8,}$/;
    return passwordReg.test(password);
}