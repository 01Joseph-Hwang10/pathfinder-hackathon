import React, { useEffect } from "react";
import type { NextPage } from "next";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";

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
  return <>Hello World!</>;
};

export default Home;
