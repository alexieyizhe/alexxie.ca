import { FC, useEffect } from 'react';
import { ThemeContextProvider, useTheme } from 'services/context/theme';
import { useSiteStore } from 'services/store';
import { s } from 'services/style';

const PageContainer = s('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100vw;
  overflow: hidden;

  transition: background-color 400ms;
  background-color: ${({ theme }) => theme!.colors.background};
`;

const ContentContainer = s('main')`
  position: relative;
  width: 80vw;
  max-width: 510px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const useInitialize = () => {
  const { toggleDarkMode } = useTheme();
  const { toggleDisplayedSection } = useSiteStore();

  useEffect(() => {
    if (!process.browser) return;

    // because next.js renders server-side, we cannot rely on these checks during initial render and must update them after
    const prefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isNighttime = new Date().getHours() > 19 || new Date().getHours() < 8;
    if (prefDark || isNighttime) toggleDarkMode(true);

    const isWorkPage = window.location.pathname === '/work';
    if (isWorkPage) toggleDisplayedSection('work');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const Page: FC = ({ children }) => {
  useInitialize();
  return (
    <ThemeContextProvider>
      <PageContainer>
        <ContentContainer>{children}</ContentContainer>
      </PageContainer>
    </ThemeContextProvider>
  );
};
