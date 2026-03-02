import { useEffect, useRef, useState, memo } from 'react'

const CONTENT = `<span class="text-green-terminal">bharanidharan@dev</span>:<span class="text-cyan-terminal">~</span>$ cat aboutme.txt

<span class="text-pink-terminal">Hey there!</span>

I am <span class="text-green-terminal">Bharanidharan S</span>, a <span class="text-cyan-terminal">Java Full Stack Developer</span> from Coimbatore, Tamil Nadu, India.

I specialize in building scalable backend systems using <span class="text-green-terminal">Spring Boot</span> and modern interactive frontends with <span class="text-green-terminal">React.js</span>.

My passion lies in problem-solving — I have conquered <span class="text-green-terminal">700+ DSA problems</span> across LeetCode and GeeksforGeeks.

I am well-versed in <span class="text-cyan-terminal">Object-Oriented Programming</span>, <span class="text-cyan-terminal">RESTful API development</span>, and <span class="text-cyan-terminal">scalable web architecture</span>.

Experienced in secure payment gateway integration using <span class="text-green-terminal">Razorpay</span>.


<span class="text-green-terminal">bharanidharan@dev</span>:<span class="text-cyan-terminal">~</span>$ ls skills/

<span class="text-pink-terminal">Languages:</span>      Java &middot; C &middot; JavaScript &middot; SQL
<span class="text-pink-terminal">Backend:</span>        Spring Boot &middot; REST APIs &middot; Spring Data JPA &middot; Hibernate &middot; MVC
<span class="text-pink-terminal">Frontend:</span>       React.js &middot; HTML5 &middot; CSS3 &middot; Tailwind CSS &middot; Next.js
<span class="text-pink-terminal">Databases:</span>      MySQL &middot; MongoDB
<span class="text-pink-terminal">Cloud & Tools:</span>  AWS (EC2, S3) &middot; Git &middot; GitHub &middot; Postman &middot; Power BI
<span class="text-pink-terminal">Core CS:</span>        DSA (700+) &middot; OOP &middot; Low-Level Design &middot; System Design


<span class="text-green-terminal">bharanidharan@dev</span>:<span class="text-cyan-terminal">~</span>$ ./list_projects.sh

<span class="text-pink-terminal">[ Project 1 ]</span> Leo Club Event Registration & Payment System
<span class="text-gray-terminal">Tech:</span> Java, Spring Boot, MySQL, Razorpay, Tailwind CSS
<span class="text-gray-terminal">Duration:</span> Dec 2024 – Jan 2025
<span class="text-gray-terminal">Features:</span> Secure Razorpay integration &middot; RESTful API architecture &middot; MVC &middot; Real-time payment verification
<span class="text-cyan-terminal">Live:</span> <a href="https://leoclub.vercel.app" target="_blank" rel="noopener noreferrer" class="hover:underline">https://leoclub.vercel.app</a>

<span class="text-pink-terminal">[ Project 2 ]</span> QR Code Generator Web Application
<span class="text-gray-terminal">Tech:</span> React.js, JavaScript, Tailwind CSS, REST API
<span class="text-gray-terminal">Features:</span> Dynamic QR generation &middot; API integration &middot; React Hooks state management
<span class="text-cyan-terminal">Live:</span> <a href="https://brnqr.netlify.app" target="_blank" rel="noopener noreferrer" class="hover:underline">https://brnqr.netlify.app</a>

<span class="text-pink-terminal">[ Project 3 ]</span> Slot Machine Game – Java Console App
<span class="text-gray-terminal">Tech:</span> Core Java, OOP
<span class="text-gray-terminal">Features:</span> Randomized logic engine &middot; Betting mechanics &middot; Balance management system


<span class="text-green-terminal">bharanidharan@dev</span>:<span class="text-cyan-terminal">~</span>$ grep -r "achievements" milestones/

<span class="text-green-terminal">[SUCCESS]</span> 1st Place — Spider National Level Web Development Event 2025 (50+ teams)
<span class="text-green-terminal">[DSA]</span>     Solved 700+ problems across LeetCode & GeeksforGeeks


<span class="text-green-terminal">bharanidharan@dev</span>:<span class="text-cyan-terminal">~</span>$ cat education.txt

<span class="text-pink-terminal">B.Sc Computer Science</span> — Hindustan College of Arts and Science
<span class="text-gray-terminal">2023 – 2026 &middot; CGPA: 8.6/10.0</span>

<span class="text-pink-terminal">High School Certificate</span> — APS Academy Matric Hr Sec School
<span class="text-gray-terminal">2022 – 2023 &middot; CGPA: 9.6/10.0</span>


<span class="text-green-terminal">bharanidharan@dev</span>:<span class="text-cyan-terminal">~</span>$ cat contact.txt

<span class="text-pink-terminal">Email:</span>    <a href="mailto:Bharanidharan0578@gmail.com" class="hover:underline">Bharanidharan0578@gmail.com</a>
<span class="text-pink-terminal">Phone:</span>    <a href="tel:+919150974102" class="hover:underline">+91 9150974102</a>
<span class="text-pink-terminal">Location:</span> Coimbatore, Tamil Nadu, India

<span class="text-gray-terminal"># Social Links</span>
<span class="text-cyan-terminal">GitHub:</span>   <a href="https://github.com/bharanidharan-s" target="_blank" rel="noopener noreferrer" class="hover:underline">github.com/bharanidharan-s</a>
<span class="text-cyan-terminal">LinkedIn:</span> <a href="https://linkedin.com/in/bharanidharan-s" target="_blank" rel="noopener noreferrer" class="hover:underline">linkedin.com/in/bharanidharan-s</a>


<span class="text-green-terminal">bharanidharan@dev</span>:<span class="text-cyan-terminal">~</span>$ exit
<span class="text-gray-terminal">logout</span>
<span class="text-gray-terminal">Connection to bharanidharan.dev closed.</span>`

const App = memo(function App() {
    const [html, setHtml] = useState('')
    const idx = useRef(0)
    const [cursorVisible, setCursorVisible] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            if (idx.current >= CONTENT.length) {
                clearInterval(timer)
                return
            }

            idx.current += 3
            let pos = idx.current

            const slice = CONTENT.substring(0, pos)
            const lastOpen = slice.lastIndexOf('<')
            const lastClose = slice.lastIndexOf('>')
            if (lastOpen > lastClose) {
                const tagEnd = CONTENT.indexOf('>', pos)
                if (tagEnd !== -1) {
                    pos = tagEnd + 1
                    idx.current = pos
                }
            }

            setHtml(CONTENT.substring(0, pos).replace(/\n/g, '<br/>'))
            window.scrollBy(0, 20)
        }, 30)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const t = setInterval(() => setCursorVisible(v => !v), 500)
        return () => clearInterval(t)
    }, [])

    return (
        <main
            className="bg-black text-white font-terminal text-[14px] w-[90%] max-w-[750px] mx-auto mt-[50px] md:mt-[100px] mb-[100px] leading-relaxed"
            role="main"
            aria-label="Bharanidharan S Portfolio Terminal"
        >
            <span dangerouslySetInnerHTML={{ __html: html }} />
            <span className="text-green-terminal" style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
        </main>
    )
})

export default App
