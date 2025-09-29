"use client"

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Container,
} from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import { useState } from "react"

const PricingCards = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const tiers = [
    {
      name: "Essentials Tier",
      price: "$30.00",
      buttonColor: "inherit",
      buttonVariant: "contained",
      buttonSx: {
        backgroundColor: "rgba(51, 51, 51, 1)",
        color: "white",
        "&:hover": { backgroundColor: "#303030" },
      },
      features: [
        {
          category: "Basic Data Access",
          items: ["Access essential data on mining companies, their operations, and partner ships."],
        },
        {
          category: "Limited Investment Insights",
          items: ["Receive basic insights on potential investment opportunities in the mining sector."],
        },
        {
          category: "Introduction to Commodities Market",
          items: ["Gain entry-level access to information on gold, silver, and commodities."],
        },
        {
          category: "Monthly Newsletter",
          items: ["Stay updated with a monthly newsletter on industry trends and market updates."],
        },
        {
          category: "Standard Customer Support",
          items: ["Access standard customer support for assistance with platform navigation."],
        },
      ],
    },
    {
      name: "Standard Tier",
      price: "$60.00",
      isBestValue: true,
      buttonColor: "primary",
       buttonVariant: "contained",
      buttonSx: {
        backgroundColor: "rgba(51, 51, 51, 1)",
        color: "white",
        "&:hover": { backgroundColor: "#303030" },
      },
      features: [
        {
          category: "Comprehensive Data Access",
          items: ["Unlock detailed data on mining companies, investments, partnerships, and operations."],
        },
        {
          category: "Advanced Investment Analytics",
          items: ["Receive in-depth analytics for informed decision-making on investments."],
        },
        {
          category: "Expanded Commodities Market Insights",
          items: ["Access comprehensive information and trends in the gold mining market."],
        },
        {
          category: "Bi-Monthly Webinars",
          items: ["Attend exclusive webinars covering industry insights and expert perspectives."],
        },
        {
          category: "Priority Customer Support",
          items: ["Enjoy priority support for quicker issue resolution and assistance."],
        },
      ],
    },
    {
      name: "Premium Tier",
      price: "$95.00",
      buttonColor: "inherit",
      buttonVariant: "contained",
      buttonSx: {
        backgroundColor: "rgba(51, 51, 51, 1)",
        color: "white",
        "&:hover": { backgroundColor: "#303030" },
      },
      features: [
        {
          category: "Unlimited Data Access",
          items: ["Enjoy unrestricted access to all available data and analytics on the platform."],
        },
        {
          category: "Personalized Investment Consultation",
          items: ["Receive one-on-one consultation sessions for personalized investment strategies."],
        },
        {
          category: "Exclusive Market Reports",
          items: ["Access premium market reports providing in-depth analysis and forecasts."],
        },
        {
          category: "VIP Invitations to Industry Events",
          items: ["Receive invitations to exclusive mining industry events and conferences."],
        },
        {
          category: "Concierge Customer Support",
          items: ["Experience dedicated concierge-level support for a seamless user experience."],
        },
      ],
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container  justifyContent="center">
        {tiers.map((tier, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              onClick={() => setSelectedCard(index)}
              sx={{
                height: "100%",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border:
                  selectedCard === index 
                    ? "2px solid rgba(253, 126, 20, 1)"
                      : "1px solid #e0e0e0",
                backgroundColor:  "white",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                transform: selectedCard === index ? "translateY(-30px)" : "translateY(0)",
                "&:hover": {
                  transform: selectedCard === index ? "translateY(-30px)" : "translateY(-20px)",
                 
                },
              }}
            >
              {(selectedCard === index) && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(253, 126, 20, 1)",
                    color: "white",
                    textAlign: "center",
                    py: 0.5,
                    fontSize: "12px",
                    fontWeight: 600,
                    zIndex: 1,
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    BEST VALUE
                  </Typography>
                </Box>
              )}

              <CardContent sx={{ flexGrow: 1, pt: tier.isBestValue || selectedCard === index ? 5 : 3 }}>
                <Typography variant="h5" component="h2" gutterBottom textAlign="center" fontWeight="bold">
                  {tier.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 2 }}>
                  {tier.name === "Essentials Tier" &&
                    "Dip your toes into the world of mining intelligence with our Essentials Tier."}
                  {tier.name === "Standard Tier" &&
                    "Upgrade to our Standard Tier for a deeper dive into the mining industry."}
                  {tier.name === "Premium Tier" &&
                    "Experience the pinnacle of mining intelligence with our Premium Tier."}
                </Typography>

                <Typography variant="h4" component="div" textAlign="center" fontWeight="bold" sx={{ mb: 3 }}>
                  {tier.price}
                </Typography>

                <Button
                  variant={tier.buttonVariant}
                  fullWidth
                  size="large"
                  sx={{
                    mb: 3,
                    py: 1.5,
                    fontWeight: "bold",
                    ...(selectedCard === index
                      ? {
                          backgroundColor: "rgba(253, 126, 20, 1)",
                          "&:hover": { backgroundColor: "rgba(253, 126, 20, 1)" },
                        }
                      : tier.buttonSx),
                  }}
                >
                  BUY NOW
                </Button>

                {tier.features.map((featureGroup, groupIndex) => (
                  <Box key={groupIndex} sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                      {featureGroup.category}:
                    </Typography>
                    <List dense sx={{ py: 0 }}>
                      {featureGroup.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CheckIcon
                              sx={{
                                fontSize: 16,
                                color: "rgba(253, 126, 20, 1)",
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            color="rgba(75, 75, 75, 1)"
                            primaryTypographyProps={{
                              variant: "body2",
                              sx: { fontSize: "0.875rem" },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PricingCards
