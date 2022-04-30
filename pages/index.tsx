import React from "react";
import type { NextPage } from "next";
import Navigation from "@components/common/nav";
import Header from "@components/home/header";
import ModelList from "@components/home/model-list";
// import { API } from "aws-amplify";

const Home: NextPage = () => {
  // useEffect(() => {
  //   (async function () {
  //     const user: CognitoUser = await Auth.signIn({
  //       username: "joseph95501@gmail.com",
  //       password: "joseph2002",
  //     });
  //     console.log(
  //       user.getUserAttributes((err, result) => {
  //         if (err) {
  //           console.log(err);
  //         }
  //         console.log(result);
  //       })
  //     );
  //   })();
  // }, []);
  // useEffect(() => {
  //   (async function () {
  //     console.log(await API.post("upload", "/upload", { data: {} }));
  //   })();
  // }, []);
  return (
    <div className="group w-full focus-within:bg-base-300">
      <Navigation />
      <Header />
      <ModelList />
    </div>
  );
};

export default Home;
