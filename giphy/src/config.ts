const CONFIG = {
    API_KEY : 'N6OA7ixSYYsPf3LE987xR4UvqY44saPN',
    giphyBaseUrl: 'https://api.giphy.com',
    TranslateUrl:(searchParam: string)=> `${CONFIG.giphyBaseUrl}/v1/gifs/translate?api_key=${CONFIG.API_KEY}&s=${searchParam}`,
    EVENTS:{
        RESULT_FETCHED:'RESULT:FETCHED',
        ADD_CONVERSATION:'ADD_CONVERSATION',
        CLEAR_CHAT:'CLEAR_CHAT'
    }
};
export default CONFIG;