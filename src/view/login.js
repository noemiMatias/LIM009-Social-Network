
export default() => {
    const signIn = `
    <form>
     <input id ="signIn" type="email" placeholder="email"/>
     <input id ="password" type="password" placeholder="contraseña"/>
     <button type = "button" > LOGIN </button>
    </form>`;

    const divElement = document.createElement('div');
    divElement.innerHTML= signIn;
     return divElement;
}