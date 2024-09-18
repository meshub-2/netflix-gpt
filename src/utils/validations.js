export const Validate = (email, password, name) => {
    if (name) {
        if (!/^[a-zA-Z ]+$/.test(name)) return "Invalid Name Format";
    }
    if (email) {
        const testResult = /^\S+@\S+\.\S+$/.test(email);
        if (!testResult) return "Invalid Email";
    }
    if (password) {
        const isStrongPassword =
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
                password,
            );
        if (!isStrongPassword) return "Invalid Password";
    }
    if (name?.length < 3 || name?.length > 20) return "Name is required";
    if (!email) return "Email is required";
    if (!password) return "Password is required";

    return null;
};
