
export const saveToLocalStorage = ({ key, value }) => {

    const newLogin = {
        id: crypto.randomUUID(),
        email: key,
        password: value
    }

    return localStorage.setItem("login", JSON.stringify(newLogin));
}

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}