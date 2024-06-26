const axios = require('axios');
const { updateDataToFirestore } = require('./firestore');

const hitSentiment = async (transcribeResult, uid, docID) => {
    try {
        const response = await axios.post('/sentiment', {
            transcription: transcribeResult
        })

        const data = {
            sentiment: response.data.sentiment_analysis,
        };

        const ipnutTitle = "sentiment"
        updateDataToFirestore(data, uid, docID, ipnutTitle);

        console.log("Data result : ", data, "\n");

        return data;
    } catch (error) {
        console.error("An error occurred while processing the transcription: ", error);
        return error;
    }
}

const hitWordcloud = async (transcribeResult, uid, docID) => {
    try {
        const response = await axios.post('/wordcloud', {
            transcription: transcribeResult
        })

        const data = {
            wordcloud: response.data.wordcloud,
        };

        const ipnutTitle = "wordcloud"
        updateDataToFirestore(data, uid, docID, ipnutTitle);

        console.log("Data result : ", data, "\n");

        return data;
    } catch (error) {
        console.error("An error occurred while processing the transcription: ", error);
        return error;
    }
}

const hitSummarize = async (transcribeResult, uid, docID) => {
    try {
        const response = await axios.post('/summarize', {
            transcription: transcribeResult
        })

        const data = {
            summarize: response.data.summary,
        };

        const ipnutTitle = "summarize"
        updateDataToFirestore(data, uid, docID, ipnutTitle);

        console.log("Data result : ", data, "\n");

        return data;
    } catch (error) {
        console.error("An error occurred while processing the transcription: ", error);
        return error;
    }
}

const hitEntity = async (transcribeResult, uid, docID) => {
    try {
        const response = await axios.post('/entity', {
            transcription: transcribeResult
        })

        const data = {
            entity: response.data.ner_analysis,
        };

        const ipnutTitle = "entity"
        updateDataToFirestore(data, uid, docID, ipnutTitle);

        console.log("Data result : ", data, "\n");

        return data;
    } catch (error) {
        console.error("An error occurred while processing the transcription: ", error);
        return error;
    }
}

const hitTopics = async (transcribeResult, uid, docID) => {
    try {
        const response = await axios.post('/topic_model', {
            transcription: transcribeResult
        })

        const data = {
            topicModel: response.data.topics,
        };

        const ipnutTitle = "topicModel"
        updateDataToFirestore(data, uid, docID, ipnutTitle);

        console.log("Data result : ", data, "\n");

        return data;
    } catch (error) {
        console.error("An error occurred while processing the transcription: ", error);
        return error;
    }
}

module.exports = {
    hitSentiment,
    hitWordcloud,
    hitSummarize,
    hitEntity,
    hitTopics
}