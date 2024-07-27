import axios from "axios";
// Function to check if an email is valid
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to generate a random string of a given length
  export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  // Function to check if a string is greater than a certain number of characters
  export function isStringLengthGreaterThan(str: string, minLength = 7): boolean {
    return str.length > minLength;
  }

  export function isValidUrl(url) {
    const regex = /^(https?:\/\/)?([^\s$.?#].[^\s]*)$/i;
    return regex.test(url);
  }

  async function isUrlReachable(url) {
    try {
      await axios.head(url, { timeout: 5000 }); // Set a timeout for the request
      return true;
    } catch (error) {
      return false;
    }
  }

  async function checkUrl(url) {
    if (!isValidUrl(url)) {
      return { valid: false, reachable: false };
    }
    
    const reachable = await isUrlReachable(url);
    return { valid: true, reachable };
  }
  