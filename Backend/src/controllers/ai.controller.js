const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "code is required" });
    }

    try {
        const response = await aiService(code); 
        res.json({ response }); 
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "Something went wrong!" });
    }
};
