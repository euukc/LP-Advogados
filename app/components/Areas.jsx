import Image from "next/image"

export default function Areas() {
    return (
        <section className="w-full lg:h-[900px] lg:h-[900px] h-[950px] bg-[#382c1e] py-[20px]">

            <span className="w-full lg:text-[50px] text-[20px] px-6">Áreas de Atuação</span>

            <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-6 items-center">
                <div className="w-[80%] lg:w-[30%] h-[40%] lg:h-[600px] bg-white rounded-lg shadow-lg gap-4 lg:gap-8 flex flex-col px-[20px] justify-center items-center">
                    <Image src="/law-icon.png" width={80} height={50} className="rounded-lg" />
                    <h1 className="text-black lg:text-[25px]"><strong>Direito do Consumidor</strong></h1>
                    <ul className="text-black">
                        <li>Análise e elaboracao de contratos de consumo</li>
                        <li>Negativacao Indevida</li>
                        <li>Atraso e cancelamento de voos</li>
                        <li>Defeitos no produto ou na prestação de serviços</li>
                        <li>Cobranças ou taxas abusivas</li>
                        <li>Indenização por danos morais e materiais</li>
                        <li>Problemas com planos de saúde</li>
                    </ul>
                </div>
                <div className="w-[80%] lg:w-[30%] h-[40%] lg:h-[600px] bg-white rounded-lg shadow-lg gap-4 lg:gap-8 flex flex-col px-[20px] justify-center items-center" >
                    <Image src="/law-icon.png" width={80} height={100} className="rounded-lg" />
                    <h1 className="text-black lg:text-[25px]"><strong>Direito de Família</strong></h1>
                    <ul className="text-black">
                        <li>Divórcio e Separação</li>
                        <li>Planejamento Sucessório</li>
                        <li>Guarda</li>
                        <li>Pensão Alimentícia</li>
                        <li>Adoção</li>
                        <li>Inventário Extrajudicial</li>
                        <li>Proteção de Direitos da Criança e do Adolescente</li>
                        <li>Ação de Investigação de Paternidade</li>
                        <li>Dissolução de União Estável</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}