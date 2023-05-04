const Unsupported = () => {
  return (
    <div>
      Sorry, this browser does not support bluetooth. Use <b>Chrome</b> or{" "}
      <b>Edge</b> on a laptop or an android device instead
      <br />
      <a
        className="text-blue-400 underline"
        href="https://caniuse.com/web-bluetooth"
      >
        Learn More
      </a>
      <br />
    </div>
  );
};

export default Unsupported;
