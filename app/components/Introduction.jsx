"use client"

import React, { useEffect, useState } from "react"

export default function Introduction() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100 && !isVisible) {
                setIsVisible(true);
            } else if (window.scrollY <= 100 && isVisible) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [isVisible]);

    const clickBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    

    return (
        <section className="presentation w-full lg:h-[900px] bg-red-400 relative mt-[-50px]" id="section-home">
            <div className="w-[78%] lg:w-[58%] flex items-center flex-col h-full pt-[200px] gap-[10px]">
                <div className="w-full flex justify-center items-center text-center">
                    <h1 className="text-[25px] lg:text-[70px]">MAYA MANUELA <br /> CANTO DI CAMELLI</h1>
                </div>
                <div className="w-full flex justify-center items-center text-center">
                    <span>Advocacia Especializada em Direito de Família, Previdênciário e Consumidor</span>

                </div>
                <div className="w-full justify-center text-[10px] lg:text-[20px] lg:pt-[30px] flex">
                    <button className="flex lg:justify-start items-center border-2-transparent rounded-lg p-2 bg-[#995706]">QUERO AJUDA ESPECIALIZADA</button>

                </div>
            </div>

                <div className="fixed md:w-[80px] md:h-[80px] md:bottom-[200px] md:left-[400px] left-[190px] lg:left-[1570px] w-[40px] bottom-[60px] sm:w-[60px] cursor-pointer">
                {isVisible && <img src="/back-to-top-icon.png" alt="Botão para Voltar ao Topo da Página" onClick={clickBtn}/>}
            </div>



        </section>
    )
}