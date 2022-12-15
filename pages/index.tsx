import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/belleza-consciente");
  }, []);

  return (
    <>
      <Box sx={{ height: "100vh" }}></Box>
    </>
  );
}
