import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import Card from "../components/card";

export default function Home() {
  const [data, setData] = useState({});

  const FetchUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        const userData = response.results[0];
        setData(userData);
      });
  };

  useEffect(() => {
    FetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Card
        name={data.name?.first}
        cityInfo={data.location?.city}
        email={data.email}
        city={data.location?.city}
        state={data.location?.state}
        country={data.location?.country}
        image={data.picture?.large}
        phone={data.location?.street.number}
      />
      <Center>
        <Button onClick={FetchUser} mt={8}>
          Generate new user
        </Button>
      </Center>
    </div>
  );
}
