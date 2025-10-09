"use client";

import { SearchProduct } from '@/components/Search/SearchProduct';
import { AddProduct } from '@/components/Search/Sell/AddProduct';
import SellSearchAssay from '@/components/Search/Sell/SellSearchAssay';
import SellSearchHeader from '@/components/Search/Sell/SellSearchHeader';
import SidebarForSearch from '@/components/Search/SidebarForSearch';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

const page = () => {
  const [selected, setSelected] = useState("Select a Product");


  const renderContent = () => {
        switch (selected) {
          case  "Select a Product": return <SearchProduct/>;
          case  "Search In Assays": return <SellSearchAssay />;
          case  "Add Products": return<AddProduct/>;
          default: return null;
        }
   };

  const tabs = [
    { label: "Select a Product" },
    { label: "Search In Assays" },
    { label: "Add Products" },
  ]

  const defaultLabels = [
  "Select a Product",
  "Search in Assays",
  "Add Products",
];


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
          <SidebarForSearch header='Search & Sell' tabs={tabs} selected={selected} setSelected={setSelected} />
        </Stack>
      )}

      <Stack pl={6} pt={3} flex={1}>
        <Typography variant="h1" sx={{ fontWeight: 500, pb:1, fontSize: "32px" }}>
                Search & Sell
              </Typography>
              <Typography
                variant="caption"
                sx={{ color:"rgba(28, 28, 28, 1)",pb:2.5, fontWeight: 500, fontSize: "16px" }}
              >
                Find products matching your own criteria
              </Typography>
        <SellSearchHeader active={selected} labels={defaultLabels} />
        {renderContent()}
      </Stack>
    </Stack>
  );
};

export default page;
