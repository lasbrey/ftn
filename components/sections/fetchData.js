export async function fetchCryptoData() {
    const endpoint = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = new URLSearchParams({
      vs_currency: 'usd',
      ids: 'bitcoin,ethereum,tether,binancecoin,solana,ripple,cardano,avalanche-2',
    }).toString();
  
    try {
      const response = await fetch(`${endpoint}?${params}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  