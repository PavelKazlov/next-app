"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error =>", error);
  return (
    <>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
      <div>An unexpected error has accurred.</div>
    </>
  );
};

export default ErrorPage;
