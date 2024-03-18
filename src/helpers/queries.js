const URI_Producto = import.meta.env.VITE_API_PRODUCTO;

export const nuevoProductoAPI = async (producto)=>{
    try{
        const respuesta= await fetch(URI_Producto, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}