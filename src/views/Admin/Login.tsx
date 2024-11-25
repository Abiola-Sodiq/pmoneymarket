import { Form, notification } from "antd";
import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../utils/helper";

const Login = () => {
  const navigate = useNavigate();
  const onLogin = async (values: { email: string; password: string }) => {
    const { email, password } = values;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error("Login error:", error.message);
        notification.open({
          message: "Login failed: " + error.message,
          type: "error",
        });
      } else {
        sessionStorage.setItem(
          import.meta.env.VITE_APP_TOKEN,
          data?.session?.access_token as string
        );
        notification.open({
          message: "Login succesful",
          type: "success",
        });
        navigate(routePath.DASHBOARD);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4 space-y-10 min-h-[100svh] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-500 p-5 w-full mx-auto max-w-[500px] text-center space-y-5">
        <p>Login to your Admin Account</p>
        <Form onFinish={onLogin}>
          <Form.Item
          
            name="email"
            rules={[
              { required: true, message: "Please enter an email address" },
              { type: "email", message: "Enter a valid email address" },
            ]}
          >
            <input
              type="email"
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Email Address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter a password" }]}
          >
            <input
              type="password"
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Password"
            />
          </Form.Item>
          <button
            type="submit"
            className="bg-[#1790c8c7] px-7 py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7]"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
