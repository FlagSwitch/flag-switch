import { useEffect, useState } from "react";
import { initI18N } from "./client";

export const useI18nSetup = (): boolean => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    initI18N().then(() => {
      setReady(true);
    });
  }, []);

  return ready;
};
