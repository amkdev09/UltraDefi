import { useCallback } from 'react';
import { decryptData } from '../utils/encryption';
import Cookies from 'js-cookie';

const useAuth = () => {
  const storedAddress = Cookies.get("address");

  let address = null;
  if (storedAddress) {
    // Handle both legacy unencoded values and new encodeURIComponent values
    let cipherText = storedAddress;
    try {
      cipherText = decodeURIComponent(storedAddress);
    } catch {
      // If it's not URI-encoded, just use the raw value
      cipherText = storedAddress;
    }
    address = decryptData(cipherText);
  }

  const clearAddress = useCallback(() => {
    Cookies.remove("address");
    Cookies.remove("isRegistered");
  }, []);

  const refferalLink = useCallback(() => {
    return storedAddress ? `${window.location.origin}/?ref=${storedAddress}` : null;
  }, [storedAddress]);

  return {
    isRegistered: Cookies.get("isRegistered") === "true",
    address: address,
    clearAddress,
    refferalLink: refferalLink(),
  };
};

export default useAuth;
