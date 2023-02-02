export default function Navbar(){
    return (
        <>
            <div id="Navbar" className="flex justify-end flex-row space-x-4">
                <div className="p-8  "><img className="max-h-16" src="src/assets/photo_perfil.jpg"></img></div>
                <div className="p-8  "><a className="text-2xl font-black text-gray-200 font-roboto" href="#">About me</a></div>
                <div className="p-8  "><a className="text-2xl font-black text-gray-200 font-roboto" href="#">Contact</a></div>
                <div className="p-8  "><a className="text-2xl font-black text-gray-200 font-roboto" href="#">Menu</a></div>
            </div>
        </>
    )
}       