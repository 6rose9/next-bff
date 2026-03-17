import { Movie } from "@/app/lib/types";
import { TableCell, TableRow, Typography } from "@mui/material";
import DeleteMovieButton from "@/app/(DashboardLayout)/movies/components/DeleteMovieButton";

interface MovieRowProps {
  movie: Movie;
}

export default function MovieRow({ movie }: MovieRowProps) {
  return (
    <TableRow key={movie._id}>
      <TableCell>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {movie.title}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {movie.year}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {movie.director?.name ?? "Unknown"}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <DeleteMovieButton movieId={movie._id} />
      </TableCell>
    </TableRow>
  );
}
