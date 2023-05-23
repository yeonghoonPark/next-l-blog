type Props = {
  success: boolean;
  message: string;
};

export default function SubmitMessage({ success, message }: Props) {
  return (
    <p
      className={`w-full mt-2 text-center rounded-lg py-1 ${
        success ? "bg-sky-300" : "bg-red-300"
      }`}
    >
      {message}
    </p>
  );
}
