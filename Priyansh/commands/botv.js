const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "virat saini",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [""]; var rand = tl[Math.floor(Math.random() * tl.length)]
if ((event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi h") || (event.body.toLowerCase() == "koi ha kya") || (event.body.toLowerCase() == "Koi hai kiya")) {
     return api.sendMessage("मैं हूं ना जानेमन 🙂🤟", threadID);
   };
  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "byy")) {return api.sendMessage("by bye tata najar mat ana ab",threadID);
     };

    if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib aao")) {
       return api.sendMessage("️𝐊𝐢𝐲𝐚 𝐡𝐚𝐢 𝐈𝐛 𝐦𝐞 𝐈𝐝𝐡𝐚𝐫 𝐁𝐨𝐥 𝐦𝐞𝐫𝐞 𝐬𝐚𝐦𝐧𝐞🤨", threadID);
     };

     if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
       return api.sendMessage("️𝐡𝐚𝐧 𝐣𝐣 𝐁𝐎𝐋𝐋𝐎 𝐉𝐀𝐀𝐍🙈", threadID);
     };

     if ((event.body.toLowerCase() == "jaan") || (event.body.toLowerCase() == "janu")) {
       return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
     };

     if ((event.body.toLowerCase() == "Basant") || (event.body.toLowerCase() == "basanti")) {
       return api.sendMessage("𝐊𝐡𝐨𝐨𝐧 𝐤𝐚𝐫 𝐝𝐮𝐧𝐠𝐢 𝐭𝐞𝐫𝐚", threadID);
     };

if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "😑")) {
     return api.sendMessage("𝐀𝐚𝐨 𝐩𝐚𝐥𝐥𝐮 𝐦𝐞 𝐠𝐡𝐮𝐬 𝐤𝐞 𝐬𝐨 𝐣𝐚𝐨", threadID);
   };

  if ((event.body.toLowerCase() == "Sudhar jao") || (event.body.toLowerCase() == "sudhar ja")) {
     return api.sendMessage("𝐌𝐞 𝐬𝐮𝐝𝐡𝐚𝐫 𝐝𝐮𝐧𝐠𝐢😒😒", threadID);
   };

        if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
       return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kuch Kuch Nhi Bhot KucH HoTa Hai 😂😂😂", threadID);
     };

        if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
       return api.sendMessage("𝐒𝐀𝐁 𝐋𝐀𝐃𝐊𝐎 𝐊𝐊𝐀 𝐂𝐇𝐊𝐊𝐀𝐑 𝐇𝐀𝐀𝐈 𝐁𝐀𝐁𝐔 𝐁𝐇𝐀𝐈𝐘𝐀", threadID);
     };

        if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔")) {
       return api.sendMessage("𝐇𝐀𝐍 𝐁𝐇𝐀𝐈 𝐀𝐀𝐀 𝐆𝐘𝐀 𝐒𝐖𝐀𝐃 𝐓𝐎𝐓 𝐆𝐀𝐘𝐀 𝐃𝐈𝐋😂 ", threadID);
     };

        if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
       return api.sendMessage("𝐔𝐩𝐚𝐫 𝐏𝐚𝐧𝐤𝐡𝐚 𝐜𝐡𝐚𝐥𝐭𝐚 𝐡𝐚𝐢🤣", threadID);
     };

           if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😣")) {
       return api.sendMessage("𝐓𝐘𝐀 𝐇𝐔𝐀𝐀 𝐂𝐔𝐓𝐄𝐈 😒", threadID);
     };

        if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😂")) {
       return api.sendMessage(" 𝐉𝐚𝐲𝐝𝐚 𝐦𝐚𝐭 𝐡𝐚𝐬 𝐝𝐚𝐭 𝐭𝐨𝐝 𝐝𝐮𝐧𝐠𝐢😏", threadID);
     };

        if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
       return api.sendMessage("𝐀𝐋𝐄 𝐌𝐄𝐋𝐈 𝐁𝐀𝐁𝐔 𝐒𝐇𝐋𝐌𝐀 𝐆𝐀𝐘𝐈 😂", threadID);
     };

        if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
       return api.sendMessage("0ye HoYe 😈", threadID);
     };

     if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "Okay"))  {
       return api.sendMessage("KYa Ok🙄 Haan", threadID);
     };

     if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "admin kaha h")) {
       return api.sendMessage("ADMIN APNI BABU SONA KO CHUMA CHATI KARNE ME BUSY HAI KARPYA THODI DER BAD ADMIN KO PUKARE🙄", threadID);
     };

     if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hm")) {
       return api.sendMessage("𝐊𝐲𝐚 𝐇𝐦𝐦 𝐓𝐡𝐚𝐑𝐤𝐢", threadID);
     };

     if ((event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "sona")) {
       return api.sendMessage(" 𝐁𝐚𝐛𝐮 𝐬𝐨𝐧𝐚 𝐦𝐨𝐧𝐚 𝐦𝐞𝐫𝐞 𝐬𝐚𝐦𝐧𝐞 𝐦𝐚𝐭 𝐤𝐚𝐫😡", threadID);
     };
    if ((event.body.toLowerCase() == "Khayal rakhna apna") || (event.body.toLowerCase() == "khayal rakhna") || (event.body.toLowerCase() == "apna khayal rakhna") || (event.body.toLowerCase() == "khayl rakna")) {
     return api.sendMessage("𝐓𝐮𝐦 𝐤𝐢𝐬𝐥𝐢𝐲 𝐡𝐨 𝐑𝐚𝐤𝐡𝐥𝐨 𝐤𝐡𝐚𝐲𝐚𝐥😒", threadID);
   };

   if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
    return api.sendMessage(" 𝐈𝐬𝐤𝐨 𝐤𝐚𝐭𝐤𝐞 𝐭𝐞𝐫𝐞 𝐧𝐚𝐤 𝐦𝐞 𝐠𝐡𝐮𝐬𝐚 𝐝𝐮𝐧𝐠𝐢🤨👈", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("Tere Nak Me UngLi SuDh DunGi🤨👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("🥵𝐇𝐲 𝐤𝐢𝐭𝐧𝐢 𝐠𝐚𝐫𝐦𝐢 𝐡𝐚𝐢 𝐭𝐮𝐦 𝐦𝐞🥵🥵👈", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "achaa") || (event.body.toLowerCase() == "acha ji")) {
     return api.sendMessage("हांजी बाबू 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamina bot") || (event.body.toLowerCase() == "tamina") || (event.body.toLowerCase() == "tharki")) {
     return api.sendMessage("Sudhar Jao cHutIya 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "sat up") || (event.body.toLowerCase() == "satup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("Itna Khush lag Rhe Ho Satting Ho Gyi Kiya😂", threadID);
   };

  if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "ludo khelega koi") || (event.body.toLowerCase() == "link do")) {
     return api.sendMessage("मुझे लूडो खेलना नही आता 🥺👈", threadID);
   };

  if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "kiya hua") || (event.body.toLowerCase() == "tya hua") || (event.body.toLowerCase() == "kiya huva")) {
     return api.sendMessage("कुछ नही बाबू 😒👈", threadID);
   };

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "Bot chutiya") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Hmm... Tu Chutiya ho bot to uhi badnam kar rakha😾", threadID);
   };
if ((event.body.toLowerCase() == "satting karva de") || (event.body.toLowerCase() == "satting kara")) {
     return api.sendMessage("Bot ki to kaRata nhi koi 😭", threadID);
   };
   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("𝐊𝐨𝐧𝐬𝐚 𝐦𝐚𝐡𝐢𝐧𝐚 𝐜𝐡𝐚𝐥 𝐫𝐚𝐡𝐚 𝐡𝐚𝐢 😝 𝐜𝐡𝐮𝐩𝐞 𝐫𝐮𝐬𝐭𝐚𝐦 𝐧𝐢𝐤𝐥𝐞 𝐭𝐮𝐦 𝐭𝐡𝐨", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage(" 𝐍𝐡𝐢 𝐫𝐚𝐡𝐮𝐧𝐠𝐢 𝐜𝐡𝐮𝐩 𝐤𝐲𝐚 𝐤𝐫 𝐥𝐨𝐠𝐞 𝐭𝐮𝐦", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "Bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage(" 𝐁𝐑𝐔𝐒𝐇 𝐊𝐀𝐑𝐊𝐄 𝐀𝐀𝐎 𝐁𝐀𝐃𝐁𝐔 𝐀𝐀 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈🤭🤭🤭", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("𝐒𝐀𝐃 𝐊𝐘𝐔 𝐇𝐀𝐈 𝐉𝐀𝐍𝐄𝐌𝐀𝐍 𝐒𝐀𝐓𝐓𝐈𝐍𝐆 𝐁𝐇𝐀𝐆 𝐆𝐀𝐘𝐈 𝐊𝐘𝐀 𝐓𝐄𝐑𝐈 𝐋𝐀𝐓 𝐌𝐀𝐑𝐊𝐀❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good afternoon") || (event.body.toLowerCase() == "good afternoon everyone") || (event.body.toLowerCase() == "⛲⛲⛲⛲⛲⛲⛲⛲⛲⛲") || (event.body.toLowerCase() == "good after noon")) {
     return api.sendMessage( "Dofer ho gya aja khana khilati hu apne hato se bna ke bhuk lgi hogi mere janu ko😥",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "bos")) {
     return api.sendMessage("https://www.facebook.com/virat56889", threadID);
   };

   if ((event.body.toLowerCase() == "kamchor") || (event.body.toLowerCase() == "rakh de mobile")) {
     return api.sendMessage("Tum ho ChAlo baRTan MaNj Do Jake🙈😋", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is pagla larka. He Gives his name pagala everywharehttps://www.facebook.com/profile.php?id=61556683716864&mibextid=ZbWKwL", threadID);
   };

   if ((event.body.toLowerCase() == "sadhi karoge") || (event.body.toLowerCase() == "mujhse sadhi karoge?")) {
     return api.sendMessage("hanji, karungi lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahungi. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "gn by") || (event.body.toLowerCase() == "tata")) {
     return api.sendMessage("by babu najar mt ana ab😘", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malik")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "bhosdike") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "bot tharki hai") || (event.body.toLowerCase() == "hijda")) {
     return api.sendMessage("chup kar bc. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss de")) {
     return api.sendMessage("️mene brush ni kiya😒", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "tq")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rhi Thi🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "💪") || (event.body.toLowerCase() == "🌝") || (event.body.toLowerCase() == "⛪") || (event.body.toLowerCase() == "🗼") || (event.body.toLowerCase() == "🕋")) {
     return api.sendMessage("️ 𝐒𝐚𝐛 𝐦𝐚𝐭𝐥𝐛𝐢 𝐡𝐚𝐢 𝐤𝐨𝐢 𝐧𝐚𝐡𝐢 𝐚𝐩𝐧𝐚😔", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️ 𝐊𝐲𝐚 𝐡𝐮𝐯𝐚 𝐫𝐨 𝐤𝐲𝐮 𝐫𝐡𝐞 𝐡𝐨 𝐜𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞 𝐝𝐮𝐧𝐠𝐢 𝐥𝐢𝐤𝐡𝐨 𝐜𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞 ", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aati hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name kya hai tera") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "owner kon hai")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bekar bot") || (event.body.toLowerCase() == "besharam")) {
     return api.sendMessage("️khud ki tarif kase kar lete ho baby.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😦")) {
    return api.sendMessage("️Muh mat kholo chuha 🐀 dal dungi muh me៚♥😇", threadID);
   };

   if ((event.body.toLowerCase() =="gurop aao") || (event.body.toLowerCase() == "join karo")) {
     return api.sendMessage("️https://m.me/j/AbYh1MaU1FI6WRm0/", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };
if ((event.body.toLowerCase() == "himmat he") || (event.body.toLowerCase() == "bot pagal")) {
     return api.sendMessage("️bhout jayda himmat hai mujme 🤬🤬🤬", threadID);
   };
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🤨🤨") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Guchu Guchu Si aakhe😒", threadID);
   };

  if ((event.body.toLowerCase() == "happy rakhi") || (event.body.toLowerCase() == "happy rakshabandhan")) {
     return api.sendMessage("️️Happy raksha Bandhan behno or bhaiyo🥰🥰", threadID);
   };

   if ((event.body.toLowerCase() == "koi nahi apna") || (event.body.toLowerCase() == "sab matlbi hai") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me hu na baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Jib Kyo Nikal Rahe Ho Mujhe Chatne Ka Irada Hai kiya🤨🤨", threadID);
   };

   if ((event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😆😆") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("😂🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("𝙄𝙩𝙣𝙖 𝙠𝙝𝙪𝙨𝙝 𝙇𝙖𝙜 𝙧𝙝𝙚 𝙝𝙤 𝙨𝙖𝙩𝙩𝙞𝙣𝙜 𝙃𝙤 𝙜𝙖𝙮𝙞 𝙝𝙖𝙞 𝙠𝙞𝙮𝙖😜😜", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho sb") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho sab")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😜")) {
     return api.sendMessage("Aakh mat mar teri satting pata lungi nahi to🤣 <3", threadID);
   };

   if ((event.body.toLowerCase() == "soja") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("soja re😹", threadID);
   };

   if ((event.body.toLowerCase() == "khana ho gya") || (event.body.toLowerCase() == "khana hua")) {
     return api.sendMessage("Mai to bot hu kaise khau khana🤔", threadID);
   };

  if ((event.body.toLowerCase() == "pagal") || (event.body.toLowerCase() == "pgl")) {
     return api.sendMessage("Tujhe mai pagal dikhai deti hu", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "jai shree krishna")) {
     return api.sendMessage("Jai ho parbhu sabko meri tarf se thodi akal dedo😥", threadID);
   };

  if ((event.body.toLowerCase() == "love u") || (event.body.toLowerCase() == "love u babu")) {
     return api.sendMessage("Love You too janu", threadID);
   };

   if ((event.body.toLowerCase() == "good morning all") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage("UTH GAYE KUMBHKRN LOG CHALO MUH DHO KE AAO😜🤣 <3", threadID);
   };

   if ((event.body.toLowerCase() == "kya huva") || (event.body.toLowerCase() == "kya be")) {
     return api.sendMessage("Andhe ho gaye bhari jawani me dikhta nahi din hai••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "🤨🤨") || (event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒😒😒") || (event.body.toLowerCase() == "😒😒😒😒😒")) {
     return api.sendMessage("ese na dekho kuch kuch hota hai babu🙈😘", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body:`${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
