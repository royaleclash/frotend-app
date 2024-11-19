const API_URL="http://localhost:3000/api/Hamburger";

//obtener todos las Hamburguesas

export const getHamburger= async () => {
    const response = await fetch(API_URL);
    return response.json();

}

//obtener hamburguesa por ID

export const getHamburgerByID = async (id) =>{
    const response = await fetch (`${API_URL}/${id}`);
};

//crear una hamburguesa 

export const addHamburger = async (Hamburger) =>{
    const response = await fetch (API_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Hamburger)
    });
    return response.json();
};

//actualizar una hamburguesa 

export const updateHamburger = async (id,Hamburger) =>{
    const response = await fetch (`${API_URL}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Hamburger)
    });
    return response.json();
};

//borrar una hamburguesa 

export const deleteHamburger = async (id) =>{
    const response = await fetch (`${API_URL}/${id}`,{
        method: "DELETE",
    });
};
