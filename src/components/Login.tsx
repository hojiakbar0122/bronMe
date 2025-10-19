import { Button, Form, Input, type FormProps } from "antd";
import { api } from "../shared/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../shared/store";
import { clearSignInData } from "../shared/lib/featers/signIn.Slice";
import { setToken } from "../shared/lib/featers/auth.Slice";

type FieldType = {
  phone_number?: string;
  password?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const initialValue = useSelector((state: RootState) => state.signin);
  const dispatch = useDispatch();

  const signIn = useMutation({
    mutationFn: (data: FieldType) => api.post("users/login/", data),
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signIn.mutate(values, {
      onSuccess: (res) => {
        console.log(res.data.access);
        
        const token = res?.data?.access;

        // if (token) {
        //   // 🔹 Access tokenni localStorage ga yozish
        //   localStorage.setItem("access_token", token);
        // }
        dispatch(clearSignInData());
        dispatch(setToken(token));
        navigate("/profile");
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Form
        name="login"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{
          width: 350,
          padding: 30,
          background: "white",
          borderRadius: 20,
          boxShadow: "0 5px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
        initialValues={initialValue}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 className="text-2xl font-semibold mb-6">Tizimga kirish</h2>

        <Form.Item<FieldType>
          label={<span className="font-medium text-gray-700">Telefon raqam</span>}
          name="phone_number"
          rules={[{ required: true, message: "Iltimos, telefon raqamingizni kiriting!" }]}
        >
          <Input placeholder="+998901234567" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="font-medium text-gray-700">Parol</span>}
          name="password"
          rules={[{ required: true, message: "Iltimos, parolingizni kiriting!" }]}
        >
          <Input.Password placeholder="••••••••" />
        </Form.Item>

        <Form.Item style={{ marginTop: 20 }}>
          <Button type="primary" htmlType="submit" className="w-full">
            Kirish
          </Button>
        </Form.Item>

        <div className="mt-3">
          <span className="text-gray-600">Hisobingiz yo‘qmi? </span>
          <Link to="/auth" className="text-blue-600 hover:underline">
            Ro‘yxatdan o‘tish
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
