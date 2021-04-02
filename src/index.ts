import axiosBase, { AxiosInstance } from 'axios';

export default class Slacker {
    axios: AxiosInstance;
    constructor(
        protected slack_token: string,
        protected slack_channel: string)
    {
        this.axios = axiosBase.create({
            baseURL: 'https://slack.com/api',
            headers: {
                'Authorization' : `Bearer ${this.slack_token}`
            }
        });
    }

    async post(text: string, mention_to_channel: boolean = false) {
        return await this.axios.post('/chat.postMessage', {
            channel: `#${this.slack_channel}`,
            text: `${mention_to_channel ? "<!channel> " : ""}${text}`
        });
    }
}
