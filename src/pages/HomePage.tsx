import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import useSampleStore from "../stores/sampleStores";

export const HomePage: React.FC = () => {
  const [imgUrl, setImgUrl] = useState("");

  const { price, amount } = useSampleStore((state) => state);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        const res = response.data;
        if (res.status) {
          setImgUrl(res.message);
        }

        console.log("回應的data", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>這是首頁</h1>
      <h1>這是首頁</h1>
      <h1>這是首頁</h1>
      <h1>
        我在首頁也可以拿到sample store中的價格:{price} 跟sample store中的數量: {amount}{" "}
      </h1>
      <img src={imgUrl} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        magnam blanditiis labore reprehenderit repellendus porro debitis?
        Deleniti illum vitae cum sequi obcaecati ratione quia. Animi a ad
        explicabo illum totam.
      </p>
      <br />
      <Link to="/login">跳到登入頁</Link>
    </>
  );
};
