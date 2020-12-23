import { styled } from 'goober';
import Head from 'next/head';
import Link from 'next/link';
import { StoreContext } from 'storeon/preact';

import 'services/style';
import { createThemeStore } from 'services/store';
import DynamicFavicon from 'components/DynamicFavicon';
import { Text, Page } from 'components/core';

const NotFoundImg = styled('img')`
  margin-top: 1em;
  width: 200px;
  max-width: 80vw;
`;

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>There's nothing here.</title>
      </Head>
      <DynamicFavicon face="mad" />

      <StoreContext.Provider value={createThemeStore()}>
        <Page>
          <Text>
            Seems like you're a bit lost. Wanna <Link href="/">go home</Link>?
          </Text>

          <NotFoundImg src="/spookyscary.png" />
        </Page>
      </StoreContext.Provider>
    </>
  );
}
