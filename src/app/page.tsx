import Link from 'next/link';

function Home() {
  return (
    <div className="max-w-7xl mx-auto flex-col flex items-center justify-center mt-80">
      <h1 className="text-4xl font-bold mb-4 text-white text-center">Hello. I take pictures.</h1>
      <Link href="/portfolio">
        <button className="px-4 py-2 border-2 border-white rounded-lg text-white text-lg font-serif font-bold bg-[rgba(112,128,144,0.85)] hover:cursor-pointer hover:bg-[rgba(55,62,70,0.85)]">View My Portfolio</button>
      </Link>
    </div>
  )
}

export default Home;