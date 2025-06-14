import { lazy, Suspense, useEffect } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault(); // Prevent browser's default Ctrl+K action (e.g., search)
        document.body.classList.toggle('light-theme');

        // Optional: Persist theme preference
        if (document.body.classList.contains('light-theme')) {
          localStorage.setItem('theme', 'light');
        } else {
          localStorage.setItem('theme', 'dark');
        }
      }
    };

    // Apply persisted theme on load
    const persistedTheme = localStorage.getItem('theme');
    if (persistedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
    // Dark theme is default (no class needed or ensure 'dark-theme' class is default if preferred)

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
