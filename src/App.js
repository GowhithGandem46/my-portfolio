import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white px-6 md:px-20 overflow-x-hidden border-t border-gray-700">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end pt-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xs bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mt-12">
        <img src={process.env.PUBLIC_URL + "/Profile.jpg"} alt="Profile" className="w-60 h-60 object-cover mb-6 md:mb-0" />
          <div>
            <h1 className="text-4xl font-bold text-400">Gowhith Gandem</h1>
            <p className="text-red-500 text-lg mt-2">
              <Typewriter
                words={["Software Engineer"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <div className="flex flex-wrap mt-4 space-x-4">
              <a href="mailto:gowhith.gandem@stonybrook.edu" className="text-blue-400 underline">Email</a>
              <a href="https://github.com/GowhithGandem46" target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub</a>
              <a href="https://linkedin.com/in/gowhith" target="_blank" rel="noreferrer" className="text-blue-400 underline">LinkedIn</a>
            </div>
            <p className="mt-4 text-sm max-w-xl">
              I'm a Master's student in Data Science at Stony Brook University with a background in Computer Science and a passion for AI, ML, and backend engineering. I love working on scalable systems, exploring model architectures, and solving meaningful problems with code.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-8">
            <motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="font-bold text-lg">Volunteer Research Assistant – Stony Brook University</h3>
              <p className="italic text-sm">Oct 2024 – Dec 2024 · Stony Brook, NY</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Conducted in-depth research on MHC-Fine: Enhanced MHC-Peptide Complex Prediction using AlphaFold.</li>
                <li>Focused on boosting structure prediction accuracy with Graph Neural Networks and Molecular Dynamics.</li>
                <li>Implemented dynamic hyperparameter tuning for efficient and stable training across A100 GPUs in SeaWulf Cluster.</li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="font-bold text-lg">Software Engineer Intern – MegaViz Technologies</h3>
              <p className="italic text-sm">Dec 2023 – May 2024, India</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Scaled authentication systems to 4,500 logins/sec by optimizing PostgreSQL pools and using Bouncy Castle.</li>
                <li>Reduced API latency from 200ms to 95ms using Redis caching, rate limiting, and AWS Auto Scaling.</li>
                <li>Enhanced UX to 4.8/5 by building React dashboards with real-time overlays and performance optimizations.</li>
              </ul>
            </motion.div>
          </div>
        </section>
{/* Research */}
<section className="mt-16">
  <h2 className="text-2xl font-semibold mb-6">Research</h2>
  <motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col md:flex-row items-start gap-6">
    <img src={process.env.PUBLIC_URL + "/c.png"} alt="Paper Preview" className="w-32 h-auto rounded shadow-md" />
    <div>
      <a href={process.env.PUBLIC_URL + "/Text2Cash.pdf"} target="_blank" rel="noopener noreferrer">
        <h3 className="text-lg font-bold mb-1 text-blue-600 dark:text-blue-400 hover:underline">
          Text2Cash – M3 Sentiment Analysis
        </h3>
      </a>
      <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
        <strong>Text2Cash</strong> introduces a novel multi-modal forecasting model that combines sentiment embeddings from transformer-based news analysis with technical indicators from time-series data. The model integrates these signals through a gating mechanism and logistic regression head to forecast market returns. Extensive 5-year backtesting demonstrates a 195.82% cumulative return, outperforming traditional benchmarks like SPY and equal-weight portfolios.
      </p>
    </div>
  </motion.div>
</section>

        {/* Projects */}
        <section className="mt-16">
  <h2 className="text-2xl font-semibold mb-6">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
  <motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
  <h3 className="font-bold text-lg">GPT2-124M Implementation</h3>
  <p className="italic">Python, PyTorch, Multi-GPU Training, Training Optimization, Performance Engineering</p>
  <ul className="list-disc list-inside mt-2 space-y-1">
    <li>Solved on SBU-cluster for multi-GPU training (A100 GPUs).</li>
    <li>Coded GPT-2 Base-line(124M) using PyTorch, incorporating innovative tokenization strategies to efficiently process nearly 2 million words from the OpenWebText dataset.</li>
  </ul>
</motion.div>

<motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
  <h3 className="font-bold text-lg">Autonomous Vehicle Implementation</h3>
  <p className="italic">Python, CARLA, PyTorch, RL</p>
  <ul className="list-disc list-inside mt-2 space-y-1">
    <li>Integrated Deep-RL into the CARLA simulator by implementing advanced collision avoidance, reducing navigation errors by 25% as measured by path deviation logs.</li>
  </ul>
</motion.div>

<motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
  <h3 className="font-bold text-lg">Practical Byzantine Fault Tolerance (PBFT) System</h3>
  <p className="italic">Go, PBFT Protocol, Goroutines, GRPC</p>
  <ul className="list-disc list-inside mt-2 space-y-1">
    <li>Implemented MIT-researched PBFT protocol with 100% consensus accuracy in adversarial environments.</li>
    <li>Achieved state replication across 7 nodes with sub-80 ms latency, supporting 500 concurrent transactions.</li>
  </ul>
</motion.div>

<motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
  <h3 className="font-bold text-lg">KeyValue Store with RAFT Algorithm</h3>
  <p className="italic">Go, TCP/IP, Net/RPC, Multi-threading</p>
  <ul className="list-disc list-inside mt-2 space-y-1">
    <li>Developed a sharded key-value store using the RAFT consensus algorithm, with Pre-voting, Log Compaction, Log Persistence and Distributed Transactions.</li>
  </ul>
</motion.div>

<motion.div whileHover={{ scale: 1.02 }} className="border p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
  <h3 className="font-bold text-lg">Summarization Tool</h3>
  <p className="italic">Python, Transformers, PyTorch, PyWebio</p>
  <ul className="list-disc list-inside mt-2 space-y-1">
    <li>Modified Google’s T5 Transformer to develop a text summarization tool, improved summary accuracy by 25% from 65% to 90%.</li>
    <li>Programmed a user-friendly interface with PyWebio, facilitating seamless interaction with the summarization tool.</li>
  </ul>
</motion.div>

  </div>
</section>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="space-y-3 text-sm">
            <p><strong>Languages:</strong> Python, Go, C/C++, Java</p>
            <p><strong>Technologies/Tools:</strong> React.JS, Node.JS, Next.JS, Angular JS, Jenkins, Docker, PyTorch</p>
            <p><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</p>
          </div>
        </section>

        {/* Resume */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <a
            href="/Resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Download Resume
          </a>
        </section>

        {/* Contact */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form action="https://formspree.io/f/xrbqwnzw" method="POST" className="space-y-4 max-w-md">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" />
            <textarea name="message" placeholder="Your Message" required rows="4" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
          </form>
        </section>

        
        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 mb-4 border-t border-gray-700 pt-4">
          &copy; 2025 Gowhith Gandem. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
