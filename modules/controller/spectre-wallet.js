import {SpectreWallet as BaseSpectreWallet} from '/node_modules/@spectre/ux/spectre-ux.js';

class SpectreWallet extends BaseSpectreWallet{
	makeFaucetRequest(subject, args){
		let origin = 'https://faucet.spectre-network.org';
		//origin = 'http://localhost:3000';
		const {address, amount} = args;
		let path = {
			'faucet-available': `available/${address}`,
			'faucet-request': `get/${address}/${amount}`
		}[subject];

		if(!path)
			return Promise.reject("Invalid request subject:"+subject)

		return fetch(`${origin}/api/${path}`, {
			method: 'GET'
		}).then(res => res.json())
	}
}

SpectreWallet.define("spectre-wallet")
