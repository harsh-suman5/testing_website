import React from 'react'

const projectsList = [
  {
    id: 1,
    title: 'E-Commerce Website',
    desc: 'React aur Node.js se banaya gaya ek full-stack e-commerce platform with payment gateway.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    desc: 'Modern aur responsive personal portfolio Tailwind CSS aur React se banaya gaya.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    tags: ['React', 'Tailwind CSS'],
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Task Manager App',
    desc: 'Drag & drop task management app with real-time updates aur user authentication.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind'],
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    desc: 'OpenWeather API se live weather data fetch karta hai aur beautiful charts show karta hai.',
    image: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=500&h=300&fit=crop',
    tags: ['JavaScript', 'API', 'Chart.js'],
    live: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Chat Application',
    desc: 'Real-time chat app with Socket.io, private rooms aur message history support.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&h=300&fit=crop',
    tags: ['Node.js', 'Socket.io', 'React'],
    live: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Blog Platform',
    desc: 'Full-featured blogging platform with markdown support, comments aur admin dashboard.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
    live: '#',
    github: '#',
  },
]

const tagColors = [
  'bg-pink-500/10 text-pink-400',
  'bg-blue-500/10 text-blue-400',
  'bg-green-500/10 text-green-400',
  'bg-yellow-500/10 text-yellow-400',
  'bg-purple-500/10 text-purple-400',
]

const Projects = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* ── HERO BANNER ── */}
      <div className="py-20 px-6 text-center bg-gray-950 border-b border-gray-800">
        <span className="border border-pink-500 text-pink-500 text-sm font-medium px-5 py-1.5 rounded-full">
          Our Work
        </span>
        <h1 className="text-5xl font-black mt-5 mb-4">
          Our{' '}
          <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
          Yahan wo projects hain jo humne banaye — real-world problems ke real solutions.
        </p>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col
                         transition-all duration-300 hover:-translate-y-2 hover:border-pink-500
                         hover:shadow-xl hover:shadow-pink-500/20"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[i % tagColors.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold mb-2">{project.title}</h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.live}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-bold
                               py-2.5 rounded-xl text-center hover:opacity-90 transition"
                  >
                    🚀 Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-gray-600 text-white text-sm font-semibold
                               py-2.5 rounded-xl text-center hover:border-pink-500 hover:text-pink-400 transition"
                  >
                    ⭐ GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded-2xl py-12 px-6">
          <h3 className="text-2xl font-black mb-3">Kuch Banana Hai? Seekhein Hamare Saath!</h3>
          <p className="text-gray-400 text-sm mb-7 max-w-sm mx-auto">
            Apna pehla project banane ke liye humari courses join karein — bilkul free.
          </p>
          <a
            href="/register"
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition inline-block"
          >
            Start Building → Free
          </a>
        </div>
      </div>

    </div>
  )
}

export default Projects