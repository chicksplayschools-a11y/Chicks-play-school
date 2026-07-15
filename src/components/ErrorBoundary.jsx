import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-lg w-full text-center border-4 border-white">
            <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h1 className="text-3xl font-bold font-heading text-text mb-4">Oops! Something went wrong.</h1>
            <p className="text-gray-600 mb-8">
              We're sorry, but it looks like there was a temporary issue loading this page. Please try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-accent text-text font-bold font-body px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-soft"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
