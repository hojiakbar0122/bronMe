import { useMutation } from "@tanstack/react-query";
import { Input, Button, message } from "antd";
import type { GetProps } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../shared/api";
import { useState } from "react";

type OTPProps = GetProps<typeof Input.OTP>;

const Otp: React.FC = () => {
  const [params] = useSearchParams();
  const encode = params.get("e");
  const phone_number = atob(encode || "");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // ✅ OTP tekshirish
  const sendOtp = useMutation({
    mutationFn: (data: { otp: string; phone_number: string }) =>
      api.post("users/verify-otp/", data),    
  });

  // ✅ Qayta yuborish uchun
  const resendOtp = useMutation({
    mutationFn: (data: { phone_number: string }) => api.post("users/send-otp/", data),
  });

  const onChange: OTPProps["onChange"] = (otp) => {
    if (otp.length === 6) {
      setLoading(true);
      sendOtp.mutate(
        { otp, phone_number },
        {
          onSuccess: () => {
            message.success("✅ Tasdiq muvaffaqiyatli!");
            const encodePhone = btoa(phone_number);
            navigate(`/auth?type=register&e=${encodePhone}`);
          },
          onError: () => {
            message.error("❌ Kod noto‘g‘ri yoki muddati o‘tgan!");
          },
          onSettled: () => setLoading(false),
        }
      );
    }
  };

  // ✅ Qayta yuborish tugmasi
  const handleResend = () => {
    setResendLoading(true);
    // console.log(phone);
    
    resendOtp.mutate(
      { phone_number },
      {
        onSuccess: () => {
          message.success("📩 Kod qayta yuborildi!");
        },
        onError: () => {
          message.error("Kodni yuborishda xatolik!");
        },
        onSettled: () => setResendLoading(false),
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
          Tasdiqlash kodi
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Telefon raqamingizga yuborilgan 6 xonali kodni kiriting
        </p>

        <div className="flex justify-center mb-6">
          <Input.OTP
            length={6}
            size="large"
            formatter={(str) => str.toUpperCase()}
            onChange={onChange}
          />
        </div>

        <Button
          type="primary"
          block
          size="large"
          loading={loading}
          onClick={() => message.info("Kod avtomatik tekshiriladi")}
        >
          Tasdiqlash
        </Button>

        <p className="text-sm text-center text-gray-400 mt-6">
          Kod kelmadimi?{" "}
          <button
            className="text-blue-500 hover:underline disabled:text-gray-400"
            onClick={handleResend}
            disabled={resendLoading}
          >
            {resendLoading ? "Yuborilmoqda..." : "Qayta yuborish"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Otp;
