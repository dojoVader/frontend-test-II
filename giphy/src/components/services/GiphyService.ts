import axios from 'axios';
import CONFIG from './../../config';

export interface IGiphyResult {
    data: IGiphyImagesData,
    meta: Object
}
interface IGiphyImagesData {
    images: {
        downsized: {
            url: string
        }
    }

}
class GiphyService {


    constructor() {

    }
    translate(query: string) {
        return axios.get(CONFIG.TranslateUrl(query));
    }
}

const GiphyApi = new GiphyService();
export default GiphyApi;