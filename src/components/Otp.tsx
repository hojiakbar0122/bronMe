import { useMutation } from "@tanstack/react-query";
import { Input } from "antd"
import type { GetProps } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../shared/api";

type OTPProps = GetProps<typeof Input.OTP>;


const Otp: React.FC = () => {

    const [params] = useSearchParams()
    const encode = params.get("e")
    const phone = atob(encode || "")
    const navigate = useNavigate()

    const sendOtp = useMutation({
        mutationFn:(data:any)=>api.post("auth/verify-email", data)
    })

    const onChange: OTPProps['onChange'] = (code) => {
    sendOtp.mutate({code, phone}, {
        onSuccess:()=>{
            navigate("/register")
        }
    });
  };

  return (
    <div>
        <h1>Otp</h1>
        <Input.OTP formatter={(str) => str.toUpperCase()} onChange={onChange} />
    </div>
  )
}

export default Otp