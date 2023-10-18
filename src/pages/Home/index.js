import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import MaqeStyling from "../../components/maqeStyling";
import MaqeList from "../../components/maqeList";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [value, setValue] = useState("1");
  const [authorList, setAuthorList] = useState([]);
  const [postsList, setPostsList] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get("http://maqe.github.io/json/authors.json")
      .then((response) => {
        setAuthorList(response.data);
      })
      .catch((error) => {});

    axios
      .get("http://maqe.github.io/json/posts.json")
      .then((response) => {
        setPostsList(response.data);
      })
      .catch((error) => {});

    const result = postsList.map((e) => ({
      ...e,
      author: authorList.filter((author) => author.id === e.author_id)[0],
    }));

    setDataList(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="CSS Styling" value="1" />
            <Tab label="Template and Styling" value="2" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            background: "white",
          }}
        >
          <MaqeStyling />
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ p: 0 }}
        >
          <MaqeList dataList={dataList} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
