import { FormProps } from "antd";

export const routePath = {
  HOME: "/",
  ABOUT_US: "/about-us",
  FAQS: "/faqs",
  CONTACT_US:"/contact-us"
};

export const formConfig: FormProps = {
  autoComplete: "off",
  layout: "vertical",
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  requiredMark: "optional",
};