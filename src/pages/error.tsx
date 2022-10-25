import { useRouteError } from "react-router-dom";
import "../App.css";

interface UnknownButAtLeast {
  statusText?: string;
  message?: string;
  status?: number;
}

export function ErrorPage() {
  const error = useRouteError() as UnknownButAtLeast;
  const presentStatus = error.status || 500;
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops! ({presentStatus})</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
