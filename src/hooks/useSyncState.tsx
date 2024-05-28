import { useEffect, useState, useRef } from "react";

const useSyncState = <T,>(
  channelName: string,
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialState);
  const channel = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    // create a channel
    channel.current = new BroadcastChannel(channelName);

    // listen for any messages
    channel.current.onmessage = (event) => {
      setState(event.data);
    };

    // cleanup
    return () => {
      if (channel.current) {
        channel.current.close();
      }
    };
  }, [channelName]);

  const broadcastState: React.Dispatch<React.SetStateAction<T>> = (
    newState: T | ((prevState: T) => T)
  ) => {
    setState((prevState) => {
      let updatedState = newState;
      if (typeof newState === "function") {
        updatedState = (newState as (prevState: T) => T)(prevState);
      }

      if (channel.current) {
        channel.current.postMessage(updatedState);
      }

      return updatedState as T;
    });
  };

  return [state, broadcastState];
};

export default useSyncState;
