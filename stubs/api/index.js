const router = require('express').Router();
const openaiResp = require('./openai.json')

module.exports = router;


router.post("/v1/chat/completions", (req, resp) => {
    const token = req.headers.authorization;
    const {model, temperature, messages} = req.body;
    const text = messages[0].content;
    const outMessage = `Token: ${token}, model: ${model}, temperature: ${temperature}, text: ${text}`;
    openaiResp.choices[0].message.content = outMessage;
    resp.send(openaiResp);
})