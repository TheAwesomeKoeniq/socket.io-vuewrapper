export default new class VueSocketIOLogger {
    constructor() {
        this.debug = false;
        this.prefix = '%cVue-Socket.io: ';
    }

    info(text, data = '') {
        if (!this.debug) {
            return;
        }

        window.console.info(this.prefix+`%c${text}`, 'color: blue; font-weight: 600', '', data);
    }

    error() {
        if (!this.debug) {
            return;
        }

        window.console.error(this.prefix, ...arguments);
    }

    warn() {
        if (!this.debug) {
            return;
        }

        window.console.warn(this.prefix, ...arguments);
    }

    event(text, data = '') {
        if (!this.debug) {
            return;
        }

        window.console.info(this.prefix+`%c${text}`, 'color: blue; font-weight: 600', '', data);
    }
};