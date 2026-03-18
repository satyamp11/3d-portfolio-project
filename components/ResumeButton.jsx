const ResumeButton = () => {
  return (
    <div className="mt-10 flex justify-center sm:justify-start">
      <a
        href="/resume.pdf"
        download
        className="
        relative inline-flex items-center justify-center
        px-6 py-3 sm:px-8 sm:py-3
        text-sm sm:text-lg font-semibold
        text-accent border border-accent rounded-full
        overflow-hidden group
        w-full max-w-[220px] sm:w-auto
        "
      >
        {/* glow */}
        <span className="absolute inset-0 bg-accent opacity-5 blur-lg group-hover:opacity-20 transition duration-300"></span>

        {/* fill animation */}
        <span className="absolute inset-0 w-0 bg-accent transition-all duration-500 group-hover:w-full"></span>

        {/* text */}
        <span className="relative group-hover:text-white text-center w-full">
          Download Resume
        </span>
      </a>
    </div>
  );
};

export default ResumeButton;