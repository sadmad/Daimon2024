import { useEffect } from 'react';

const useScrollToTopOnReload = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts (page reloads)
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      sessionStorage.removeItem('isPageReloaded');
    };

    // Add the event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};

export default useScrollToTopOnReload;