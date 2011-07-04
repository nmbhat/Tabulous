var auth = document.getElementById('authID').innerHTML;
if (auth) {
	chrome.extension.sendRequest({target: 'bg', authID: auth});
}
document.getElementById('status').innerHTML = "You're logged in and ready to start syncing!"
document.getElementById('authID').innerHTML = "You may close this page now."
