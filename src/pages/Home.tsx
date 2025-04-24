// component
import HeroCard from "../components/home/HeroCard"
import Moviecard from "../components/Moviecard"

const Home = () => {
  return (
    <>
      <HeroCard />
      <div className="p-6 flex flex-wrap gap-6">
        <Moviecard />
      </div>
    </>
  )
}

export default Home