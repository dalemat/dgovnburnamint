import Logo from "./logo"

export default function Header({handleConnect, address}){
    return (
        <div className="flex justify-between w-full font-sans bg-white items-center p-6 px-6 md:px-20 h-20">
            <img className="h-4 md:h-5" src="/logo.png" alt="burnamint logo" />
            <button disabled={!!address} onClick={handleConnect} className="h-6 text-sm md:text-base md:h-8 px-2 shadow-md hover:shadow-lg rounded-md text-greenish hover:bg-fade-green hover:text-white border border-light-brown font-sans">{address?`${address.slice(0,15)}...`:'CONNECT WALLET'}</button>
        </div>
    )
}
