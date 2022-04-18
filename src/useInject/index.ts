import { container } from '@linkseeks/core';
import { interfaces } from "inversify";
import { useEffect, useState } from "react";

export function useInject<T>(identifier: interfaces.ServiceIdentifier<T>): [T | undefined] {

  const [service, setService] = useState<T>();

  if (!container) { throw new Error("container null create!") }

  useEffect(() => {
    const target = container?.get<T>(identifier)
    setService(target)
  }, [container])

  return [service];
}