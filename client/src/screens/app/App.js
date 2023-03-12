import { BrowserRouter, Route, Routes } from "react-router-dom";
import Groups from "../group/Groups";
import Header from "../header/Header";
import Landing from "../landing/Landing";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "semantic-ui-css/semantic.min.css";

const queryClient = new QueryClient();

const ElementsWithHeader = () => (
  <>
    <Header />
    <div className="md:px-20 sm:px-0 py-10">
      <Routes>
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </div>
  </>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ElementsWithHeader />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
