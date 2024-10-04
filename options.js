// save settings
document.getElementById('save').addEventListener('click', () => {
	// fetch the values
	const apiUrl = document.getElementById('apiUrl').value;
	const computerName = document.getElementById('computerName').value;
	const apiKey = document.getElementById('apiKey').value;

	// save the values
	chrome.storage.sync.set({ apiUrl, computerName, apiKey }, () => {
		alert('Settings saved!');
	});
});

// load settings
document.addEventListener('DOMContentLoaded', () => {
	// fetch the values
	chrome.storage.sync.get(['apiUrl', 'computerName', 'apiKey'], (data) => {
		// set the values
		document.getElementById('apiUrl').value = data.apiUrl || 'https://wakatime.com/api/v1';
		if (data.computerName) {
			document.getElementById('computerName').value = data.computerName;
		}
		if (data.apiKey) {
			document.getElementById('apiKey').value = data.apiKey;
		}
	});
});