import { createSignal, onCleanup } from "solid-js";

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = createSignal<TimeLeft>(calculateTimeLeft());

  const updateCountdown = () => setTimeLeft(calculateTimeLeft());

  const interval = setInterval(updateCountdown, 1000);

  onCleanup(() => clearInterval(interval));

  return (
    <div class="text-center mt-8 text-2xl">
      {timeLeft().days !== undefined ? (
        <div class="flex justify-center gap-4">
          <div class="bg-gray-200 p-4 rounded-lg">{timeLeft().days}d</div>
          <div class="bg-gray-200 p-4 rounded-lg">{timeLeft().hours}h</div>
          <div class="bg-gray-200 p-4 rounded-lg">{timeLeft().minutes}m</div>
          <div class="bg-gray-200 p-4 rounded-lg">{timeLeft().seconds}s</div>
        </div>
      ) : (
        <div class="bg-red-200 p-4 rounded-lg">Time's up!</div>
      )}
    </div>
  );
};

export default Countdown;
