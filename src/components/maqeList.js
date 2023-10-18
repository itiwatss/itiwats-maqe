import { Avatar, Divider, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

export default function MaqeList({ dataList }) {
  return (
    <Stack
      sx={{
        background: "#EEEEEE",
        p: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "75%",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          MAQE Forum
        </Typography>
        <Typography variant="body1">
          Your current timezone is: Asia/Bangkok
        </Typography>
        {dataList.map((e) => {
          return (
            <Stack
              direction="column"
              key={e.id}
              sx={{
                width: "100%",
                bgcolor: e.id % 2 === 0 ? "#CCECFF" : "white",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                borderRadius: "3px",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                px={1.5}
                py={1}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={e.author.avatar_url}
                  sx={{ width: 24, height: 24 }}
                />
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Typography
                    variant="body2"
                    color="#F8491F"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {e.author.name}
                  </Typography>
                  <Typography variant="body2" color="grey">
                    posted on
                  </Typography>
                  <Typography variant="body2" color="grey">
                    {dayjs(e.created_at).format("dddd, MMMM D, YYYY, HH:mm ")}
                  </Typography>
                </Stack>
              </Stack>
              <Divider />
              <Stack direction="row" spacing={1} px={1.5} py={1.5}>
                <img
                  src={e.image_url}
                  alt=""
                  style={{
                    width: "200px",
                    height: "100%",
                  }}
                />
                <Stack direction="column" spacing={1} px={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {e.title}
                  </Typography>
                  <Typography variant="body1">{e.body}</Typography>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
