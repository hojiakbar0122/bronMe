import { Button, Form, Input, type FormProps} from "antd";
import { api } from "../shared/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setSignInData } from "../shared/lib/featers/signIn.Slice";

type FieldType = {
  name:string
  email: string;
  password: string;
};


const Register = () => {

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const register = useMutation({
        mutationFn:(data: FieldType)=>api.post("auth/register", data)
  })

  const onFinish: FormProps<FieldType>["onFinish"] = (data: FieldType)=>{
      register.mutate(data, {
           onSuccess: () => {
      console.log("Register success:", data);
      // localStorage.setItem("token", data.access_token);
      navigate(`/`)
      
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
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="shadow-2xl border-hidden rounded-2xl"
      >

        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

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

export default Register;
