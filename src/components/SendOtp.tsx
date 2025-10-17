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


  const onFinish = async (values: { phone: string; prefix: string }) => {
    try {
      setLoading(true);
      const phoneNumber = values.prefix + " " + values.phone;

      // backendga yuborish
      console.log(phoneNumber);
      const res = await api.post("/users/send-otp", {
        phone: phoneNumber,
      } as { phone: string });
      

      if (res.status === 200) {
        message.success("OTP yuborildi!");
        console.log("done!");
        const encode = btoa(phoneNumber)
        // onSuccess(encode)
        navigate(`/verify-otp?e=${encode}`)
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
            name="phone"
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
