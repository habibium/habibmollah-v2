export default function Warning() {
  return (
    <aside className="fixed top-0 z-[1000] w-full bg-yellow-300 text-black">
      <div className="mx-auto max-w-[80rem] px-1 py-2 text-center sm:px-4">
        <p>
          This website is outdated. I'm working on a fresh rewrite in my free
          time. For the latest data about me, here's my{" "}
          <a
            className="font-bold underline"
            href="https://drive.google.com/file/d/10V3t6I-lfilx0hB72HpVLv5HzCjuVJUo/view?usp=drive_link"
          >
            resume
          </a>{" "}
          and{" "}
          <a
            className="font-bold underline"
            href="https://linkedin.com/in/habibium"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </aside>
  );
}
