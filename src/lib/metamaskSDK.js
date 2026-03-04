import { MetaMaskSDK } from '@metamask/sdk';

let sdkInstance = null;

/**
 * Get or create the MetaMask SDK instance.
 * SDK supports desktop (extension) and mobile (deeplink to MetaMask app).
 */
export const getMetaMaskSDK = () => {
  if (!sdkInstance) {
    sdkInstance = new MetaMaskSDK({
      dappMetadata: {
        name: 'UltraDefi',
        url: typeof window !== 'undefined' ? window.location.origin : '',
      },
      // Optional: Infura key improves reliability; add VITE_INFURA_API_KEY in .env
      infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY || undefined,
      // Support mobile (deeplink/QR) alongside desktop extension
      extensionOnly: false,
    });
  }
  return sdkInstance;
};

export default getMetaMaskSDK;
