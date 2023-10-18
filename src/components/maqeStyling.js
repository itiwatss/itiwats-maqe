import { Box, Stack, Typography } from "@mui/material";

export default function MaqeStyling() {
  return (
    <Stack direction="column">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "16px",
          marginTop: "100px",
          width: "800px",
          height: "15px",
          background: "black",
          boxShadow: "5px 0px 20px -2px rgba(0,0,0,1);",
          borderRadius: "6px",
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          sx={{
            position: "absolute",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              background: "linear-gradient(#72C6E5, #96D1D4)",
              color: "white",
              position: "relative",
              borderRadius: "100px",
              boxShadow: "5px 0px 20px -2px rgba(0,0,0,0.75);",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                border: "5px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "130px",
                height: "130px",
                borderRadius: "100px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Helvetica",
                  textShadow: "0px 0px 5px rgba(0,0,0,1);",
                }}
              >
                M
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              background: "linear-gradient(#72C6E5, #96D1D4)",
              color: "white",
              position: "relative",
              borderRadius: "100px",
              boxShadow: "5px 0px 20px -2px rgba(0,0,0,0.75);",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                border: "5px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "130px",
                height: "130px",
                borderRadius: "100px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Helvetica",
                  textShadow: "0px 0px 5px rgba(0,0,0,1);",
                }}
              >
                A
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              background: "linear-gradient(#72C6E5, #96D1D4)",
              color: "white",
              position: "relative",
              borderRadius: "100px",
              boxShadow: "5px 0px 20px -2px rgba(0,0,0,0.75);",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                border: "5px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "130px",
                height: "130px",
                borderRadius: "100px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Helvetica",
                  textShadow: "0px 0px 5px rgba(0,0,0,1);",
                  transform: "rotate(0.65turn)",
                }}
              >
                Q
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              background: "linear-gradient(#72C6E5, #96D1D4)",
              color: "white",
              position: "relative",
              borderRadius: "100px",
              boxShadow: "5px 0px 20px -2px rgba(0,0,0,0.75);",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                border: "5px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "130px",
                height: "130px",
                borderRadius: "100px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Helvetica",
                  textShadow: "0px 0px 5px rgba(0,0,0,1);",
                }}
              >
                E
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
