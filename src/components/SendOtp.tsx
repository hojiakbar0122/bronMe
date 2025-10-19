import React from "react";
import { Form, Input, Button, Select, Card, message } from "antd";
import { api } from "../shared/api";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const countryCodes = [
  { code: "+998", name: "Uzbekistan" },
  { code: "+7", name: "Russia" },
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
];


const SendOtpPage: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate()


  const onFinish = async (values: { phone_number: string; prefix: string }) => {
    try {
      setLoading(true);
      console.log("val", values);
      
      const phoneNumber = values.prefix + values.phone_number;

      // backendga yuborish
      console.log("num", phoneNumber);
      // navigate("/auth?type=register");
      // navigate("/register")
      const res = await api.post("/users/send-otp/", {
        phone_number: phoneNumber,
      } as { phone_number: string });
      

      if (res.status === 200) {
        message.success("OTP yuborildi!");
        console.log("done!");
        console.log("done!", );
        const encode = btoa(phoneNumber)
        // onSuccess(encode)
      navigate(`/auth?type=otp&e=${encode}`);
        // navigate(`/otp?e=${encode}`)
        // navigate("/verify-otp")
      }
      
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      message.error(err?.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card title="Telefon raqamni tasdiqlash" className="w-[400px]">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="phone_number"
            label="Telefon raqam"
            rules={[{ required: true, message: "Telefon raqamni kiriting!" }]}
          >
            <Input
              addonBefore={
                <Form.Item name="prefix" noStyle initialValue="+998">
                  <Select style={{ width: 90 }}>
                    {countryCodes.map((c) => (
                      <Option key={c.code} value={c.code}>
                        {c.code}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              }
              placeholder="90 123 45 67"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              OTP yuborish
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SendOtpPage;
