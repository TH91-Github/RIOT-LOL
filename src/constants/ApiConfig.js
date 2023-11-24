
export const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY)
// API URL
export const LOL_API_SUMMONER = (summonerName) => {
	return `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
}