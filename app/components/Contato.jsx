import Image from "next/image"

export default function Contato(){
    return (
        <section className="w-full h-[400px] bg-white text-black flex pt-[30px]">
            <div className="w-[50%] flex flex-col justify-center items-center gap-2">
                <h1 className="lg:text-[30px] text-[20px]">Fale Conosco</h1>
                <h2> Entre em contato com o escritório por meio do e-mail, telefone ou WhatsApp</h2>
                <span>(11) 99999999</span>
                <span>contato@contato.com.br</span>

                <button className="border-2-transparent rounded-lg p-2 bg-[#995706] mt-6 text-white">
                    CHAME NO WHATSAPP
                </button>
            </div>
            <div className="w-[50%] flex justify-center items-center">
                <Image src="/lawyer-1.jpg" width={200} height={200}/>
            </div>

        </section>
    )
}