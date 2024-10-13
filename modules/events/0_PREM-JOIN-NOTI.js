module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "PREM BABU",
    description: "THIS BOT WAS MADE BY MR PREM BABU",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "PREM BABU", "PREM-1");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "PREM BABU", "PREM-1");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] 𒁍 ${(!global.config.BOTNAME) ? "TAKLU BABU" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `‎‎❁ ━━━━[  𝗜 𝗔𝗠 𝗖𝗢𝗠𝗜𝗡𝗚  ]━━━━ ❁\n\n╰┈➤ help\n╰┈➤ uptime\n╰┈➤ groupinfo\n╰┈➤ pair\n╰┈➤ addgroup\n╰┈➤ mark\n╰┈➤ info\n\n━━━━━━━━━━━━━━━━━━\n\n╰┈➤ OWNER 𒁍 PREM BABU\n╰┈➤ BOT NAME 𒁍 TAKLU BABU\n╰┈➤ BOT PREFIX 𒁍 [${global.config.PREFIX}]\n━━━━━━━━━━━━━━━━━━\nलो मैं आ गया आपका प्यारा टकलू बाबू स्वागत करो हमारा 🙈`, attachment: fs.createReadStream(__dirname + "/PREM BABU/PREM-3/1.gif")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "PREM BABU", "PREM-1");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "┏━━━━━┓\n    प्रेम-बाबू               ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\n\nHello 𒁍 {name}\nWelcome To {threadName}\n════════════════════════ ❁\nMY BOSS  𒁍 MR PREM SHARMA 🌺\n════════════════════════ ❁\nFACEBOOK ID LINK 🔗 𒁍 https://www.facebook.com/prembabu001\n════════════════════════ ❁\n𝖬𝖮𝖲𝖳 𝖶𝖤𝖫𝖢𝖮𝖬𝖤 𝖳𝖮 𝖯𝖱𝖤𝖬 𝖡𝖠𝖡U 𝖡𝖮𝖳\n════════════════════════ ❁\nBOT UPDATING 𒁍 MR PREM BABU 🌺\n════════════════════════ ❁\n\nलत तेरी ही लगी है....................... 🌺\nनशा सरेआम होगा....................... 🌺\nहर लम्हा तुम्हारे लबों पे.................. 🌺\nसिर्फ प्रेम बाबू का ही नाम होगा.........🌺\nआप इस ग्रुप के {soThanhVien}th मेंबर हो...........🐥\n════════════════════════ ❁\n         खाओ पियो और मेरे साथ मस्ती करो 🙂" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  '♥️🌺😘🍼🐥🙈' : 'Kaise Ho Ap')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "PREM BABU", "PREM-1"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "PREM BABU", "PREM-1", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
              }
