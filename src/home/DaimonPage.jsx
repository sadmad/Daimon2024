// src/components/InteractivePage.jsx
import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

function DaimonPage() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Interactive Page
      </Typography>
      <TextField
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      {submittedName && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Hello, {submittedName}!
        </Typography>
      )}
    </Box>
  );
}

export default DaimonPage;
