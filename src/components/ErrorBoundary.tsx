import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("App error boundary caught", error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center px-4"
          style={{
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
          }}
        >
          <div
            className="max-w-lg w-full rounded-2xl p-8 shadow-xl"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <h1 className="text-2xl font-bold mb-3">Something went wrong.</h1>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              An unexpected error occurred while loading this page. Please try
              refreshing. If the problem persists, feel free to reach out.
            </p>
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-medium py-2.5 px-5 rounded-lg transition"
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
