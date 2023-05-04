const API_KEY = "4c0d68ba4c48d56c222f4ceddfee8477";

const requests = {
    fetchingTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchingNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
}

export default requests