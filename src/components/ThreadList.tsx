import { Box, Button, Container, List } from "@mui/material";
import Link from "next/link";
import ThreadPreview from "./ThreadPreview";
import { Thread } from "@/types";

const fakeData: Thread[] = [
  {
    id: "1",
    title: "The Mystery of the Enchanted Forest",
    content: "Deep in the heart of the enchanted forest...",
    author: "WanderlustMage87",
    datePosted: "2023-07-23",
    commentCount: 10,
  },
  {
    id: "2",
    title: "A Journey to the Stars",
    content: "As I looked up at the night sky...",
    author: "StellarExplorer22",
    datePosted: "2023-07-22",
    commentCount: 5,
  },
  {
    id: "3",
    title: "Unraveling the Time Paradox",
    content: "In a world where time bends and twists...",
    author: "TimeTraveler101",
    datePosted: "2023-07-21",
    commentCount: 15,
  },
  {
    id: "4",
    title: "The Quest for the Lost City of Atlantis",
    content: "Legends spoke of an ancient city hidden beneath the waves...",
    author: "OceanicAdventurer",
    datePosted: "2023-07-20",
    commentCount: 8,
  },
  {
    id: "5",
    title: "Secrets of the Ancient Temple",
    content: "Inside the ancient temple, dark secrets awaited...",
    author: "ArchaeoTrailblazer",
    datePosted: "2023-07-19",
    commentCount: 20,
  },
  {
    id: "6",
    title: "The Steampunk Chronicles",
    content: "In a world powered by steam and imagination...",
    author: "SteampunkEnthusiast",
    datePosted: "2023-07-18",
    commentCount: 12,
  },
  {
    id: "7",
    title: "Whispers from Beyond",
    content: "In the silence of the night, faint whispers echoed...",
    author: "EtherealListener",
    datePosted: "2023-07-17",
    commentCount: 6,
  },
  {
    id: "8",
    title: "The Art of Timeless Painting",
    content: "Brush strokes of magic danced on the canvas...",
    author: "PaintingWizard",
    datePosted: "2023-07-16",
    commentCount: 18,
  },
  {
    id: "9",
    title: "Chronicles of the Star Captains",
    content: "Across the cosmos, brave star captains voyaged...",
    author: "StarSailor99",
    datePosted: "2023-07-15",
    commentCount: 25,
  },
  {
    id: "10",
    title: "The Cursed Amulet",
    content:
      "Legend spoke of an amulet that brought both blessings and curses...",
    author: "CursedSeeker",
    datePosted: "2023-07-14",
    commentCount: 9,
  },
];

function ThreadList() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Thread</h3>
        <Link href="/newThread">
          <Button
            sx={{ textTransform: "none" }}
            size="small"
            variant="contained"
          >
            New thread
          </Button>
        </Link>
      </Box>
      <List sx={{ bgcolor: "background.paper" }}>
        {fakeData.map((thread) => (
          <ThreadPreview key={thread.id} thread={thread} />
        ))}
      </List>
    </Container>
  );
}

export default ThreadList;
