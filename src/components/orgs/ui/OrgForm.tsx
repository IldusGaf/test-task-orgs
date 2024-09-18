import { Button, TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";

export const OrgForm = <T extends FieldValues>() => {
  const { control } = useFormContext<T>();
  return (
    <>
      <Controller
        name={"name" as Path<T>}
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <TextField
            label={"Название организации"}
            inputRef={ref}
            required
            {...field}
            fullWidth
          />
        )}
      />
      <Controller
        name={"exp" as Path<T>}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, ref, ...field } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
            <DateTimePicker
              inputRef={ref}
              label="Актуальна до"
              onChange={onChange}
              sx={{ width: "40%" }}
              slotProps={{
                field: {
                  clearable: true,
                },
                textField: {
                  required: true,
                },
              }}
              {...field}
            />
          </LocalizationProvider>
        )}
      />

      <Button type={"submit"}>Сохранить</Button>
    </>
  );
};
