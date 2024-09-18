import { Box } from "@mui/material";
import { AddOrg } from "../components/AddOrg";
import { TableOrg } from "../components/TableOrg";
import { useStore } from "../../../shared/store/rootStore";
import { observer } from "mobx-react-lite";
import { CustomSnackBar } from "../../../shared/ui/CustomSnackBar";

export const Orgs = observer(() => {
  const { orgs } = useStore();
  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <AddOrg />
        <TableOrg />
      </Box>
      <CustomSnackBar error={orgs.error} />
    </>
  );
});
