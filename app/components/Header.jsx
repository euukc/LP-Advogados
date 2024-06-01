export default function Header() {
    return (
        <header className="w-full h-[50px] relative top-0 z-10" id="menu-navbar">
            <menu>
                <ul className="flex justify-center lg:justify-start lg:pl-[300px] items-center lg:gap-12 pt-6 gap-4">
                    <li className="hover:text-[#995706] hover:cursor-pointer">Home</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer">O Escritório</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer">Áreas de Atuação</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer">Contato</li>
                </ul>
            </menu>
        </header>
    )
}