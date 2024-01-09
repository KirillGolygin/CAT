import './ErrorBoundary.style.scss';

const ErrorBoundaryComponent = () => {
  return (
    <div className="error-container">
      <p className="error-text">Something went wrong...</p>
    </div>
  );
};

export default ErrorBoundaryComponent;
