import { AlertTriangleIcon } from "lucide-react"


interface ErrorProps {
    message: string,
    onClick?: () => void,
};

const ErrorDisplay = ({ message, onClick }: ErrorProps) => {

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2 text-gray-300">
        <AlertTriangleIcon color="#d1a54e" size={88}/>
        <h3 className=" font-medium text-xl">Something Went Wrong</h3>
        <p className="text-gray-400 w-96 text-center" > Error: {message}</p>
        <button onClick={onClick} className="text-gray-400 hover:bg-zinc-800 border border-gray-500 p-2 px-4 rounded-lg mt-2 cursor-pointer">Try Again</button>
    </div>
  )
}

export default ErrorDisplay