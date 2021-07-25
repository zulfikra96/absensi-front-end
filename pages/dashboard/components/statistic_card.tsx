
interface StatisticCardProps {
    value: number,
    title: string
}

export const StatisticCard = (props: StatisticCardProps) => {
    return (
        <div className="px-2 w-1/5 mb-3">
            <div className="w-full h-44 bg-blue-500">
                <div className="flex number-shape h-32 text-center flex-col justify-center  ">
                    <h1 className="text-6xl text-white font-semibold">{props.value}</h1>
                </div>
                <div className="flex title-shape bg-blue-700 h-12 flex-col text-center justify-center">
                    <h2 className="text-base text-white font-semibold">{props.title}</h2>
                </div>
            </div>
        </div>
    )
}