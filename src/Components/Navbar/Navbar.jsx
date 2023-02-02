export default function Navbar(){
    return (
        <>
            <div id="Navbar" className="flex justify-end flex-row bg-red-400">
                <div className="p-8 bg-lime-700"><a className="hover:bg-fuchsia-100" href="#">About me</a></div>
                <div className="p-8"><a className="hover:bg-fuchsia-100" href="#">Contact</a></div>
                <div className="p-8"><a className="hover:bg-fuchsia-100" href="#">Menu</a></div>
            </div>
        </>
    )
}       