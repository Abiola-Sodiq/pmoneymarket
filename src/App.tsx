import { RouterProvider } from "react-router-dom";
import { router } from "./Route/router";
import { ConfigProvider } from "antd";
import { getThemeConfig } from "./utils/theme.config";

const App = () => {
  return (
    <div className="mx-auto bg-customCrystalWhite">
      <ConfigProvider theme={getThemeConfig()}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
};

export default App;
