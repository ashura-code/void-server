function isStr(str: any): str is string {
    return typeof str === 'string';
  }
  
export const urlEncodeDecode = {
    encode(str: string = ''): string {
      if (!isStr(str)) {
        throw new Error('Please provide a string to encode.');
      }
  
      return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A')
        .replace(/%20/g, '+');
    },
  
    decode(str: string = ''): string {
      if (!isStr(str)) {
        throw new Error('Please provide a string to decode.');
      }
  
      return decodeURIComponent(str.replace(/\+/g, '%20'));
    },
  };
  