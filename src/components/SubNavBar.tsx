'use client';

type SubNavBarProps = {
    category: string;
    setCategory: (category: string) => void;
}

function SubNavBar({ category, setCategory }: SubNavBarProps) {
    const categories = ['all', 'animal', 'landscape', 'street', 'portrait']

    return (
        <div className={`flex justify-center items-center flex-wrap text-m font-serif mb-5 max-w-7xl mx-auto`}>
            <span className="text-m
             font-medium mr-8">categories :</span>
            {categories.map((c) => (<button key={c} className={`px-4 py-2 transition ${category === c ? 'bg-[rgba(133,47,47,0.6)] text-white' : 'text-black hover:bg-gray-200 hover:cursor-pointer'
                }`} onClick={() => setCategory(c)}>{c}</button>)
            )}
        </div>
    );
}

export default SubNavBar;
