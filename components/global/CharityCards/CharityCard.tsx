import Image from 'next/image'
import Link from 'next/link';

export const CharityCard = ({
    name,
    description,
    logo,
    category,
    website
    } : {
    name: string,
    description: string,
    logo: string,
    category: string,
    website: string
}) => {
    return (
        <Link href={website}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                </div>
            </div>
        </Link>
    );
};