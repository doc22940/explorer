import React, { useState } from 'react';
import Router from 'next/router';
import { Flex, Text } from '@blockstack/ui';

import { Page } from '@components/page';
import { SearchBar } from '@components/search-bar';
import { HomeNav } from '@components/home-nav';
import { DevLinks } from '@components/dev-links';
import { RecentlyViewed } from '@components/recently-viewed';
import { useRecentlyViewedTx } from '../common/hooks/use-recently-viewed-tx';

export const Home = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim().length) return;
    await Router.push('/txid/' + query);
  };

  const recentTxs = useRecentlyViewedTx();

  return (
    <Page>
      <HomeNav />
      <Flex
        as="form"
        flexDirection="column"
        align="center"
        maxWidth="544px"
        mt="20vh"
        justify="center"
        onSubmit={handleSubmit}
      >
        <Text
          as="h1"
          fontSize="36px"
          display="block"
          width="100%"
          textAlign={['center', 'left']}
          mb="extra-loose"
        >
          Stacks Explorer
        </Text>
        <SearchBar onChange={e => setQuery(e.target.value)} />
        <RecentlyViewed transactions={recentTxs} mt="base" />
      </Flex>
      <DevLinks />
    </Page>
  );
};

export default Home;
