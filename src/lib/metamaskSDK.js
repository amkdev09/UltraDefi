import { MetaMaskSDK } from '@metamask/sdk';

let sdkInstance = null;

/**
 * Get or create the MetaMask SDK instance.
 * SDK supports desktop (extension) and mobile (deeplink to MetaMask app).
 */
export const getMetaMaskSDK = () => {
  if (typeof window === 'undefined') return null;

  if (!sdkInstance) {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent || ''
      );

    sdkInstance = new MetaMaskSDK({
      dappMetadata: {
        name: 'UltraDefi',
        url: window.location.origin,
      },
      // Optional: Infura key improves reliability; add VITE_INFURA_API_KEY in .env
      infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY || undefined,
      // On desktop keep using the extension only; on mobile allow deep linking
      extensionOnly: !isMobile,
    });
  }
  return sdkInstance;
};

export default getMetaMaskSDK;
