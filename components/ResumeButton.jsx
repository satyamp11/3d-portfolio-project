const ResumeButton = () => {
  return (
    <div className="-mt-28  ml-60">
      <a
        href="/resume.pdf"
        download
        className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-accent border border-accent rounded-full overflow-hidden group"
      >
        <span className="absolute inset-0 bg-accent opacity-5 blur-lg group-hover:opacity-20 transition duration-300"></span>

        <span className="absolute inset-0 w-0 bg-accent transition-all duration-500 group-hover:w-full"></span>

        <span className="relative group-hover:text-white">
          Download Resume
        </span>
      </a>
    </div>
  );
};

export default ResumeButton;