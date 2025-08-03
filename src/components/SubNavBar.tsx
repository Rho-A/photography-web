'use client';

export interface SubNavBarProps {
    category: string;
    setCategory: (category: string) => void;
}

export const SubNavBar: React.FC<SubNavBarProps> = ({ category, setCategory }) => {
    const categories = ['all', 'landscape', 'buildings', 'flowers']

    return (
        <div className={`flex justify-center items-center flex-wrap text-m font-serif mb-8 max-w-7xl mx-auto`}>
            <span className="text-m
             font-medium mr-8">CATEGORIES :</span>
            {categories.map((c) => (<button key={c} className={`px-4 py-2 transition ${category === c ? 'bg-[rgba(37,70,119,0.7)] text-white' : 'text-black hover:bg-gray-200 hover:cursor-pointer'
                }`} onClick={() => setCategory(c)}>{c.toUpperCase()}</button>)
            )}
        </div>
    );
}

SubNavBar.displayName="SubNavBar";