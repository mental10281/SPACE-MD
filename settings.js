require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAMkzDVuJIBF4WgQAAHwHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVmOYiCEZ0xAAiItqCd92YhwIKLIGCpgoQJ*z3Dezu6XnYne3lqUiKzJN5zsmfgOSYIge1YPQTFCWuIUPdkbUFAiOgV1GEStAHIWQQjICsDaVepgr+fGauxRSyQwoXbh4kWEacXy31ZjqeVWKd8MozuPdBUfkpDv6QULXmCkFUi*IC9tg6j3vLXa6kG3resLTBS4ESc2zwTrMxn8G9ywhxiUlsFmeUoRKmDmpdiMuvwae6HY3NgzTxFlq5UWeOVPcOVTZx9urLbKcmT2LE1+bSPfHJ1+BLobkuBH9PLcuIb7F4lKY3tRisKt7yPXsZZv5eK45k5UzpG3yKY4JCO0SEYdZ+ee6NKfALw0+OeKctRM1TOd2lGJ5Ptr4R7Z053OwVfSVWSzH4GvDQabNXod2G100dwWOKFXp6jXlVDYXFYsaeZpvjBPZ8mejB78Dd8kMryf+ZO2e50cVulmyws*Fkv9CJQOxUGorXpXagY1lPrrcQLneW+cW5i4Enjm8M0qYsLxoVybq94VRy+VDdR8fJa7K7htY6fTm33id8yKryTyiJoB71J*eqe8dyryxxZmkBPyhVR0sLOpti0ozXL73b64vplOopVBXLVVr3yWhmU*3Fq15uuaH7u3nsGMkqLc+vA5wpevz86ChBrR2CEX*vgxLFmLISMpyTLiYIXB*AsF6joETsMV6QXE76ZZ+NUVTPlM20shr14AwvgWFblWmbah1VbTPZ4+E0eAZ9UJR5gChF4RRTlpftAlEKY0TB6K8ffUDQlb0R15UT+T6IcEnZllRFmsPwg9WPjzAI8oqwdUsCozugEoy4zzBiDJOYdnOsCCyDM66RcYaMglEEU4p+dYhKFIIRKyv0y7VGHnaDH6xc1ZrLG9AH2YMQHHarQBD54VAYKgNOGknf6bemywqL4htBDPQBgd1lcIKYwBTXoA*Sx3+iJAmiyqmSxPPKSPreRe+*8HbpQ8QgTikYAcMdN5lCJ6YbnZWFZ1maF2tGrIHP*j6E8kbEKtxexpeTWmS8E5FwRlaOd*CoMc79yeCgbZC8Vno1CT1j+*wPScAIpMmZS8Od5PVsUdwtmsYnVyb3ChVX9gEGmXMYHmY3wi2fpj1zTulmeFmvprIqT43bwlXVINXcRshfy56uXNPDamour7r33FULUY0D9Huxc*aEG8u8kngMvfhaz+XTnPeVVb2Vr5cd1krr5bJK5EHmB9mhrVzncjsNelN1dnY9eNN7lupDTlgmzV4g*tZAzDQuhvYm4YeF0vfVhR*i6pjrXiOMHpvgnaL*YvINd6c37t7*LcX7avkXe+rbw85uBkIET2xNJHF94tbJhJtrsWxd0aQxxSqp3VISt1oK7vcffVCkkEV5mXWbP*Mh6IMyrzr12iTK*1DJ0DhbezduCinTPh2xwRmiDGYFGPFDSeJkWeaHb7fcMi+mkJ47Sa7Uk6h28m61olgzyD4MBrTH44rg*jdQSwECFAMUAAAICADJMw1biSAReFoEAAB8BwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACCBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '923177278405',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'mental10281',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
