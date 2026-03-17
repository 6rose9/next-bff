import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { getAllMovies } from "@/app/lib/api/movieApi";
import MovieRow from "@/app/(DashboardLayout)/movies/components/MovieRow";
import NewMovieEntry from "./NewMovieEntry";

export default async function MovieList() {
  const movies = await getAllMovies();
  return (
    <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
      <NewMovieEntry />
      <Table
        aria-label="simple table"
        sx={{
          whiteSpace: "nowrap",
          mt: 2,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                variant="subtitle2"
                fontWeight={600}
              >
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="subtitle2"
                fontWeight={600}
              >
                Year
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="subtitle2"
                fontWeight={600}
              >
                Director
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                variant="subtitle2"
                fontWeight={600}
              >
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <MovieRow
              movie={movie}
              key={movie._id}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
