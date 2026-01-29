import { useState, useEffect } from "react";

function App() {
  // UseState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("Hover over the box");

  // New States for Browser Info
  const [device, setDevice] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [windowSize, setWindowSize] = useState("");
  const [onlineStatus, setOnlineStatus] = useState("");

  function update() {
    setCount(count + 1);
  }

  // 🔹 Runs ONCE when page loads
  useEffect(() => {
    alert("Page loaded.. ");

    // Device detection
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    setDevice(isMobile ? "Mobile " : "Desktop ");

    // Screen size (physical screen)
    setScreenSize(`${screen.width} x ${screen.height}`);

    // Window size (browser tab)
    setWindowSize(`${window.innerWidth} x ${window.innerHeight}`);

    // Online status
    setOnlineStatus(navigator.onLine ? "Online " : "Offline ");

    // Listen for resize
    function handleResize() {
      setWindowSize(`${window.innerWidth} x ${window.innerHeight}`);
    }

    // Listen for online/offline changes
    function handleStatusChange() {
      setOnlineStatus(navigator.onLine ? "Online " : "Offline ");
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);

  return (
    <>
      <div className="flex items-center flex-col justify-center p-7 gap-2">
        
        {/* Counter */}
        <h1 className="underline">{count}</h1>
        <button onClick={update} className="bg-blue-500 text-white p-2 rounded">
          Click Me
        </button>

        <br /><br />

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-500 p-2 rounded"
        />

        <p className="underline">Your name is: {name}</p>

        <br />

        {/* Toggle Visibility */}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-black text-white p-2 rounded"
        >
          Toggle CODOLOG
        </button>

        {isVisible && (
          <h1 className="text-[32px] font-bold font-mono slashed-zero text-inherit">
            CODOLOG
          </h1>
        )}

        {/* Hover Event */}
        <h1>{text}</h1>
        <div
          onMouseEnter={() => setText("You are hovering! ")}
          onMouseLeave={() => setText("Hover over the box")}
          className="flex items-center justify-center w-40 h-40 bg-gray-300 mt-5 text-center text-lg font-semibold rounded-lg cursor-pointer"
        >
          Hover me
        </div>

        <br />

        {/* Browser Info Display */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-5 w-full max-w-sm text-center">
          <h2 className="font-bold underline mb-2">Browser Info</h2>
          <p>Device: {device}</p>
          <p>Screen Size: {screenSize}</p>
          <p>Window Size: {windowSize}</p>
          <p>Status: {onlineStatus}</p>
        </div>

      </div>
    </>
  );
}

export default App;
