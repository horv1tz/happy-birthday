import { Component } from "solid-js";
import Countdown from "./components/Countdown";

const App: Component = () => {
  const targetDate = "2025-07-13T00:00:00"; // Установите нужную вам дату и время

  return (
    <main>
      <p class="text-4xl text-center py-20">День рождение через...</p>
      <div class="clock">
        <Countdown targetDate={targetDate} />
      </div>
    </main>
  );
};

export default App;
