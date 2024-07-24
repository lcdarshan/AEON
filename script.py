import requests

def fetch_data():
    try:
        audience_id = '438323'
        token_id = 'ed97bcf9-2abd-4907-81df-68dbc50e26b3'
        
        url = f'https://api-cdp.treasuredata.com/audiences/{audience_id}/tokens/{token_id}'
        
        headers = {
            'Authorization': 'TD1 11465/f2b4eac8c3b1e0abd3bef767553b44975db7bf41'
        }
        
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            data = response.text
            print(data)
        else:
            print(f'Error: HTTP {response.status_code}')
            print(response.text)  # Display the server's response text
            
    except Exception as error:
        print(f'Error: {error}')

fetch_data()
