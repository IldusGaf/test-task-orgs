import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../../shared/store/rootStore";
import { useEffect } from "react";
import { Loader } from "../../../../../widgets/Loader";
import dayjs from "dayjs";

export const TableOrg = observer(() => {
  const headers = ["ID", "Название", "Активна до", "Действие"];
  const { orgs } = useStore();
  useEffect(() => {
    orgs.load();
  }, []);

  return (
    <Box sx={{ flex: "1 0 85%", height: "85%" }}>
      {orgs.isLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper} sx={{ height: "100%" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((text) => (
                  <TableCell key={text}>{text}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orgs.items.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {dayjs.unix(row.exp).format("DD.MM.YYYY HH:mm:ss")}
                  </TableCell>
                  <TableCell>
                    <Button
                      type={"button"}
                      onClick={() => orgs.del({ id: row._id })}
                    >
                      Удалить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
});
