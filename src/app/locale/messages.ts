export function getMessage(key : string, subkey : string | null = null) : string {
    const messages = require(`./messages/locale.pt.json`);
    let message = messages[key];
    if(subkey){
        message = messages[key][subkey];
    }
    return message;
}

export function getMask(key : string) : string {
    const messages = require(`./masks/masks.pt.json`);
    return messages[key];
}