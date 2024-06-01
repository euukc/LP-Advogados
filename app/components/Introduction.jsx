import React from "react"

export default function Introduction(){
    return (
        <section className="presentation w-full lg:h-[900px] bg-red-400 relative mt-[-50px]">
            <div className="w-[78%] lg:w-[50%] flex items-center flex-col h-full pt-[200px] gap-[10px]"> 
                <div className="w-full flex justify-center items-center"> 
                    <h1 className="text-[25px] lg:text-[70px]">MAYA MANUELA <br /> CANTO DI CAMELLI</h1>
                </div>
                <div className="w-full flex justify-center lg:pr-[133px]">
                    <span className="flex lg:justify-start items-center lg:mr-[165px]">Advocacia Especializada</span>               
                    
                </div>
                <div className="w-full justify-center text-[10px] lg:text-[20px] lg:pt-[30px] flex">
                    <button className="flex lg:justify-start items-center border-2-transparent rounded-lg p-2 bg-[#995706]">MARQUE SUA CONSULTA POR WHATSAPP</button>               
                    
                </div>
            </div>

        </section>
    )
}