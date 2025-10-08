"use client";

import BrowseSearch from '@/components/Search/BrowseSearch';
import RequestAvailbility from '@/components/Search/RequestAvailbility';
import SearchAssay from '@/components/Search/SearchAssay';
import SearchHeader from '@/components/Search/SearchHeader';
import { SearchProduct } from '@/components/Search/SearchProduct';
import SidebarForSearch from '@/components/Search/SidebarForSearch';
import Integration from '@/components/settings/Integration';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

const page = () => {
  const [selected, setSelected] = useState("Select a Product");


  const renderContent = () => {
        switch (selected) {
          case  "Select a Product": return <SearchProduct/>;
          case  "Search In Assays": return <SearchAssay />;
          case  "Browse Search Results": return<BrowseSearch/>;
          case  "Request Availability": return <RequestAvailbility />;
          default: return null;
        }
   };

  const tabs = [
    { label: "Select a Product" },
    { label: "Search In Assays" },
    { label: "Browse Search Results" },
    { label: "Request Availability" },
  ]

  return (
    <Stack
      direction="row"
      width="100%"
      height="100%"
      bgcolor={"rgb(249, 249, 249)" }
    >
      {(
        <Stack
          width="226px"
          bgcolor="white"
        >
          <SidebarForSearch header='Search & Buy' tabs={tabs} selected={selected} setSelected={setSelected} />
        </Stack>
      )}

      <Stack pl={6} pt={3} flex={1}>
        <Typography variant="h1" sx={{ fontWeight: 500, pb:1, fontSize: "32px" }}>
                Search & Buy
              </Typography>
              <Typography
                variant="caption"
                sx={{ color:"rgba(28, 28, 28, 1)",pb:2.5, fontWeight: 500, fontSize: "16px" }}
              >
                Find products matching your own criteria
              </Typography>
        <SearchHeader active={selected} />
        {renderContent()}
      </Stack>
    </Stack>
  );
};

export default page;
