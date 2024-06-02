import Image from "next/image"

export default function Contato(){
    return (
        <section className="w-full h-[300px] bg-[#995706] text-black flex justify-center items-center" id="section-contato">
            <div className="w-[60%] flex flex-col gap-2 px-6">
                <h1 className="lg:text-[30px] text-[20px]">Fale Conosco</h1>
                <h2> Entre em contato com o escritório por meio do e-mail, telefone ou WhatsApp</h2>
                <span>(11) 99999999</span>
                <span>contato@contato.com.br</span>

                <button className="border-2-transparent rounded-lg p-2 bg-[#382c1e] mt-6 text-white">
                    CHAME NO WHATSAPP
                </button>
            </div>
            <div className="w-[40%] lg:w-[60%] flex justify-center items-center">
                <Image src="/deusa-justica.jpg" width={260} height={200} className="rounded-lg shadow-md"/>
            </div>

        </section>
    )
}