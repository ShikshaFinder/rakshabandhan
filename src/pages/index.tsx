import Meet from "@/lib/component/Meet";
import Googlepay from "@/lib/component/googlepay";
import { Analytics } from "@vercel/analytics/react";


import { useState } from "react";
export default function sf() {
  const [a, b] = useState("harsh");
  return (
    <>
     
      <Analytics />
      <Meet />
      <Googlepay />
    </>
  );
}

