
const Ftu = ({ heading, children }: {heading: string, children: React.ReactNode }) => {
  return (
    <div className="mt-20 px-10 py-12 ">
        <h4 className="text-2xl font-bold text-gray-300">{heading}</h4>
        <div className="mt-10 flex flex-wrap gap-4">
            { children }
        </div>
    </div>
  )
}

export default Ftu