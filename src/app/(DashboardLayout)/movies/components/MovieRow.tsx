import { Movie } from "@/app/lib/types";
import { TableCell, TableRow, Typography } from "@mui/material";
import DeleteMovieButton from "@/app/(DashboardLayout)/movies/components/DeleteMovieButton";
import NavButton from "../../components/shared/NavButton";

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

      <TableCell align="right" className="d-flex">
        <NavButton
          label={"Details"}
          href={`/movies/${movie._id}`}
        />
        &nbsp;
        <DeleteMovieButton movieId={movie._id} />
      </TableCell>
    </TableRow>
  );
}
