// type
import { CreditItems } from "../../types"

const Singlecast = ( { name, profile_path, character }: CreditItems ) => {
    console.log(profile_path)
    return (
        <div className="flex shadow-md border-gray-800 rounded-md border items-center flex-col w-42">
            <img src={profile_path ? `https://media.themoviedb.org/t/p/w138_and_h175_face/${profile_path}` : 'https://placehold.co/166x210?text=No profile&?font=poppins'} alt="actor" className="w-full rounded-md" />
            <div className="px-4 py-3">
                <h5 className="leading-5 mb-2 font-medium">{name}</h5>
                <p className="text-sm">{character}</p>
            </div>
        </div>
    )
}

export default Singlecast