import React from "react";
import "./App.css";

import { Router } from "./routes/router";
import { TasksProvider } from "./providers/task-provider";
import Layout from "../shared/layout/layout";
import { ConfigProvider } from "./providers/config-provider";

function App() {
  return (
    <>
      <div id="modal-root"></div>

      <div className="App">
        <ConfigProvider>
          <TasksProvider>
            <Layout>
              <Router />
            </Layout>
          </TasksProvider>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
