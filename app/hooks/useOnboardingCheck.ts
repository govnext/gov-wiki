import { useEffect, useState } from "react";
import useStores from "./useStores";

/**
 * Hook to check if user needs onboarding.
 * Returns true if user has no collections and is an admin.
 */
export default function useOnboardingCheck() {
  const { collections, auth } = useStores();
  const [needsOnboarding, setNeedsOnboarding] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkOnboarding() {
      try {
        // Only check if user is authenticated
        if (!auth.user) {
          setIsChecking(false);
          return;
        }

        // Only suggest onboarding for admin users
        if (!auth.user.isAdmin) {
          setIsChecking(false);
          return;
        }

        // Load collections if not already loaded
        if (!collections.isLoaded) {
          await collections.fetchAll();
        }

        // Check if user has any collections
        const hasCollections = collections.orderedData.length > 0;
        
        // Check if user has explicitly dismissed onboarding
        const hasSkippedOnboarding = localStorage.getItem('govwiki_onboarding_skipped') === 'true';
        
        setNeedsOnboarding(!hasCollections && !hasSkippedOnboarding);
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setNeedsOnboarding(false);
      } finally {
        setIsChecking(false);
      }
    }

    checkOnboarding();
  }, [collections, auth.user]);

  const skipOnboarding = () => {
    localStorage.setItem('govwiki_onboarding_skipped', 'true');
    setNeedsOnboarding(false);
  };

  return {
    needsOnboarding,
    isChecking,
    skipOnboarding
  };
} 