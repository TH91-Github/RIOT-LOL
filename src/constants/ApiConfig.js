
export const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://kr.api.riotgames.com";
const API_ASIA_URL = "https://asia.api.riotgames.com"
// API URL

// 1차
export const LOL_API_SUMMONER = (summonerName) => { // 소환사 이름으로 정보 
	return `${API_URL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
};

// 리그
export const LOL_API_LEAGUE = (id) => {
	return `${API_URL}/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`	
};

// 최근 경기 ID 값
export const LOL_API_MATYCH_ID = (puuid, max) => { 
	const start = 0; // 최근 경기 몇 번 째 부터
	const count = max ?? 10 //불러오는 경기 수 없다면 10
	console.log(puuid)
	console.log(start)
	console.log(count)
	return `${API_ASIA_URL}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${API_KEY}`
};

// 해당 게임 정보
export const LOL_API_MATYCH = (id) => {  
	return `https://asia.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${API_KEY}`
};
