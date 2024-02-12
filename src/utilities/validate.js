export const Checkvalidate=(email,password)=>{
    const isEmailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!isEmailvalid) return "Email id is not valid"
    if(!isPasswordvalid) return "Password is not valid"
    return null;
};