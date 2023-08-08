type RECAPTCHATYPE = {
  action: string;
  key: string;
};

export const handleRecaptcha = async ({ action, key }: RECAPTCHATYPE) => {
  const token = await grecaptcha?.enterprise?.execute(key, {
    action: action,
  });
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, action: action }),
  };
  let res = await fetch("/api/recaptcha", options);

  console.log(res);

  const resJson = await res.json();
  const score = await resJson?.score;
  if (score > 0.6) {
    return true;
  } else {
    return false;
  }
};
