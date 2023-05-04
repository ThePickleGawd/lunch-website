const Unsupported = () => {
  return (
    <div className="rounded-lg bg-gray-300 p-4 dark:bg-trueGray-700">
      <div>
        This browser is not supported. Use Chrome on a laptop or android device{" "}
        <a
          className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-600"
          href="https://caniuse.com/web-bluetooth"
        >
          Learn More
        </a>
      </div>
      <div className="mt-2">
        For IOS users, download{" "}
        <a
          className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-600"
          href="https://apps.apple.com/us/app/bluefy-web-ble-browser/id1492822055"
        >
          Bluefy Browser
        </a>{" "}
        on the App Store
      </div>
    </div>
  );
};

export default Unsupported;
