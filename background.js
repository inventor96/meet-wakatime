let intervalId = null;

chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
	if (tab.url && tab.url.match(/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}/)) {
		if (changeInfo.status === 'complete') {
			startHeartbeat();
		}
	} else {
		stopHeartbeat();
	}
});

function startHeartbeat() {
	// skip if already running
	if (intervalId) return;

	// get the settings
	chrome.storage.sync.get(['apiUrl', 'apiKey', 'computerName']).then((data) => {
		// require the api key
		if (!data.apiKey) {
			console.error('API key is required');
			return;
		}

		// format data
		const apiUrl = ((data.apiUrl || 'https://wakatime.com/api/v1').replace(/\/+$/, '') + '/users/current/heartbeats');
		const apiKey = btoa(data.apiKey);
		const computerName = data.computerName || 'Unknown';

		// get the operating system
		chrome.runtime.getPlatformInfo((platformInfo) => {
			const operatingSystem = platformInfo.os;

			// start the timer
			intervalId = setInterval(() => {
				fetch(apiUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Basic ${apiKey}`,
					},
					body: JSON.stringify({
						entity: 'meet.google.com',
						type: 'domain',
						time: Math.floor(Date.now() / 1000),
						computer_name: computerName,
						operating_system: operatingSystem,
					}),
				}).then(response => {
					if (!response.ok) {
						console.error('Failed to send heartbeat');
					}
				}).catch(error => {
					console.error('Error:', error);
				});
			}, 30000);
		});
	});
}

function stopHeartbeat() {
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	}
}