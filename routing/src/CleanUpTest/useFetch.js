import { useState, useEffect } from "react";

const useFetch = (url = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const abortControl = new AbortController();
    const signal = abortControl.signal;
    console.log(abortControl);
    console.log(signal);
    setLoading(true);
    const asyncReq = async () => {
      try {
        const res = await fetch(`${url}`, { method: "GET", signal });
        if (res.ok) {
          const resJson = await res.json();
          setData(resJson);
          setLoading(false);
        } else {
          setError("Request error. Please try again later.");
        }
      } catch (e) {
        console.log(e);
        if (signal.aborted) {
          console.log("aborted"); //error is aborted DOMException
          return;
        }
        setError(e);
      }
    };
    const timerId = setTimeout(() => {
      asyncReq();
    }, 1000);
    return () => {
      abortControl.abort();
      clearTimeout(timerId);
    };
  }, [url]);
  return [data, loading, error];
};

export default useFetch;
