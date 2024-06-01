export default function Header() {
    return (
        <header className="w-full h-[50px] fixed z-1000" id="menu-navbar">
            <menu>
                <ul className="flex justify-center lg:justify-start lg:pl-[300px] items-center lg:gap-12 pt-6 gap-4">
                    <li className="hover:text-[#995706] hover:cursor-pointer">Home</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer">O Escritorio</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer">Áreas de Atuacao</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer">Contato</li>
                </ul>
            </menu>
        </header>
    )
}