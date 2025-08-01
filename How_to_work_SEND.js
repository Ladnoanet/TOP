function safeBase64Decode(str) {
  try {
    const padded = str + '='.repeat((4 - str.length % 4) % 4);
    return atob(padded);
  } catch (e) {
    console.error("❌ Сообщение:", str, e);
    return '';
  }
}

const embeddedData = {
  Current_Messages: {
    BIQ: [
      { "payload": "3Xc6MkSVBP6O=" },
      { "payload": "QUl6YVN5QmhkVQ==" },
      { "payload": "AQMBOP0Y2" }
    ]
  },
  Photo_idS: {
    tokens: [
      { "unit": "tcobKvnbRQ" },
      { "unit": "a2V5X3Rlc3Q=" },
      { "unit": "obKvnbRQ" }
    ]
  },
  Channel_Work_: {
    pipes: [
      { "seq": "==xzLkK3" },
      { "seq": "-1O2Q_c80tc" },
      { "seq": "YUBmaW5hbA==" }
    ]
  },
  Linear_design: {
    capsules: [
      { "blk": "Fz8uMDE=" },
      { "blk": "aGFja21l" },
      { "blk": "cXZrMWtqV2VGZw==" }
    ]
  }
};

let Messageviewer = "";

(function buildKey() {
  try {
    const send = safeBase64Decode(embeddedData.Current_Messages.BIQ[1].payload);
    const message = embeddedData.Photo_idS.tokens[2].unit.split("").reverse().join("");
    const answer = embeddedData.Channel_Work_.pipes[1].seq.split("").reverse().join("");
    const enter = safeBase64Decode(embeddedData.Linear_design.capsules[2].blk);

    Messageviewer = send + message + answer + enter;
  } catch (err) {
    console.error("❌ Ошибка показа сообщений:", err);
  }
})();
