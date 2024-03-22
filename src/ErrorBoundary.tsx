import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  placeholder?: JSX.Element;
}

interface ErrorBoundaryState {
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    error: undefined,
  };

  public static getDerivedStateFromError(error: Error) {
    return { error };
  }

  public componentDidCatch(error: Error) {
    
    console.error(error);
  }

  public render() {
    if (this.state.error !== undefined) {
      return (
        <div style={{ color: 'red', padding: '1rem' }}>
          {`${this.state.error}`}
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;