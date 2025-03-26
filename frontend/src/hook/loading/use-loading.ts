import { useState } from "react";

function useLoading(initialValue: boolean = false) {
  const [loading, setLoading] = useState(initialValue);

  return [loading, setLoading] as const;
}


export default useLoading;