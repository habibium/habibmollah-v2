export default function Warning() {
  return (
    <aside className="fixed top-0 z-[1000] w-full bg-yellow-300 text-black">
      <div className="mx-auto max-w-[80rem] px-1 py-2 text-center sm:px-4">
        <p>
          🚨 This website is outdated. Please visit{" "}
          <a
            className="font-bold underline"
            target="_blank"
            href="https://habibium.com"
          >
            habibium.com
          </a>{" "}
          for the latest info.
        </p>
      </div>
    </aside>
  );
}
