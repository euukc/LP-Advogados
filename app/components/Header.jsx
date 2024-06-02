"use client"

import { useEffect } from "react";

export default function Header() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => { 
        const menu = document.querySelector('#menu-navbar');
        menu.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                scrollToSection(e.target.dataset.section);
            }
        });
    }, []);





    return (
        <header className="w-full h-[50px] relative top-0 z-10" id="menu-navbar">
            <nav>
                <ul className="flex justify-center lg:justify-start lg:pl-[300px] items-center lg:gap-12 pt-6 gap-4">
                    <li className="hover:text-[#995706] hover:cursor-pointer" data-section="section-home">Home</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer" data-section="section-escritorio">O Escritório</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer" data-section="section-areas">Áreas de Atuação</li>
                    <li className="hover:text-[#995706] hover:cursor-pointer" data-section="section-contato">Contato</li>
                </ul>
            </nav>
        </header>
    )
}