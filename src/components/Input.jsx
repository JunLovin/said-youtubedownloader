import { useContext } from 'react'
import { UseApiContext } from '@context/UseApi'

function Input() {
    const { id, setId, fetchData } = useContext(UseApiContext)

    const handleId = e => {
        setId(e.target.value)
    }

    const handleEnter = async (e) => {
        if (e.key === 'Enter' && id.length > 0) {
            const result = await fetchData(id)
            if (result && result.videos?.items[0]?.url) {
                window.open(result.videos.items[0].url, '_blank')
            }
        }
    }

    return (
        <>
        <input type="text" value={id} onChange={handleId} onKeyDown={handleEnter} className="w-full h-[60px] rounded-2xl outline-none px-4 border-2 border-neutral-300" placeholder="e.g. G33j5Qi4rE8" />
        </>
    )
}

export default Input