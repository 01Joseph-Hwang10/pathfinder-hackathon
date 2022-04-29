import React from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  // useEffect(() => {
  //   (async function () {
  //     console.log(await API.endpoint("upload"));
  //   })();
  // }, []);
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
  return <>Hello World!</>;
};

export default Home;
