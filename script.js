async function fetchData() {
  try {
    const audienceId = '438323';
    const tokenId = 'ed97bcf9-2abd-4907-81df-68dbc50e26b3';

    const resp = await fetch(
      `https://api-cdp.treasuredata.com/audiences/${audienceId}/tokens/${tokenId}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'TD1 11465/f2b4eac8c3b1e0abd3bef767553b44975db7bf41'
        }
      }
    );

    const data =  await resp.text();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
