"use client"
import { useState } from "react"
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import LocationDateReserve from "@/components/DateReserve"

const whiteFieldSx = {
  "& .MuiInputBase-input": { color: "white" },
  "& .MuiInput-underline:before": { borderBottomColor: "white" },
  "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
  "& .MuiInput-underline:after": { borderBottomColor: "white" },
  "& .MuiInputLabel-root": { color: "white" },
  "& .MuiInputLabel-root.Mui-focused": { color: "white" },
}

const whiteSelectSx = {
  color: "white",
  "&:before": { borderBottomColor: "white" },
  "&:hover:before": { borderBottomColor: "white" },
  "&:after": { borderBottomColor: "white" },
  "& .MuiSvgIcon-root": { color: "white" },
}

export default function Booking() {
  const [venue, setVenue] = useState("")

  return (
    <main className="w-full flex flex-col items-center space-y-4 mt-10">
      <div className="text-xl font-medium text-white">Book a Venue</div>
      <form className="w-fit flex flex-col space-y-4">

        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          sx={whiteFieldSx}
        />

        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
          sx={whiteFieldSx}
        />

        <FormControl variant="standard">
          <InputLabel id="venue-label" sx={{ color: "white", "&.Mui-focused": { color: "white" } }}>
            Venue
          </InputLabel>
          <Select
            id="venue"
            labelId="venue-label"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            sx={whiteSelectSx}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <div className="mt-4">
            <LocationDateReserve showLocation={false}/>
        </div>

        <button
          type="submit"
          name="Book Venue"
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
        >
          Book Venue
        </button>

      </form>
    </main>
  )
}