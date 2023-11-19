"use client";

import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Stack, Alert } from "@mui/material";
import ThreadPreview from "./ThreadPreview";
import { Thread } from "@/types";

const genericErrorMessage = "Sorry, error. Try to reload!";

function ThreadList() {
  const { isLoading, data, error } = useQuery<Thread[]>({
    queryKey: ["threads"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json(),
      ),
  });

  if (error) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Alert severity="error">{error.message || genericErrorMessage}</Alert>
      </Stack>
    );
  }

  if (isLoading || !data) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  return data.map((thread) => (
    <ThreadPreview key={thread.id} thread={thread} />
  ));
}

export default ThreadList;
