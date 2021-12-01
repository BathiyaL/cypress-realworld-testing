type Props = {
  path: string
}

export default function NextLessonBtn({ path }: Props) {
  return (
    <div data-test="next-lesson-button" className="py-20">
      <a
        href={path ? path : "/real-world-examples"}
        className="mx-auto max-w-xl flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
      >
        {path ? "Next Example" : "Real World Examples"}
      </a>
    </div>
  )
}
