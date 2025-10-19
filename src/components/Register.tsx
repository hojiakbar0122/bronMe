import { Button, Form, Input, type FormProps } from "antd";
import { api } from "../shared/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type FieldType = {
  name: string;
  surname: string;
  phone_number: string;
  password: string;
  confirm_password: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();

        // navigate("/");
  const register = useMutation({
    mutationFn: (data: FieldType) => api.post("users/register/", data),
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    register.mutate(values, {
      onSuccess: () => {
        console.log("Register success:", values);
        navigate("/");
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Form
        name="register"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{
          width: 350,
          background: "white",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
        onFinish={onFinish}
        autoComplete="off"
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Ro‘yxatdan o‘tish</h2>

        <Form.Item<FieldType>
          label="Ism"
          name="name"
          rules={[{ required: true, message: "Ismingizni kiriting!" }]}
        >
          <Input placeholder="Ali" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Familiya"
          name="surname"
          rules={[{ required: true, message: "Familiyangizni kiriting!" }]}
        >
          <Input placeholder="Valiyev" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Telefon raqam"
          name="phone_number"
          rules={[{ required: true, message: "Telefon raqamingizni kiriting!" }]}
        >
          <Input placeholder="+998901234567" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Parol"
          name="password"
          rules={[{ required: true, message: "Parol kiriting!" }]}
        >
          <Input.Password placeholder="********" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Parolni tasdiqlang"
          name="confirm_password"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Parolni tasdiqlang!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Parollar bir xil bo‘lishi kerak!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="********" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600"
            loading={register.isPending}
          >
            Ro‘yxatdan o‘tish
          </Button>
        </Form.Item>

        <div className="text-center mt-2">
          <span className="text-gray-600">Hisobingiz bormi? </span>
          <a
            onClick={() => navigate("/auth?type=login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Tizimga kirish
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Register;
