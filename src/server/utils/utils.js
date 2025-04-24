import 'dotenv/config.js'

const apiKey = process.env.VITE_YOUTUBE_API_KEY

export const fetchApi = async (req, res) => {
    const { id } = req.body
    try {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com'
            }
        }
        const response = await fetch(`https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${id}`, options)
        if (!response.ok) {
            const error = new Error("Hubo un error al llamar a la API de RapidApi")
            throw error
        }
        const data = await response.json()
        res.json(data)
    } catch (error) {
        console.error(error)
        return res.json({ error: "Hubo un error al llamar a la API" })
    }
}