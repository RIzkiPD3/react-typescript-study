import React, { useEffect } from "react";

export default function withLogger<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function LoggerComponent(props: P) {
    useEffect(() => {
      console.log(`📢 ${WrappedComponent.name} mounted`);

      return () => {
        console.log(`📢 ${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}
