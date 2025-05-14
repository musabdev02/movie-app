// icons
import { Earth } from 'lucide-react';
// type
import { HeroDetails } from '../../types';

interface DetailsProps {
    data: HeroDetails
}

const Details = ({ data }: DetailsProps) => {
    return (
        <div className="py-8 px-4 text-white">
            <a href={data?.homepage || '#'} target="_blank" className="flex gap-2 items-center text-blue-400 hover:underline"> <Earth size={18} />Vist Homepage</a>
            <div className="mt-8 flex flex-col gap-6">
                <div>
                    <h4 className="font-medium text-sm text-gray-400">Status</h4>
                    <p>{data?.status}</p>
                </div>
                <div>
                    <h4 className="font-medium text-sm text-gray-400">Original Language</h4>
                    <p>{data?.spoken_languages.slice(0, 1).map(item => item.english_name)}</p>
                </div>
                <div>
                    <h4 className="font-medium text-sm text-gray-400">Other Languages</h4>
                    <p>{data?.spoken_languages.slice(1).map(item => item.english_name).join(", ") || '-'}</p>
                </div>
                <div>
                    <h4 className="font-medium text-sm text-gray-400">Budget</h4>
                    <p>{data?.budget ? `$${Number(data.budget).toLocaleString()}` : "-"}</p>
                </div>
                <div>
                    <h4 className="font-medium text-sm text-gray-400">Revenue</h4>
                    <p>{data?.revenue ? `$${Number(data.revenue).toLocaleString()}` : "-"}</p>
                </div>
                <div>
                    <h4 className="font-medium text-sm text-gray-400">Generes</h4>
                    <div className="flex mt-2 gap-2 flex-wrap">
                        {
                            data?.genres.map(item => (
                                <p key={item.id} className="text-xs bg-gray-800 p-2 rounded-sm text-gray-300">{item.name}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details