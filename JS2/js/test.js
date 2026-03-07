const getUserNameFromEmail = email => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("payerOne@SomeRandomEmail.com"));