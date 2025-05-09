'use client';

import { ReactElement } from 'react';

// next
import { SessionProvider } from 'next-auth/react';

// project-imports
import ThemeCustomization from 'themes';
import { ConfigProvider } from 'contexts/ConfigContext';
import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';

import Snackbar from 'components/@extended/Snackbar';

// ==============================|| PROVIDER WRAPPER  ||============================== //

export default function ProviderWrapper({ children }: { children: ReactElement }) {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <Locales>
          <ScrollTop>
            <SessionProvider refetchInterval={0}>
              <Snackbar />
              {children}
            </SessionProvider>
          </ScrollTop>
        </Locales>
      </ThemeCustomization>
    </ConfigProvider>
  );
}
