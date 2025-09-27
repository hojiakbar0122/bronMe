import { Button, Form, Input, type FormProps} from "antd";
import { api } from "../shared/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../shared/store";
import { clearSignInData } from "../shared/lib/featers/signIn.Slice";
import { setToken } from "../shared/lib/featers/auth.Slice";

type FieldType = {
  email?: string;
  password?: string;
};

interface Login {
  onLogin: () => void;
}

const Login:React.FC<Login> = () => {

  const navigate = useNavigate()
  const initialValue = useSelector((state:RootState)=>state.signInSlice)
  const dispatch = useDispatch()

    const signIn = useMutation({
        mutationFn:(data:any)=>api.post("auth/login", data)
    })

   const onFinish: FormProps<FieldType>["onFinish"] = (values)=>{
    signIn.mutate(values, {
        onSuccess:(res)=>{
            dispatch(clearSignInData())
            dispatch(setToken(res?.data.access_token))
            navigate("/profile")
        }
    })
   }

  return (
    <div className=" flex justify-center my-50 h-60">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{padding:30, alignItems:"center", justifyContent:"center" }}
        initialValues={initialValue}
        onFinish={onFinish}
        autoComplete="off"
        className="shadow-2xl border-hidden rounded-2xl"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
