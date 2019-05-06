
export default() => {
    const register = `
    <form>
     <input id ="register" type="email" placeholder="email"/>
     <input id ="passwordRegister" type="password" placeholder="contraseña"/>
     <button type = "button" > Registrarse </button>
    </form>`;

    const divElement = document.createElement('div');
    divElement.innerHTML= register;
     return divElement;
}