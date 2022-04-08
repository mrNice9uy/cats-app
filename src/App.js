import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Checkboxes from "./components/Checkboxes";
import Image from "./components/Image";
import { AppWrapper } from "./styledComponents/AppWrapper";

const App = () => {
  const [enabledCheck, setEnabledCheck] = useState(true);
  const [refreshCheck, setRefreshCheck] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  const getImgUrl = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setImgUrl(data[0].url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImgUrl();
  }, []);

  let autoRefresh = setInterval(() => {
    if (refreshCheck) {
      getImgUrl();
    }
    clearInterval(autoRefresh);
  }, 5000);

  return (
    <AppWrapper>
      <Checkboxes
        enabled={enabledCheck}
        setEnabled={setEnabledCheck}
        refresh={refreshCheck}
        setRefresh={setRefreshCheck}
      />
      <Button isDisabled={!enabledCheck} setNewUrl={getImgUrl} />
      {imgUrl === undefined ? "Loading" : <Image src={imgUrl} />}
    </AppWrapper>
  );
};

export default App;
