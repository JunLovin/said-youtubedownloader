import { useContext } from 'react'
import { UseApiContext } from '@context/UseApi'
import Input from '@components/Input'

function Hero() {
    const { id, fetchData, data } = useContext(UseApiContext)

    const handleSubmit = async () => {
        if (id.length > 0) {
            const result = await fetchData(id)
            if (result && result.videos?.items[0]?.url) {
                window.open(result.videos.items[0].url, '_blank')
            }
        }
    }

    return (
        <>
        <div className="container flex w-max justify-center items-center flex-col gap-8">
            <h1 className="text-5xl font-extrabold text-center">Youtube Video Downloader</h1>
            <Input />
            <button className="bg-black rounded-2xl w-full h-[60px] text-white px-8 py-1 cursor-pointer text-xl font-semibold active:text-neutral-200 transition-all duration-100" onClick={handleSubmit}>Download</button>
            {data && (
                <>
                    <a href={data.videos?.items[0]?.url} target="_blank" className="hover:underline hover:underline-offset-4">Download <span className="font-bold">{data.title}</span> with audio</a>
                    <a href={data.videos?.items[1]?.url} target="_blank" className="hover:underline hover:underline-offset-4">Download <span className="font-bold">{data.title}</span> in better quality without audio</a>
                </>
            )}
        </div>
        <footer className="absolute bottom-4 font-semibold">
            <p>Hecho por <a href="https://github.com/JunLovin" target='_blank' className='underline underline-offset-2'>Said</a> con ♥️ y ☕</p>
        </footer>
        </>
    )
}

export default Hero