import Formulario_User from "./Formulario_User"

export default function Formulario(){
    return(
        <>
            <div id="Main__Containter" className="w-3/6 flex justify-center m-auto mb-4     ">    
                <label for="countries" class="content-center block m-2 text-xl font-medium text-white dark:text-white">Selecciona tu provincia</label>
                <select id="countries" class="w-1/2 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Barcelona</option>
                    <option>Gerona</option>
                    <option>Tarragona</option>
                    <option>Lérida</option>
                </select>
            </div> 
            <Formulario_User></Formulario_User>     
        </>
    )
}