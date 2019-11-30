const request = require('request');
const fs = require('fs');

function getLocale(addonName, projectID, token, dir='', primaryLanguage='enUS') {
	const languages = ['enUS', 'deDE', 'esES', 'esMX', 'frFR', 'itIT', 'koKR', 'ptBR', 'ruRU', 'zhCN', 'zhTW'];

	for(let i=0; i < languages.length; i++) {
		let language = languages[i];
		if(language == primaryLanguage) continue;
		request.get({
			url: `https://wow.curseforge.com/api/projects/${projectID}/localization/export?unlocalized=Ignore&true-if-value-equals-key=true&lang=${language}`,
			headers: {
				'X-Api-Token': token,
			}
		}, (err, response, body) => {
			let prefix = `local L = LibStub("AceLocale-3.0"):NewLocale("${addonName}", "${language}")
if not L then return end


`
			let file = dir + language + '.lua';
			fs.writeFile(file, prefix + body, (err) => console.error)
		});
	}
}

getLocale(...process.argv.slice(2));