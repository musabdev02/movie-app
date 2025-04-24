// components
import Button from "../ui/Button"
const HeroCard = () => {
    return (
        <div
            className="w-full h-[500px] bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url('src/assets/placeholder.jpg')`,
            }}
        >
            <div className="flex flex-col justify-end h-full gap-3 text-white p-12">
                <h2 className="text-6xl font-medium">Insider</h2>
                <div className="flex gap-2 text-gray-300">
                    <p>2022 |</p>
                    <p>Comedy |</p>
                    <p>1 Season</p>
                </div>
                <div className="mt-2 flex items-center gap-3">
                    <Button text="Learn More" varient="primary" />
                    <Button text="Add to favorite" varient="secondary" />
                </div>
            </div>
        </div>
    )
}

export default HeroCard