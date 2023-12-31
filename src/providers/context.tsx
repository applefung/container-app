import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

// import Loading from "shared/Loading";

interface SnackBarOption {
  isOpen: boolean;
  content: string;
}

type GlobalContent = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  snackbarOption: SnackBarOption;
  setSnackbarOption: (snackbarOption: SnackBarOption) => void;
};

const GlobalContext = createContext<GlobalContent>({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => void 0,
  snackbarOption: {
    isOpen: false,
    content: "",
  },
  setSnackbarOption: (snackbarOption: SnackBarOption) => void 0,
});

export default GlobalContext;

export const GlobalContextProvider = ({
  children,
}: Record<"children", JSX.Element>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOption, setSnackbarOption] = useState<SnackBarOption>({
    isOpen: false,
    content: "",
  });
  console.log("snackbarOption", snackbarOption);
  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        snackbarOption,
        setSnackbarOption,
      }}
    >
      {children}
      {/* <Loading isLoading={isLoading} /> */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        open={snackbarOption.isOpen}
        onClose={() => {
          setSnackbarOption((prev) => ({ ...prev, isOpen: false }));
        }}
      >
        <Alert severity="success">{snackbarOption.content}</Alert>
      </Snackbar>
    </GlobalContext.Provider>
  );
};
