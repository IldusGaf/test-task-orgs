import { Box } from "@mui/material";
import dayjs from "dayjs";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { IOrgForm } from "../../../model/types/OrgTypes";
import { OrgForm } from "../../../ui/OrgForm";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../../shared/store/rootStore";

export const AddOrg = observer(() => {
  const { orgs } = useStore();
  const methods = useForm<IOrgForm>({
    defaultValues: {
      exp: null,
      name: "",
    },
  });
  const onSubmit: SubmitHandler<IOrgForm> = ({ name, exp }) => {
    orgs.add({
      name,
      exp: dayjs(exp).unix(),
    });
    methods.reset({
      name: "",
      exp: null,
    });
  };
  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
        component="form"
        autoComplete="off"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <OrgForm<IOrgForm> />
      </Box>
    </FormProvider>
  );
});
