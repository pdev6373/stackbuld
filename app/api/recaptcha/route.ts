// "use server";
// import axios from "axios";

// export async function verifyCaptchaAction(token: string) {
//   console.log(token);
//   console.log("hello");

//   const res = await axios.post(
//     `https://www.google.com/recaptcha/enterprise.js?render=${process.env.RECAPTCHA_SECRET_KEY}`
//   );

//   console.log(res);

//   if (res.data.score > 0.1) {
//     return true;
//   } else {
//     return false;
//   }
// }

import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

export async function POST(req: Request) {
  const body = await req.json();

  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(process.env.PROJECT_ID!);
  const request = {
    assessment: {
      event: {
        token: body.token,
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      },
    },
    parent: projectPath,
  };
  const [response] = await client.createAssessment(request);
  if (!response.tokenProperties?.valid) {
    return new Response(
      JSON.stringify({
        message: "Invalid token",
        score: response?.riskAnalysis?.score,
        reason: response.tokenProperties?.invalidReason,
      }),
      {
        status: 400,
      }
    );
    // res.status(400)?.json({
    //   message: "Invalid token",
    //   score: response?.riskAnalysis?.score,
    //   reason: response.tokenProperties?.invalidReason,
    // });
    // return;
  }

  if (response.tokenProperties.action === "LOGIN") {
    return new Response(
      JSON.stringify({
        score: response?.riskAnalysis?.score,
        reason: response.riskAnalysis?.reasons,
        message: "Success",
      }),
      {
        status: 200,
      }
    );
    // return res.status(200)?.json({
    //   score: response?.riskAnalysis?.score,
    //   reason: response.riskAnalysis?.reasons,
    //   status: "Ok",
    // });
  } else {
    // return res.status(500)?.json({
    //   reason: response.riskAnalysis?.reasons,
    //   status: "Fail",
    // });
    return new Response(
      JSON.stringify({
        score: response.riskAnalysis?.reasons,
        reason: null,
        message: "Failed",
      }),
      {
        status: 500,
      }
    );
  }
}
