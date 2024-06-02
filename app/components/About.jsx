import Image from "next/image"

export default function About() {
    return (
        <section className="w-full lg:h-full h-full bg-[#995706] py-[20px]" id="section-escritorio">
            <div className="w-full justify-center items-center h-full flex flex-col lg:flex-row gap-[20px]">
                <div className="w-[80%] lg:w-[25%] lg:h-[320px] h-[150px] bg-white rounded-lg flex gap-8 px-[10px] pt-4">
                    <div className="text-black">
                        <Image src="/law-icon.png" alt='Logo Advocacia' width={80} height={100} />
                    </div>
                    <div className="text-black flex flex-col gap-4">
                        <h1><strong>Experiência e Excelência</strong></h1>
                        <h2>Profundo conhecimento da legislação e das jurisprudências relacionadas à sua área de atuação.</h2>
                    </div>
                </div>
                <div className="w-[80%] lg:w-[25%] lg:h-[320px] h-[150px] bg-white rounded-lg flex gap-8 px-[10px] pt-4">
                    <div className="text-black">
                        <Image src="/law-icon.png" alt='Logo Advocacia' width={80} height={100} />
                    </div>
                    <div className="text-black flex flex-col gap-4">
                        <h1><strong>Advocacia Moderna</strong></h1>
                        <h2>Sistema de gerenciamento de processos que permite acompanhar o progresso dos casos rotineiramente.</h2></div>
                </div>
                <div className="w-[80%] lg:w-[25%] lg:h-[320px] h-[150px] bg-white rounded-lg flex gap-8 px-[10px] pt-4">
                    <div className="text-black">
                        <Image src="/law-icon.png" alt='Logo Advocacia' width={80} height={100} />
                    </div>
                    <div className="text-black flex flex-col gap-4">
                        <h1><strong>Comodidade do Cliente</strong></h1>
                        <h2>Disponível o atendimento totalmente online, oferecendo a opção de resolver seu problema sem precisar sair de casa.</h2>
                    </div>
                </div>
            </div>

            <div className="w-full h-[900px] lg:h-[900px] bg-[#995706] flex lg:flex-row flex-col justify-center items-center pt-12 lg:mb-[15px]">
                <div className="w-[80%] lg:w-[500px] h-[500px] lg:h-[800px] bg-[#a07746] flex items-center justify-center shadow-lg">
                    <Image src="/lawyer-1.jpg" width={300} height={1200} className="rounded-lg" />
                </div>
                <div className="w-[80%] lg:w-[500px] h-[500px] lg:h-[800px] bg-white flex flex-col text-black items-center justify-center pt-[20px] px-[20px]">
                    <span className="text-[20px] lg:text-[60px] text-left mb-8 rounded-b-lg">A Profissional</span>
                    <h1><strong>Maya Manuela Canto Di Camelli</strong></h1>
                    <h2>Advogada</h2>
                    <h3>10252 OAB/SP</h3>

                    <span className="mt-8 text-justify pb-4">Com uma trajetória profissional de cinco anos, tenho o privilégio de oferecer assistência jurídica especializada em diversas áreas do direito. Minha atuação abrange casos de direito de família, trabalhista, previdenciário, criminal e penal militar. Ao longo da minha jornada, tenho dedicado minha paixão e conhecimento jurídico para garantir a defesa dos direitos e interesses dos meus clientes. Com comprometimento e ética, estou aqui para fornecer orientação legal confiável e representação eficaz, buscando sempre a melhor solução para cada situação.</span>
                </div>

            </div>

        </section>
    )
}