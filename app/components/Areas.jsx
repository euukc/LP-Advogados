import Image from "next/image"

export default function Areas() {
    return (
        <section className="w-full lg:h-[900px] lg:h-[900px] h-[900px] bg-[#995706] pt-6">

            <span className="w-full lg:text-[50px] px-6">AREAS DE ATUACAO</span>
            
            <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:pt-8 gap-6 items-center py-32">
                <div className="w-[80%] lg:w-[30%] h-[70%] lg:h-[600px] bg-white rounded-lg shadow-lg gap-4 lg:gap-8 flex flex-col pt-[15px] px-[20px] justify-center items-center">
                    <Image src="/law-icon.png" width={80} height={50} className="rounded-lg"/>
                    <h1 className="text-black lg:text-[25px]"><strong>Direito do Consumidor</strong></h1>
                    <ul className="text-black">
                        <li>Análise e elaboracao de contratos de consumo</li>
                        <li>Negativacao Indevida</li>
                        <li>Atraso e cancelamento de voos</li>
                        <li>Defeitos no produto ou na prestacao de servicos</li>
                        <li>Cobrancas ou taxas abusivas</li>
                        <li>Indenizacao por davos morais e materiais</li>
                        <li>Problemas com planos de saude</li>                        
                    </ul>
                </div>
                <div className="w-[80%] lg:w-[30%] h-[70%] lg:h-[600px] bg-white rounded-lg shadow-lg gap-4 lg:gap-8 flex flex-col pt-[15px] px-[20px] justify-center items-center" >
                    <Image src="/law-icon.png" width={80} height={100} className="rounded-lg" />
                    <h1 className="text-black lg:text-[25px]"><strong>Direito de Familia</strong></h1>
                    <ul className="text-black">
                        <li>Divorcio e Separacao</li>
                        <li>Planejamento Suscessorio</li>
                        <li>Guarda</li>
                        <li>Pensao Alimenticia</li>
                        <li>Adocao</li>
                        <li>Inventario extrajudicial</li>
                        <li>Protecao de direitos da crianca e do adolescente</li>
                        <li>Acao de investigacao de paternidade</li>
                        <li>Dissolucaod e uniao estavel</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}