"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Link,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  Stack,
  FormLabel,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    firstName: "Tope",
    lastName: "Smith",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyType: "",
    companyCountry: "",
    interestedIn: "",
    contactNumber: "",
    agreeToTerms: false,
    agreeToNotifications: false,
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleCheckboxChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.checked,
    });
  };

  const companyTypes = ["Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Other"];
  const countries = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Other"];
  const interests = ["Buying only", "Selling only", "Both buying and selling"];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, sm: 6, md: 4 },
        pt:{md: 15},
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements - hidden on mobile */}
      {!isMobile && (
        <Box
          sx={{
            width: { sm: '400px', md: '630px' ,lg:'674px' },
            height: { sm: '400px', md: '630px',lg:'674px' },
            position: 'absolute',
            bottom: { sm: '-200px', md: '-120px', lg :"-140px" },
            left: { sm: '-200px', md: '-250px',lg :"-250px" },
            overflow: 'hidden',
          }}
        >
          <Box
            width="100%"
            height="100%"
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              background: "radial-gradient(circle at center, rgba(255, 141, 46, 0.51) 10%, rgba(255, 180, 67, 0) 55%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { sm: '250px', md: '404px' },
                height: { sm: '200px', md: '327px' },
                position: "absolute",
                top: 240,
                left: 100,
                overflow: "hidden",
                backgroundImage: "url('/signup1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box
              sx={{
                width: { sm: '180px', md: '270px', lg :"303px"  },
                height: { sm: '120px', md: '190px',lg :"207px"  },
                overflow: "hidden",
                position: "absolute",
                right: { sm: '20px', md: '45px' ,lg: '50px' },
                bottom: { sm: '80px', md: '125px', lg: '145px' },
                backgroundImage: "url('/signup2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box
              sx={{
                width: { sm: '160px', md: '200px', lg: '270px' },
                height: { sm: '160px', md: '200px', lg: '270px' },
                overflow: "hidden",
                position: "absolute",
                right: { sm: '50px', md: '130px', lg: '100px' },
                top: { sm: '30px', md: '160px',lg: '110px' },
                backgroundImage: "url('/signup3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "scaleX(-1)",
              }}
            />
          </Box>
        </Box>
      )}

      {/* Form Container */}
      <Stack
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '500px', md: '450px', lg: '510px' },
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Title Section */}
        <Box sx={{ mb: { xs: 3, sm: 4, md: 5 }, ml:{md: 8, lg:11}, textAlign: { xs: 'center', sm: 'left', } }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: '24px', sm: '28px', md: '32px' },
            }}
          >
            Create Your Account
          </Typography>
          <Typography
            variant="body2"
            color="rgba(14, 19, 24, 1)"
            sx={{ fontWeight: 400, fontSize: { xs: '14px', sm: '16px' } }}
          >
            Already have an account?{" "}
            <Link href="#" underline="hover" color="rgba(253, 126, 20, 1)">
              Login
            </Link>
          </Typography>
        </Box>

        {/* Form Section */}
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 3 } }}>
          {/* First & Last Name */}
          <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
              <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
                First Name
              </FormLabel>
              <TextField
                fullWidth
                value={formData.firstName}
                onChange={handleChange("firstName")}
                placeholder="Enter first name"
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  "& .MuiOutlinedInput-root": { borderRadius: "8px" }
                }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
              <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
                Last Name
              </FormLabel>
              <TextField
                fullWidth
                value={formData.lastName}
                onChange={handleChange("lastName")}
                placeholder="Enter last name"
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  "& .MuiOutlinedInput-root": { borderRadius: "8px" }
                }}
              />
            </Box>
          </Box>

          {/* Email */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
              Email
            </FormLabel>
            <TextField
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="Enter your email"
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                "& .MuiOutlinedInput-root": { borderRadius: "8px" }
              }}
            />
          </Box>

          {/* Password */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
              Create Password
            </FormLabel>
            <TextField
              fullWidth
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
              placeholder="Enter password"
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                "& .MuiOutlinedInput-root": { borderRadius: "8px" }
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
              Confirm Password
            </FormLabel>
            <TextField
              fullWidth
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="Confirm password"
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                "& .MuiOutlinedInput-root": { borderRadius: "8px" }
              }}
            />
          </Box>

          {/* Company Name */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
              Company Name
            </FormLabel>
            <TextField
              fullWidth
              value={formData.companyName}
              onChange={handleChange("companyName")}
              placeholder="Enter company name"
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                "& .MuiOutlinedInput-root": { borderRadius: "8px" }
              }}
            />
          </Box>

         
{/* Company Type */}
<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
    Company Type
  </FormLabel>
  <Select
    fullWidth
    value={formData.companyType}
    onChange={handleChange("companyType")}
    sx={{
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: "8px",
      "& .MuiSelect-icon": {
        color: "rgba(253, 126, 20, 1)", // custom expand icon color
      },
    }}
  >
    {companyTypes.map((type) => (
      <MenuItem key={type} value={type}>
        {type}
      </MenuItem>
    ))}
  </Select>
</Box>

{/* Company Country */}
<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
    Company Country
  </FormLabel>
  <Select
    fullWidth
    value={formData.companyCountry}
    onChange={handleChange("companyCountry")}
    sx={{
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: "8px",
      "& .MuiSelect-icon": {
        color: "rgba(253, 126, 20, 1)", // custom expand icon color
      },
    }}
  >
    {countries.map((country) => (
      <MenuItem key={country} value={country}>
        {country}
      </MenuItem>
    ))}
  </Select>
</Box>

{/* Interested In */}
<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
    Interested in buying and selling
  </FormLabel>
  <Select
    fullWidth
    value={formData.interestedIn}
    onChange={handleChange("interestedIn")}
    sx={{
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: "8px",
      "& .MuiSelect-icon": {
        color: "rgba(253, 126, 20, 1)", // custom expand icon color
      },
    }}
  >
    {interests.map((interest) => (
      <MenuItem key={interest} value={interest}>
        {interest}
      </MenuItem>
    ))}
  </Select>
</Box>

          {/* Contact Number */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <FormLabel sx={{ color: "rgba(26, 26, 26, 1)", fontWeight: 400, fontSize: "14px" }}>
              Contact Number
            </FormLabel>
            <TextField
              fullWidth
              value={formData.contactNumber}
              onChange={handleChange("contactNumber")}
              placeholder="Enter contact number"
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                "& .MuiOutlinedInput-root": { borderRadius: "8px" }
              }}
            />
          </Box>

          {/* Terms */}
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToNotifications}
                onChange={handleCheckboxChange("agreeToNotifications")}
                size="small"
              />
            }
            label={
              <Typography variant="body2" color="rgba(99, 101, 126, 1)" sx={{ fontSize: { xs: '13px', sm: '14px' } }}>
                I understand that by submitting this form I will receive transactional notifications and announcements
              </Typography>
            }
            sx={{ alignItems: "flex-start", mt: 1 }}
          />

          <FormControlLabel
            control={
              <Checkbox checked={formData.agreeToTerms} onChange={handleCheckboxChange("agreeToTerms")} size="small" />
            }
            label={
              <Typography variant="body2" color="rgba(99, 101, 126, 1)" sx={{ fontSize: { xs: '13px', sm: '14px' } }}>
                I agree to Open Mineral's{" "}
                <Link href="#" color="rgba(253, 126, 20, 1)" underline="hover">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" color="rgba(253, 126, 20, 1)" underline="hover">
                  Privacy Policy
                </Link>
              </Typography>
            }
            sx={{ alignItems: "flex-start" }}
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: "rgba(253, 126, 20, 1)",
              color: "white",
              fontWeight: 600,
              mt: 2,
              fontSize: { xs: '14px', sm: '16px' },
              "&:hover": {
                backgroundColor: "rgba(233, 106, 0, 1)",
              }
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Form;