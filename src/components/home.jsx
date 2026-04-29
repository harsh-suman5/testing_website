import React from 'react'

const courses = [
  {
    id: 1,
    title: 'Web Development',
    desc: 'HTML, CSS, JavaScript se lekar React tak — complete web dev journey.',
    duration: '3 Months',
    level: 'Beginner',
    tag: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=220&fit=crop',
  },
  {
    id: 2,
    title: 'React & Next.js',
    desc: 'Modern frontend development with React hooks, routing aur Next.js.',
    duration: '2 Months',
    level: 'Intermediate',
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=220&fit=crop',
  },
  {
    id: 3,
    title: 'Node.js & Backend',
    desc: 'REST APIs, Express.js, MongoDB aur backend architecture sikhein.',
    duration: '2 Months',
    level: 'Intermediate',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=220&fit=crop',
  },
  {
    id: 4,
    title: 'Machine Learning',
    desc: 'Python, NumPy, Pandas aur ML algorithms ke saath data science sikhein.',
    duration: '4 Months',
    level: 'Advanced',
    tag: 'Hot',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=220&fit=crop',
  },
  {
    id: 5,
    title: 'UI/UX Design',
    desc: 'Figma se lekar CSS tak — beautiful UI design karna sikhein.',
    duration: '1.5 Months',
    level: 'Beginner',
    tag: 'Creative',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=220&fit=crop',
  },
  {
    id: 6,
    title: 'React Native',
    desc: 'Android aur iOS dono ke liye ek hi codebase se app banayein.',
    duration: '2.5 Months',
    level: 'Intermediate',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=220&fit=crop',
  },
]

const levelStyle = {
  Beginner:     'text-green-400 bg-green-400/10',
  Intermediate: 'text-yellow-400 bg-yellow-400/10',
  Advanced:     'text-red-400 bg-red-400/10',
}

const Home = () => {
  const username = localStorage.getItem('username')

  return (
    <div className="bg-black text-white">

      {/* ── HERO SECTION ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16">

        <span className="border border-pink-500 text-pink-500 text-sm font-medium px-5 py-1.5 rounded-full mb-8">
          🎓 Harsh Academy Live
        </span>

        {username && (
          <p className="text-gray-400 text-base mb-3">
            Hey, <strong className="text-pink-400">{username}</strong> 👋
          </p>
        )}

        <h1 className="text-5xl font-black leading-tight mb-5 max-w-2xl">
          Learn. Build.{' '}
          <span className="bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Grow.
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-12">
          Master modern web technologies with hands-on projects and live sessions.
        </p>

        <div className="flex gap-4 flex-wrap justify-center mb-20">
          <a href="/projects" className="bg-linear-to-r from-pink-500 to-red-500 text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition text-base">
            View Projects
          </a>
          <a href="/register" className="border border-gray-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:border-pink-500 hover:text-pink-400 transition text-base">
            Join Free →
          </a>
        </div>

        <div className="flex gap-12 flex-wrap justify-center items-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-extrabold bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">500+</span>
            <span className="text-gray-500 text-xs uppercase tracking-widest">Students</span>
          </div>
          <div className="w-px h-10 bg-gray-800" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-extrabold bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">20+</span>
            <span className="text-gray-500 text-xs uppercase tracking-widest">Courses</span>
          </div>
          <div className="w-px h-10 bg-gray-800" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-extrabold bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">100%</span>
            <span className="text-gray-500 text-xs uppercase tracking-widest">Free Content</span>
          </div>
        </div>

      </section>

      {/* ── COURSES SECTION ── */}
      <section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-14">
      <span className="border border-pink-500 text-pink-500 text-sm font-medium px-5 py-1.5 rounded-full">
        Our Programs
      </span>

      <h2 className="text-4xl font-black mt-5 mb-3">
        Courses &{" "}
        <span className="bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Programs
        </span>
      </h2>

      <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
        Apni pace se sikhein — beginner se advanced tak, sab kuch free mein.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col
                     transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20"
        >

          {/* Course Image */}
          <div className="relative overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Tag */}
            <span className="absolute top-3 right-3 bg-black/70 border border-pink-500 text-pink-400 text-xs font-semibold px-3 py-1 rounded-full">
              {course.tag}
            </span>
          </div>

          {/* Card Body */}
          <div className="p-6 flex flex-col flex-1">

            <h3 className="text-lg font-bold mb-2">
              {course.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
              {course.desc}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-gray-500 text-xs">
                ⏱ {course.duration}
              </span>

              <span className={`text-xs font-semibold px-2.5 py-1 rounded ${levelStyle[course.level]}`}>
                {course.level}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 border border-gray-600 text-white text-sm font-semibold py-2.5 rounded-xl
                                 hover:border-pink-500 hover:text-pink-400 transition">
                <a href="/courses/webdevelopment" className="block w-full text-center">
                  View Details
                </a>
              </button>

              <button className="flex-1 bg-linear-to-r from-pink-500 to-red-500 text-white text-sm font-bold py-2.5 rounded-xl
                                 hover:opacity-90 transition">
                Enroll Now
              </button>
            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* ── NEWS & UPDATES SECTION ── */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <span className="border border-pink-500 text-pink-500 text-sm font-medium px-5 py-1.5 rounded-full">
              Stay Updated
            </span>
            <h2 className="text-4xl font-black mt-5 mb-3">
              News &{' '}
              <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                Updates
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
              Latest news, course launches, aur academy ke updates yahan milenge.
            </p>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=220&fit=crop" alt="News 1" className="w-full h-44 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-pink-500/10 text-pink-400 text-xs font-semibold px-3 py-1 rounded-full">New Launch</span>
                  <span className="text-gray-500 text-xs">April 28, 2025</span>
                </div>
                <h3 className="text-base font-bold mb-2">React & Next.js Course Launch Ho Gayi!</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  Humari nayi React aur Next.js course ab available hai. Enroll karein aur modern frontend sikhein.
                </p>
                <button className="w-full border border-gray-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:border-pink-500 hover:text-pink-400 transition">
                  Read More →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=220&fit=crop" alt="News 2" className="w-full h-44 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-500/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">Live Session</span>
                  <span className="text-gray-500 text-xs">April 25, 2025</span>
                </div>
                <h3 className="text-base font-bold mb-2">Free Live Session: JavaScript Deep Dive</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  Is weekend ek free live session ho raha hai JavaScript ke advanced concepts pe. Join karein!
                </p>
                <button className="w-full border border-gray-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:border-pink-500 hover:text-pink-400 transition">
                  Read More →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=220&fit=crop" alt="News 3" className="w-full h-44 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">Announcement</span>
                  <span className="text-gray-500 text-xs">April 20, 2025</span>
                </div>
                <h3 className="text-base font-bold mb-2">500 Students Ka Milestone Complete!</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  Harsh Academy Live ne 500 students ka milestone achieve kar liya. Shukriya sabka is journey mein saath dene ke liye!
                </p>
                <button className="w-full border border-gray-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:border-pink-500 hover:text-pink-400 transition">
                  Read More →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST & SOCIAL PROOF SECTION ── */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <span className="border border-pink-500 text-pink-500 text-sm font-medium px-5 py-1.5 rounded-full">
              Trusted By Students
            </span>
            <h2 className="text-4xl font-black mt-5 mb-3">
              What Our{' '}
              <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
              Hazaron students ne apni life change ki Harsh Academy Live ke saath.
            </p>
          </div>

          {/* Overall Rating Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-16 bg-gray-900 border border-gray-800 rounded-2xl py-10 px-8">
            <div className="text-center">
              <p className="text-6xl font-black bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">4.9</p>
              <div className="flex justify-center gap-1 my-2 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-gray-400 text-sm">Overall Rating</p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-gray-700" />
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-extrabold text-white">500+</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Students</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">20+</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">98%</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Review 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="flex text-yellow-400 text-lg gap-0.5">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "Harsh Academy Live ne meri zindagi badal di. React course itna clear tha ki mujhe job mil gayi sirf 2 mahine mein!"
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                  RK
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Rahul Kumar</p>
                  <p className="text-gray-500 text-xs">Web Developer, Delhi</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="flex text-yellow-400 text-lg gap-0.5">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "Bilkul beginner thi main. Node.js course ke baad mujhe ek startup mein backend developer ki internship mili. Thank you!"
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                  PS
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Priya Sharma</p>
                  <p className="text-gray-500 text-xs">Backend Intern, Bangalore</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="flex text-yellow-400 text-lg gap-0.5">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "Best free resource available online. ML course bahut detailed hai aur live sessions se doubts bhi clear ho jaate hain."
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  AV
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Arjun Verma</p>
                  <p className="text-gray-500 text-xs">Data Science Student, Mumbai</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Strip */}
          <div className="mt-16 text-center bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded-2xl py-12 px-6">
            <h3 className="text-2xl font-black mb-3">Aap Bhi Join Karein — Bilkul Free!</h3>
            <p className="text-gray-400 text-base mb-7 max-w-sm mx-auto">
              500+ students ki community ka hissa banein aur apna career build karein.
            </p>
            <a
              href="/register"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition inline-block"
            >
              Register Now — It's Free 🚀
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home