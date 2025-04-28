
const Ftu = ({ heading, children }: {heading: string, children: React.ReactNode }) => {
  return (
    <div className="mt-20 p-6 md:px-10 md:py-12 ">
        <h4 className="text-2xl w-[80%] md:w-full font-bold text-gray-300">{heading}</h4>
        <div className="mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4">
            { children }
        </div>
    </div>
  )
}

export default Ftu